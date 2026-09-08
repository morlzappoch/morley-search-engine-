# Architecture

```text
Browser
   |
   v
Express server
   +--> Static dashboard
   +--> JSON API
   +--> Registry loader
           +--> config/project-registry.json
           +--> records/projects/
           +--> records/submissions/
           +--> records/audit/
```

The registry is the source of truth for master metadata. The dashboard is read-only with respect to the registry.
