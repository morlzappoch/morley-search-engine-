import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "../..");
const publicDir = path.join(root, "apps", "hub", "public");
const registryPath = path.join(root, "config", "project-registry.json");
const auditPath = path.join(root, "records", "audit", "audit-log.json");

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));
app.use(express.static(publicDir));

async function loadRegistry() {
  return JSON.parse(await readFile(registryPath, "utf8"));
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "morley-hub", timestamp: new Date().toISOString() });
});

app.get("/api/registry", async (_req, res, next) => {
  try { res.json(await loadRegistry()); } catch (error) { next(error); }
});

app.get("/api/projects", async (_req, res, next) => {
  try { res.json((await loadRegistry()).projects); } catch (error) { next(error); }
});

app.get("/api/projects/:id", async (req, res, next) => {
  try {
    const project = (await loadRegistry()).projects.find((item) => item.id === req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (error) { next(error); }
});

app.get("/api/submissions", async (_req, res, next) => {
  try { res.json((await loadRegistry()).submissions); } catch (error) { next(error); }
});

app.get("/api/provenance", async (_req, res, next) => {
  try {
    const registry = await loadRegistry();
    res.json({
      owner: registry.registry.owner,
      projects: registry.projects.map(({ id, name, attributedTo, status, provenance, claimedPriorityDate }) => ({
        id, name, attributedTo, status, provenance, claimedPriorityDate
      }))
    });
  } catch (error) { next(error); }
});

app.get("/api/audit", async (_req, res, next) => {
  try { res.json(JSON.parse(await readFile(auditPath, "utf8"))); } catch (error) { next(error); }
});

app.use((_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
});

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

if (process.env.NODE_ENV !== "test") {
  app.listen(port, host, () => console.log(`Morley Hub running at http://${host}:${port}`));
}

export { app, loadRegistry };
