/**
 * web/agent/system-metrics.ts – Lightweight host CPU/RAM metrics for the web HUD.
 */

import os from "node:os";

export interface SystemMetricsSnapshot {
  cpu_percent: number;
  ram_percent: number;
  cpu_series: number[];
  ram_series: number[];
  sample_interval_ms: number;
  platform: NodeJS.Platform;
}

export interface SystemMetricsContext {
  json(payload: unknown, status?: number): Response;
}

type CpuTotals = {
  idle: number;
  total: number;
};

function readCpuTotals(): CpuTotals {
  let idle = 0;
  let total = 0;
  for (const cpu of os.cpus()) {
    const times = cpu?.times;
    if (!times) continue;
    idle += times.idle;
    total += times.user + times.nice + times.sys + times.idle + times.irq;
  }
  return { idle, total };
}

function roundPercent(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value * 10) / 10));
}

function pushSample(series: number[], value: number, maxSamples: number): number[] {
  const next = [...series, value];
  return next.length > maxSamples ? next.slice(next.length - maxSamples) : next;
}

export class SystemMetricsSampler {
  private lastCpuTotals: CpuTotals | null = null;
  private cpuSeries: number[] = [];
  private ramSeries: number[] = [];

  constructor(
    private readonly maxSamples = 30,
    private readonly sampleIntervalMs = 2000,
  ) {}

  readSnapshot(): SystemMetricsSnapshot {
    const currentCpuTotals = readCpuTotals();
    let cpuPercent = 0;
    if (this.lastCpuTotals) {
      const deltaIdle = currentCpuTotals.idle - this.lastCpuTotals.idle;
      const deltaTotal = currentCpuTotals.total - this.lastCpuTotals.total;
      cpuPercent = deltaTotal > 0 ? ((deltaTotal - deltaIdle) / deltaTotal) * 100 : 0;
    }
    this.lastCpuTotals = currentCpuTotals;

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = Math.max(0, totalMem - freeMem);
    const ramPercent = totalMem > 0 ? (usedMem / totalMem) * 100 : 0;

    const cpuValue = roundPercent(cpuPercent);
    const ramValue = roundPercent(ramPercent);
    this.cpuSeries = pushSample(this.cpuSeries, cpuValue, this.maxSamples);
    this.ramSeries = pushSample(this.ramSeries, ramValue, this.maxSamples);

    return {
      cpu_percent: cpuValue,
      ram_percent: ramValue,
      cpu_series: [...this.cpuSeries],
      ram_series: [...this.ramSeries],
      sample_interval_ms: this.sampleIntervalMs,
      platform: process.platform,
    };
  }
}

const defaultSampler = new SystemMetricsSampler();

export function handleSystemMetricsRequest(ctx: SystemMetricsContext, sampler: SystemMetricsSampler = defaultSampler): Response {
  return ctx.json(sampler.readSnapshot(), 200);
}
