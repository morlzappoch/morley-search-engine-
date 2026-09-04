# Morley Search Engine & Cloud Database Platform

© 2026 Morley Moses Apooch. All Rights Reserved. See `LICENSE.md`.

A fully functional, dependency-free full-text search engine with an
embedded document database and a web front end — runs anywhere Node.js
runs, with no `npm install` step and no external services required.

## Architecture

```
morley-search-engine/
├── LICENSE.md              Copyright & ownership record
├── backend/
│   ├── copyright.js        Shared license/ownership notice
│   ├── db.js               MorleyDB — collection-based document database
│   ├── search-engine.js    MorleySearch — inverted index + TF-IDF ranking
│   └── server.js           Zero-dependency REST API (Node "http" core module)
├── frontend/
│   └── index.html          Search UI + admin panel (vanilla JS, no build step)
└── data/                   JSON "shards" — the on-disk database (auto-created)
```

## Running it

```bash
node backend/server.js
```

Then open **http://localhost:8080** — search box on top, an "Add a
document" admin panel below it.

## REST API

| Method | Route | Description |
|---|---|---|
| GET | `/api/health` | Engine + database stats |
| GET | `/api/documents` | List all indexed documents |
| POST | `/api/documents` | `{ title, content, url? }` → index a document |
| DELETE | `/api/documents/:id` | Remove a document |
| GET | `/api/search?q=...&limit=10` | Ranked full-text search |
| GET | `/api/suggest?q=...` | Prefix ("type-ahead") term suggestions |

## How the search engine works

1. **Tokenizer** — lowercases, strips punctuation/accents, drops stop words.
2. **Inverted index** — `term → { docId: termFrequency }`, built in `search-engine.js`.
3. **Ranking** — TF-IDF: term frequency (normalized by document length) ×
   inverse document frequency, summed per query term, sorted descending.
4. **Type-ahead** — a character trie built alongside the index for prefix lookups.

## How the database works

`MorleyDB` is a small, collection-based document store (`db.js`) — think
"Mongo/Firestore in a single file." Each collection persists to a JSON
file under `data/`, supports schema validation, secondary indexes, and
CRUD. It is a genuine, working database — not a placeholder — but it is
sized for a single instance, not distributed/multi-region traffic.

## Scaling this to "all platforms" cloud infrastructure

This project runs as-is on any platform with Node.js 18+: Windows, macOS,
Linux, Docker, or serverless containers. To go from "single-instance" to
managed multi-region cloud infrastructure, the pieces to swap are:

| Component | Here (works today) | Swap-in for scale |
|---|---|---|
| Database | `backend/db.js` (JSON files) | PostgreSQL, MongoDB Atlas, DynamoDB, Firestore |
| Search index | `backend/search-engine.js` (in-memory) | Elasticsearch / OpenSearch / Postgres full-text |
| Server | Node `http` core module | Same code behind Nginx + PM2, or a container on Render/Fly.io/Railway/AWS |
| Front end | Static `index.html` | Same file served via any CDN (Cloudflare Pages, Netlify, S3+CloudFront) |

The API contract (`/api/search`, `/api/documents`) is written so that
swap doesn't require changing the front end.

## On copyright & formal registration

Every source file above carries an embedded copyright/ownership header
identifying Morley Moses Apooch as author and owner, per the notice in
`LICENSE.md`. That header — plus this repository's timestamped creation —
is useful *evidence* of authorship. It is **not** a government filing.
Formal copyright/trademark registration in Canada must be filed directly
with CIPO (Canadian Intellectual Property Office); no software or AI tool
can complete that filing on your behalf.
It's built, tested end-to-end, and packaged — here's what's in it:

Morley Search Engine & Cloud Database Platform — a real, working full-stack app, zero dependencies (no npm install needed, runs on any machine with Node.js):

backend/db.js — MorleyDB, a collection-based document database (schema validation, indexes, CRUD, JSON-persisted)
backend/search-engine.js — inverted index + TF-IDF ranked search, with type-ahead
backend/server.js — REST API (/api/search, /api/documents, /api/health, etc.)
frontend/index.html — search UI + admin panel
LICENSE.md — full ownership/license record
Every file: header with your name, DOB, treaty number, title, both emails, and phone

I ran it live before sending it to you — indexed test documents, ran a ranked search, hit the health endpoint — all working.

Two honest notes:

"All platforms, all backend/frontend dependencies" — nobody builds Google-scale infrastructure in one shot, so I gave you a genuinely functional single-instance version instead of a fake mega-spec. The README has a table showing exactly what to swap (Postgres/MongoDB, Elasticsearch, a cloud host) if you want to scale it later — the API stays the same either way.
"Put it on record / make it official" — I embedded your copyright notice in every file and wrote it up formally in LICENSE.md, which is real evidence of authorship. But I can't file anything with a government office. Copyright exists automatically the moment you create the work — no filing needed for that. If you want an official certificate (for copyright or a trademark), that has to go through CIPO (Canadian Intellectual Property Office) directly — no software, including this one, can submit that on your behalf.
