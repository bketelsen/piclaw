const REMOVAL_MESSAGE = 'The VNC harness is unavailable in the stripped web UI build.';

function renderRemovalMessage(): void {
  if (typeof document === 'undefined') return;
  const root = document.body;
  if (!root) return;
  root.innerHTML = '';

  const shell = document.createElement('main');
  shell.style.display = 'grid';
  shell.style.placeItems = 'center';
  shell.style.minHeight = '100vh';
  shell.style.padding = '24px';
  shell.style.fontFamily = 'system-ui, sans-serif';
  shell.style.background = '#0b1020';
  shell.style.color = '#e6edf3';

  const card = document.createElement('section');
  card.style.maxWidth = '32rem';
  card.style.padding = '24px';
  card.style.border = '1px solid rgba(230, 237, 243, 0.18)';
  card.style.borderRadius = '16px';
  card.style.background = 'rgba(15, 23, 42, 0.92)';
  card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.35)';

  const title = document.createElement('h1');
  title.textContent = 'VNC harness removed';
  title.style.margin = '0 0 12px';
  title.style.fontSize = '1.25rem';

  const body = document.createElement('p');
  body.textContent = REMOVAL_MESSAGE;
  body.style.margin = '0';
  body.style.lineHeight = '1.5';

  card.append(title, body);
  shell.append(card);
  root.append(shell);
}

if (typeof window !== 'undefined') {
  window.__VNC_HARNESS__ = {
    removed: true,
    message: REMOVAL_MESSAGE,
  };
  window.addEventListener('DOMContentLoaded', renderRemovalMessage, { once: true });
  renderRemovalMessage();
  console.warn(`[vnc-harness] ${REMOVAL_MESSAGE}`);
}
