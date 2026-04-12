import { expect, test } from "bun:test";
import { SystemMetricsSampler } from "../../../src/channels/web/agent/system-metrics.js";

test("SystemMetricsSampler returns bounded CPU/RAM payloads with rolling series", () => {
  const sampler = new SystemMetricsSampler(3, 1500);

  const first = sampler.readSnapshot();
  const second = sampler.readSnapshot();
  const third = sampler.readSnapshot();
  const fourth = sampler.readSnapshot();

  for (const sample of [first, second, third, fourth]) {
    expect(sample.cpu_percent).toBeGreaterThanOrEqual(0);
    expect(sample.cpu_percent).toBeLessThanOrEqual(100);
    expect(sample.ram_percent).toBeGreaterThanOrEqual(0);
    expect(sample.ram_percent).toBeLessThanOrEqual(100);
    expect(sample.sample_interval_ms).toBe(1500);
    expect(Array.isArray(sample.cpu_series)).toBe(true);
    expect(Array.isArray(sample.ram_series)).toBe(true);
    expect(sample.cpu_series.length).toBeLessThanOrEqual(3);
    expect(sample.ram_series.length).toBeLessThanOrEqual(3);
  }

  expect(fourth.cpu_series.length).toBe(3);
  expect(fourth.ram_series.length).toBe(3);
});
