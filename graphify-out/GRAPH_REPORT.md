# Graph Report - oslo-hack  (2026-10-07)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 12 nodes · 19 edges · 3 communities (2 shown, 1 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 47,750 input · 46 output

## Graph Freshness
- Built from commit: `70276c9e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Landing Page Layout
- Hack Steps Navigation
- Session Plan Toggle

## God Nodes (most connected - your core abstractions)
1. `Session plan (terminal toggle)` - 5 edges
2. `Oslo Hack landing page (index.html)` - 5 edges
3. `Navigation header` - 5 edges
4. `Build step` - 4 edges
5. `Meet step` - 4 edges
6. `Hero section` - 3 edges
7. `setPlanState()` - 2 edges
8. `togglePlan()` - 2 edges
9. `CTA band` - 2 edges
10. `Footer` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Build step` --conceptually_related_to--> `Session plan (terminal toggle)`  [EXTRACTED]
  index.html → index.html  _Bridges community 0 → community 1_

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Meet → Build → Share workflow** — index_meet, index_build, index_share [EXTRACTED 0.95]

## Communities (3 total, 1 thin omitted)

### Community 0 - "Landing Page Layout"
Cohesion: 0.60
Nodes (5): Oslo Hack landing page (index.html), CTA band, Footer, Hero section, Session plan (terminal toggle)

### Community 1 - "Hack Steps Navigation"
Cohesion: 0.83
Nodes (4): Build step, Meet step, Navigation header, Share step

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Oslo Hack landing page (index.html)` connect `Landing Page Layout` to `Hack Steps Navigation`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Why does `Navigation header` connect `Hack Steps Navigation` to `Landing Page Layout`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Why does `Session plan (terminal toggle)` connect `Landing Page Layout` to `Hack Steps Navigation`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._