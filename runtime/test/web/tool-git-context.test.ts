import { expect, test } from 'bun:test';

import {
  extractShellCwdFromCommand,
  extractToolContextPath,
} from '../../web/src/ui/tool-git-context.js';

test('extractShellCwdFromCommand parses leading cd prefixes', () => {
  expect(extractShellCwdFromCommand('cd /workspace/piclaw && bun test')).toBe('/workspace/piclaw');
  expect(extractShellCwdFromCommand("cd 'projects/demo app' && make test")).toBe('projects/demo app');
  expect(extractShellCwdFromCommand('echo hi')).toBeNull();
});

test('extractToolContextPath prefers cwd and explicit repo context fields', () => {
  expect(extractToolContextPath('bash', { cwd: 'piclaw', command: 'echo hi' })).toBe('piclaw');
  expect(extractToolContextPath('write', { project_dir: 'projects/demo' })).toBe('projects/demo');
  expect(extractToolContextPath('autoresearch', { repo_path: 'projects/demo' })).toBe('projects/demo');
});

test('extractToolContextPath ignores generic file paths for non-execution tools', () => {
  expect(extractToolContextPath('read', { path: 'notes/index.md' })).toBeNull();
  expect(extractToolContextPath('write', { filePath: 'notes/index.md' })).toBeNull();
  expect(extractToolContextPath('search', { paths: ['a/b.md', 'c/d.md'] })).toBeNull();
});

test('extractToolContextPath falls back to command prefixes', () => {
  expect(extractToolContextPath('bash', { command: 'cd /workspace/piclaw && bun run typecheck' })).toBe('/workspace/piclaw');
  expect(extractToolContextPath('exec_batch', { commands: ['cd repo && git status', 'pwd'] })).toBe('repo');
  expect(extractToolContextPath('bash', null)).toBeNull();
});
