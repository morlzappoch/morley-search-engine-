# Morley Search Engine & Technology Hub

**Founder / Originator / Lead Software Architect:** Morley Moses Apooch  
**Repository:** `morlzappoch/morley-search-engine-`  
**Status:** Active project and provenance hub  
**Public signature marker:** `MorleyApooch*`

## Overview

This repository is the central development and documentation home for the Morley Search Engine ecosystem. It combines the working search-engine code with project records, provenance documentation, security guidance, deployment references, and the **Wake the Sleeping Giant — Blue Ocean Code** strategy.

The repository records project attribution and user-provided provenance carefully. A repository record is not, by itself, a government registration, patent grant, trademark registration, copyright registration, regulatory approval, or determination of legal ownership.

## Technology Portfolio

| Project | Focus | Record |
|---|---|---|
| **Morley Search Matrix / ALLMINE** | Independent search and information infrastructure | `morley-hub/config/project-registry.json` |
| **MOPROTEC Copyrighter** | IP/provenance mobile software concept | `morley-hub/config/project-registry.json` |
| **Clean Hands Clean Money FAM** | Indigenous-led fintech, cybersecurity and economic-development initiative | `morley-hub/config/project-registry.json` |
| **Clean-Room Cybersecurity Architecture** | Anomaly detection, DDoS-resistant protection and firewall/security architecture | `morley-hub/config/project-registry.json` |
| **Morley Hub** | Project registry, provenance, security and development infrastructure | `morley-hub/` |

## Wake the Sleeping Giant — Blue Ocean Code

The strategic framework connects the portfolio through eight principles:

1. **Own the Build** — maintain clear provenance and development evidence.
2. **Protect the Data** — minimize collection and protect confidential information.
3. **Defend the Infrastructure** — build security into the architecture.
4. **Build Independence** — preserve portability and reduce unnecessary platform dependence.
5. **Create Value** — build measurable economic, educational and community value.
6. **Build for Generations** — support continuity, succession and future developers.
7. **Verify Everything** — distinguish claims, documented records and independent verification.
8. **Scale Responsibly** — prototype, test, secure, review, deploy and expand.

**Activation sequence:** `IDEA → CODE → PROOF → SECURITY → DEPLOYMENT → USERS → VALUE → SCALE`

See [`docs/BLUE-OCEAN-CODE.md`](morley-hub/docs/BLUE-OCEAN-CODE.md).

## Search Engine

The core Morley Search Engine is a dependency-light Node.js application with a document database, inverted-index full-text search, TF-IDF ranking, prefix suggestions and a web interface.

### Architecture

```text
morley-search-engine/
├── backend/
│   ├── copyright.js
│   ├── db.js
│   ├── search-engine.js
│   └── server.js
├── frontend/
│   └── index.html
└── data/
```

### Run locally

```bash
node backend/server.js
```

Then open `http://localhost:8080`.

### API surface

| Method | Route | Purpose |
|---|---|---|
| GET | `/api/health` | Engine/database health and statistics |
| GET | `/api/documents` | List indexed documents |
| POST | `/api/documents` | Add and index a document |
| DELETE | `/api/documents/:id` | Remove a document |
| GET | `/api/search?q=...&limit=10` | Ranked full-text search |
| GET | `/api/suggest?q=...` | Prefix suggestions |

## ALLMINE Deployment

The project registry records the existing ALLMINE production deployment at:

`https://clinquant-beignet-49a9c0.netlify.app/`

The intended source-control relationship is documented as **GitHub `main` → Netlify project → live site**. The exact Netlify account connection and authorization must be confirmed inside Netlify before treating that pipeline as active.

See [`docs/NETLIFY-DEPLOYMENT.md`](morley-hub/docs/NETLIFY-DEPLOYMENT.md).

> **Important:** `netlify.toml` currently targets the Morley Hub static dashboard. The ALLMINE production source directory still needs to be confirmed before changing the Netlify publish directory. Do not overwrite the live ALLMINE deployment with the hub dashboard without that verification.

## Provenance & Evidence

The hub uses evidence states such as:

- `user_claim` — supplied by the project owner but not independently verified here.
- `documented` — supported by a project document or repository record.
- `externally_verified` — independently confirmed by an authoritative external source.

Private identity information, financial records and treaty identifiers are intentionally excluded from public-facing project files.

See [`morley-hub/docs/PROVENANCE.md`](morley-hub/docs/PROVENANCE.md) and [`morley-hub/SECURITY.md`](morley-hub/SECURITY.md).

## WIPO Reference

The hub contains a documented reference to an April 2026 WIPO submission concerning the **Innovation Submission – Proprietary Clean-Room Cybersecurity Architecture**. The record does not assert acceptance, registration, approval or adjudication by WIPO.

See [`morley-hub/docs/WIPO-SUBMISSION.md`](morley-hub/docs/WIPO-SUBMISSION.md).

## Security

Never commit passwords, API keys, private keys, financial records, private identity documents or confidential evidence. Preserve repository history, timestamps, hashes and relevant logs when documenting an IP or security incident.

See [`morley-hub/SECURITY.md`](morley-hub/SECURITY.md).

## License & Rights

The repository's code and separately identified portfolio projects may have different licensing and rights positions. See `LICENSE.md` and the project-specific provenance/licensing records before reuse or redistribution.

---

**Morley Moses Apooch**  
Founder / Originator / Lead Software Architect  
`MorleyApooch*`

**WAKE THE SLEEPING GIANT. BUILD THE BLUE OCEAN.**
