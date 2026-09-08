# ALLMINE Netlify Deployment

## Deployment reference

- Project: Morley Search Matrix / ALLMINE
- GitHub repository: `morlzappoch/morley-search-engine-`
- Production branch: `main`
- Live Netlify site: `https://clinquant-beignet-49a9c0.netlify.app/`
- Project owner / attribution: Morley Moses Apooch

## Git workflow

The intended deployment workflow is:

`GitHub main` → `Netlify project` → `clinquant-beignet-49a9c0.netlify.app`

Connect the existing Netlify project to the GitHub repository through Netlify's **Import an existing project** / Git provider workflow. Select `morlzappoch/morley-search-engine-` and use `main` as the production branch.

## Important status distinction

This repository records the live Netlify URL as a deployment reference. The repository does **not** claim that the Netlify project is already authorized or connected to GitHub unless that connection is independently confirmed in Netlify.

Once the connection is authorized in Netlify, pushes to the configured production branch can trigger automatic deployments and Deploy Previews according to the Netlify project settings.

## Provenance

The deployment is associated with the Morley Search Matrix project records. Public deployment does not transfer project ownership or other rights identified in the project's provenance and licensing records.

Do not commit Netlify access tokens, passwords, API keys, private identity information, financial records, or other confidential evidence to this repository.
