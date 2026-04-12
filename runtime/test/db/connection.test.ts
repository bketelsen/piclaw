import { expect, test } from "bun:test";
import "../helpers.js";

import { getDb, initDatabase } from "../../src/db/connection.js";

test("initDatabase reopens a stale cached sqlite handle", () => {
  initDatabase();
  const first = getDb();
  first.close();

  expect(() => initDatabase()).not.toThrow();

  const reopened = getDb();
  const row = reopened.query("SELECT 1 AS ok").get() as { ok: number } | null;
  expect(row?.ok).toBe(1);
});
