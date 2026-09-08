import test from "node:test";
import assert from "node:assert/strict";
import { loadRegistry } from "../apps/hub/server.js";

test("registry owner is Morley Moses Apooch", async () => {
  const registry = await loadRegistry();
  assert.equal(registry.registry.owner.name, "Morley Moses Apooch");
});

test("every project has attribution", async () => {
  const registry = await loadRegistry();
  for (const project of registry.projects) {
    assert.ok(project.id);
    assert.equal(project.attributedTo, "Morley Moses Apooch");
  }
});

test("WIPO record remains a submission reference", async () => {
  const registry = await loadRegistry();
  const item = registry.submissions.find((x) => x.id === "wipo-april-2026");
  assert.ok(item);
  assert.equal(item.status, "documented");
  assert.equal(item.signoff, "MorleyApooch*");
  assert.equal(item.verification.acceptedByWipo, false);
});
