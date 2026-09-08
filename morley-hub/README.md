# Morley Hub

**Master GitHub repository for project organization, provenance, submission references, and security documentation.**

## Attribution

Project records in this hub attribute the projects to **Morley Moses Apooch** where the underlying project records support that attribution.

This repository distinguishes:

- `user_claim` — supplied as a claim by the project owner
- `documented` — supported by a project document or stored project metadata
- `externally_verified` — independently verified by an authoritative external source

A GitHub repository or this hub does **not** by itself establish legal ownership, copyright registration, patent rights, trademark registration, or acceptance by an IP office.

## Projects indexed

1. Morley Search Matrix / Search Engine
2. MOPROTEC Copyrighter
3. Clean Hands Clean Money FAM
4. Proprietary Clean-Room Cybersecurity Architecture
5. WIPO April 2026 submission reference

## Quick start

Requires Node.js 20+.

```bash
npm install
npm run validate
npm test
npm start
```

Open `http://127.0.0.1:3000`.

## API

- `GET /api/health`
- `GET /api/registry`
- `GET /api/projects`
- `GET /api/projects/:id`
- `GET /api/submissions`
- `GET /api/provenance`
- `GET /api/audit`

## Security

Do not commit credentials, private keys, financial records, private identity documents, or confidential evidence. See [SECURITY.md](SECURITY.md).
