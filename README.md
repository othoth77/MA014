# MA014 — MYTHOS ESTIMATOR

**Agent code:** MA014  
**Agent ID:** `mythos-estimator`  
**Parent registry:** [othoth77/agents](https://github.com/othoth77/agents)  
**Status:** In development — not production-ready

MA014 is a multi-domain technical costing, pricing and material-optimization agent. It starts with aluminium joinery and transport/vehicle service costing, then expands to woodworking, metal fabrication, construction and production.

## Scope
- Comprehensive cost ledger: fixed, variable, semi-variable/mixed, one-off/irregular, direct, indirect and capital/depreciation costs.
- Configurable expense categories, frequencies, currencies, units, tax basis, allocation drivers and source provenance.
- Correct allocation of business overhead to jobs, products, trips and services, with double-counting safeguards.
- Aluminium profiles, glass, accessories, bills of materials, cutting plans, kerf, trim, waste and reusable offcuts.
- Vehicle/trip costing: loaded and empty kilometres, fuel, maintenance, tyres, depreciation, fixed vehicle costs, labor/time, tolls and parking.
- Break-even cost, target margin/markup, suggested price, actual quoted price and profit/loss scenarios.
- Historical estimate-vs-actual learning through the parent MYTHOS Learning System.

## Repository boundaries
This repository owns MA014 domain implementation, deterministic calculation engines, tests and technical specifications. The parent [agents repository](https://github.com/othoth77/agents) owns agent identity, shared learning contracts, canonical memory governance, queue, HYBRID resource guard, AI routing, permissions, approvals, audit and shared platform services.

## Specifications
- [MA014 master specification](docs/MA014-MASTER-SPEC.md)
- [Parent MYTHOS Learning System](https://github.com/othoth77/agents/blob/main/docs/LEARNING-SYSTEM.md)

## Current implementation truth
This repository is a starter scaffold. The specifications do not claim that production costing engines, route integrations, cutting optimization, learning runtime, client database or document issuance exist. No production calculation or external issuance capability is authorized.

## Development
Requirements: Node.js 22+ and npm.

```bash
npm install
npm run typecheck
npm test
npm run build
```

## Correctness and safety
- Deterministic, unit-aware calculations own financial and engineering arithmetic; AI interprets and explains.
- Every calculation exposes inputs, formulas, assumptions, rounding and provenance.
- Client workspaces and customer history remain isolated.
- Historical prices are never silently treated as current.
- Avoid double counting depreciation, financing, reserves, fuel and overhead.
- Devis and Facture remain drafts pending explicit approval.
- Heavy model/training/optimization work uses the parent queue and resource guard.
