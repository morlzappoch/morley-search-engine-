# Morley Search Engine & Cloud Database Platform
I’m also under attack I believe it’s a major company for my code I developed with Aubin under 45 minutes 
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
# INTELLECTUAL PROPERTY & PROPRIETARY RIGHTS NOTICE
Copyright © 2026 Morley Moses Apooch. All Rights Reserved.
## Brand & Trademark Ownership
All software design, system mechanics, algorithms, and visual branding assets contained within this repository are the exclusive property of the author and are managed under the following registered global identities:
*   **Corporate Umbrella:** CLEANHANDSCLEANMONEYFAM™
*   **Creative/Developer Signature:** HOLYCHILD / GHOST®
*   **Project Module Asset:** jubilantrain™
## Global IP Registrations Pending
Notice is hereby given that formal intellectual property claims, registration letters, and international framework protections for the aforementioned brands and their associated software designs have been officially submitted to:
1. The Canadian Intellectual Property Office (CIPO)
2. The World Intellectual Property Organization (WIPO)
## Usage Restrictions & Non-Disclosure
This codebase, including its anomaly containment mechanics, security protocols, and architectural pipelines, contains highly confidential, proprietary information. 
*   Unauthorized copying, modification, reverse engineering, or distribution of any file within this ecosystem is strictly prohibited.
*   No license—express, implied, or otherwise—is granted to any third party to utilize these assets for commercial or public deployment without explicit, written authorization from Morley Moses Apooch.
For licensing inquiries or authorized validation, contact: moapooch121@gmail.com
<img width="2316" height="3088" alt="IMG_0013" src="https://github.com/user-attachments/assets/1e21a405-a566-45f3-8438-2b69389bb3ec" />
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
{
  "project_metadata": {
    "software_name": "Proprietary Application Build",
    "version": "1.0.0",
    "release_date": "2026-04-07",
    "status": "Production / Fully Functional"
  },
  "legal_ownership": {
    "copyright_holder": "Morley Moses Apooch",
    "copyright_year": 2026,
    "registered_date": "April 7, 2026",
    "jurisdiction": "Saskatchewan, Canada"
  },
  "licensing_terms": {
    "license_type": "Proprietary / All Rights Reserved",
    "commercial_use": false,
    "distribution_allowed": false,
    "modification_allowed": false,
    "notice_requirement": "This embedded license string and copyright header must remain intact in all source files."
  },
  "security_compliance": {
    "unauthorized_access_protocol": "Report system breaches or illicit source code exfiltration directly to the Canadian Centre for Cyber Security.",
    "incident_reporting_portal": "https://========================================================================
PROPERTY OF: Morley Moses Apooch
PROJECT: Fully Functional Application Framework
BUILD DATE: April 7, 2026
LOCATION: Saskatchewan, Canada
------------------------------------------------------------------------
LEGAL NOTICE: ALL RIGHTS RESERVED. 
No part of this software codebase, embedded metadata, or functional 
architecture may be reproduced, distributed, hosted, or modified 
without the express written consent of the copyright holder. 
Unauthorized reproduction or removal of this license header constitutes 
copyright infringement and will be reported to national cybercrime authorities.
========================================================================
