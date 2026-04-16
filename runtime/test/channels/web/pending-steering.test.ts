import { describe, expect, test } from "bun:test";
import { PendingSteeringStore } from "../../../src/channels/web/runtime/pending-steering.js";

describe("web pending steering store", () => {
  test("ignores undefined timestamps", () => {
    const store = new PendingSteeringStore();
    store.queue("web:1", undefined);
    expect(store.consumeAll("web:1")).toEqual([]);
  });

  test("returns all timestamps in ascending order and clears queue", () => {
    const store = new PendingSteeringStore();
    store.queue("web:1", "2024-01-01T00:00:00.000Z");
    store.queue("web:1", "2024-01-01T00:00:01.000Z");
    store.queue("web:1", "2024-01-01T00:00:00.500Z");

    expect(store.consumeAll("web:1")).toEqual([
      "2024-01-01T00:00:00.000Z",
      "2024-01-01T00:00:00.500Z",
      "2024-01-01T00:00:01.000Z",
    ]);
    expect(store.consumeAll("web:1")).toEqual([]);
  });
});
