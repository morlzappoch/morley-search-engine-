import { readFile } from "node:fs/promises";

const registry = JSON.parse(await readFile(new URL("../config/project-registry.json", import.meta.url), "utf8"));
for (const key of ["schemaVersion", "registry", "projects", "submissions", "evidence"]) {
  if (!(key in registry)) throw new Error(`Missing registry field: ${key}`);
}
if (registry.registry.owner?.name !== "Morley Moses Apooch") throw new Error("Unexpected owner");
const ids = new Set();
for (const project of registry.projects) {
  for (const field of ["id", "name", "attributedTo", "status"]) if (!project[field]) throw new Error(`Missing ${field} in project`);
  if (ids.has(project.id)) throw new Error(`Duplicate project ID: ${project.id}`);
  ids.add(project.id);
}
const wipo = registry.submissions.find((x) => x.id === "wipo-april-2026");
if (!wipo || wipo.signoff !== "MorleyApooch*" || wipo.verification.acceptedByWipo !== false) throw new Error("WIPO record verification guard failed");
console.log(`Registry valid: ${registry.projects.length} projects, ${registry.submissions.length} submissions.`);
