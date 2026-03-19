/**
 * ui/voice-mode.ts — Voice mode: speech input + terse speech output.
 *
 * Client-side only, uses Web Speech API (SpeechRecognition + SpeechSynthesis).
 * Single toggle persisted in localStorage.
 */

// ── State ───────────────────────────────────────────────────────

const STORAGE_KEY = "piclaw-voice-mode";

export function isVoiceModeEnabled(): boolean {
  try { return localStorage.getItem(STORAGE_KEY) === "1"; } catch { return false; }
}

export function setVoiceModeEnabled(enabled: boolean): void {
  try { localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0"); } catch {}
}

// ── Feature detection ───────────────────────────────────────────

export function hasSpeechRecognition(): boolean {
  return typeof window !== "undefined" && Boolean(
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
  );
}

export function hasSpeechSynthesis(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

export function isStandaloneWebApp(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.('(display-mode: standalone)')?.matches === true ||
    (navigator as any)?.standalone === true;
}

// ── Speech Recognition (input) ──────────────────────────────────

type RecognitionCallbacks = {
  onInterim: (text: string) => void;
  onFinal: (text: string) => void;
  onEnd: () => void;
  onError: (error: string) => void;
};

let activeRecognition: any = null;

export function startRecognition(callbacks: RecognitionCallbacks): boolean {
  if (activeRecognition) {
    stopRecognition();
  }

  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) {
    if (isIOS()) {
      callbacks.onError("Speech recognition unavailable on this device. Use the keyboard 🎤 dictation button instead.");
    } else {
      callbacks.onError("Speech recognition is not supported in this browser.");
    }
    return false;
  }

  try {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = navigator.language || "en-US";

    let finalTranscript = "";

    recognition.onresult = (event: any) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
          callbacks.onFinal(finalTranscript);
        } else {
          interim += result[0].transcript;
        }
      }
      if (interim) {
        callbacks.onInterim(finalTranscript + interim);
      }
    };

    recognition.onerror = (event: any) => {
      const errorType = event.error || "unknown";
      if (errorType === "no-speech") {
        // Silence — not a real error
        return;
      }
      if (errorType === "not-allowed" || errorType === "service-not-allowed") {
        callbacks.onError("Microphone access denied. Check browser permissions.");
      } else if (isIOS() && (errorType === "network" || errorType === "aborted")) {
        callbacks.onError("Speech recognition failed on iOS. Try the keyboard 🎤 dictation button instead.");
      } else {
        callbacks.onError(`Speech recognition error: ${errorType}`);
      }
    };

    recognition.onend = () => {
      if (activeRecognition === recognition) {
        activeRecognition = null;
      }
      callbacks.onEnd();
    };

    recognition.start();
    activeRecognition = recognition;
    return true;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (isIOS()) {
      callbacks.onError("Speech recognition failed on iOS. Use the keyboard 🎤 dictation button instead.");
    } else {
      callbacks.onError(`Failed to start speech recognition: ${msg}`);
    }
    return false;
  }
}

export function stopRecognition(): void {
  if (activeRecognition) {
    try { activeRecognition.stop(); } catch {}
    activeRecognition = null;
  }
}

export function isRecognizing(): boolean {
  return activeRecognition !== null;
}

// ── Terse text extraction ───────────────────────────────────────

/**
 * Extract a terse spoken summary from agent response text.
 * Strategy: first sentence + bullet points, strip code/paths/markdown.
 */
export function extractTerseText(markdown: string): string {
  if (!markdown || typeof markdown !== "string") return "";

  let text = markdown;

  // Remove code blocks
  text = text.replace(/```[\s\S]*?```/g, "");
  text = text.replace(/`[^`]+`/g, "");

  // Remove markdown formatting
  text = text.replace(/#{1,6}\s+/g, "");
  text = text.replace(/\*\*([^*]+)\*\*/g, "$1");
  text = text.replace(/\*([^*]+)\*/g, "$1");
  text = text.replace(/_([^_]+)_/g, "$1");
  text = text.replace(/~~([^~]+)~~/g, "$1");

  // Remove links but keep text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // Remove images
  text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, "");

  // Remove file paths
  text = text.replace(/`?[\w./\\-]+\.\w{1,5}`?/g, "");

  // Remove table formatting
  text = text.replace(/\|[^|\n]+\|/g, "");
  text = text.replace(/[-:]+\|[-:|]+/g, "");

  // Normalize whitespace
  text = text.replace(/\n{3,}/g, "\n\n");
  text = text.trim();

  if (!text) return "";

  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const parts: string[] = [];

  // First sentence or first line
  const firstLine = lines[0] || "";
  const sentenceEnd = firstLine.search(/[.!?]\s|[.!?]$/);
  if (sentenceEnd >= 0) {
    parts.push(firstLine.slice(0, sentenceEnd + 1).trim());
  } else {
    parts.push(firstLine);
  }

  // Collect bullet points (up to 5)
  let bulletCount = 0;
  for (let i = 1; i < lines.length && bulletCount < 5; i++) {
    const line = lines[i];
    if (/^[-•*]\s+/.test(line) || /^\d+[.)]\s+/.test(line)) {
      const cleaned = line.replace(/^[-•*]\s+/, "").replace(/^\d+[.)]\s+/, "");
      if (cleaned.length > 5) {
        parts.push(cleaned);
        bulletCount++;
      }
    }
  }

  return parts.join(". ").replace(/\.\./g, ".").trim();
}

// ── Speech Synthesis (output) ───────────────────────────────────

let currentUtterance: SpeechSynthesisUtterance | null = null;

export function speak(text: string, onEnd?: () => void): boolean {
  if (!hasSpeechSynthesis() || !text) return false;

  stopSpeaking();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.1;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  utterance.onend = () => {
    if (currentUtterance === utterance) currentUtterance = null;
    onEnd?.();
  };
  utterance.onerror = () => {
    if (currentUtterance === utterance) currentUtterance = null;
    onEnd?.();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  return true;
}

export function speakTerse(markdown: string, onEnd?: () => void): boolean {
  const terse = extractTerseText(markdown);
  if (!terse) return false;
  return speak(terse, onEnd);
}

export function stopSpeaking(): void {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  currentUtterance = null;
}

export function isSpeaking(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window && window.speechSynthesis.speaking;
}
