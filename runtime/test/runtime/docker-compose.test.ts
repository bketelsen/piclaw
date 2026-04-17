import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const DOCKER_COMPOSE_PATH = resolve(import.meta.dir, "../../..", "docker-compose.yml");

test("docker-compose publishes the web port on loopback by default", () => {
  const compose = readFileSync(DOCKER_COMPOSE_PATH, "utf8");

  expect(compose).toContain('- "${PICLAW_WEB_BIND_HOST:-127.0.0.1}:${PICLAW_WEB_PORT:-8080}:8080"');
  expect(compose).not.toContain('- "${PICLAW_WEB_PORT:-8080}:8080"');
});

test("docker-compose enables a tiny init process for clean signal forwarding", () => {
  const compose = readFileSync(DOCKER_COMPOSE_PATH, "utf8");

  expect(compose).toContain("init: true");
});
