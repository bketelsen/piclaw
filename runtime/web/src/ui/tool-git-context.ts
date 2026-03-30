function readTrimmedString(...values: unknown[]): string | null {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }
  return null;
}

function stripOuterQuotes(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

export function extractShellCwdFromCommand(command: unknown): string | null {
  if (typeof command !== 'string' || !command.trim()) return null;
  const match = command.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);
  if (!match?.[1]) return null;
  const candidate = stripOuterQuotes(match[1].trim());
  return candidate || null;
}

export function extractToolContextPath(toolName: unknown, args: unknown): string | null {
  const record = args && typeof args === 'object' ? args as Record<string, unknown> : null;
  if (!record) return null;

  const cwd = readTrimmedString(record.cwd, record.working_directory, record.workingDirectory);
  if (cwd) return cwd;

  const explicitRepoContext = readTrimmedString(
    record.project_dir,
    record.projectDir,
    record.repo_path,
    record.repoPath,
  );
  if (explicitRepoContext) return explicitRepoContext;

  const command = readTrimmedString(record.command);
  const commandCwd = extractShellCwdFromCommand(command);
  if (commandCwd) return commandCwd;

  if (Array.isArray(record.commands)) {
    for (const entry of record.commands) {
      const nestedCwd = extractShellCwdFromCommand(entry);
      if (nestedCwd) return nestedCwd;
    }
  }

  return null;
}
