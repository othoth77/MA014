# MA014 — MYTHOS ESTIMATOR

**Agent code:** MA014  
**Agent ID:** `mythos-estimator`  
**Parent registry:** [othoth77/agents](https://github.com/othoth77/agents)  
**Status:** In development — not production-ready

MA014 is the MYTHOS technical costing and material-optimization agent. It converts customer job requirements into traceable quantities, bills of materials, production/cutting plans, cost breakdowns, and reviewable quotation or invoice drafts.

## Initial scope

The first trade module is **aluminium joinery**. Planned extensions include woodworking/furniture, metal fabrication, construction, printing/production, and configurable trades.

## Repository boundaries

This repository contains MA014 implementation code, trade modules, calculation engines, tests, and technical documentation.

Shared agent identity, catalog registration, universal policies, permissions, queue orchestration, resource guard, AI routing, audit, and canonical memory remain owned by the [parent agents repository](https://github.com/othoth77/agents). MA014 must integrate with those shared services rather than creating parallel implementations.

## Current implementation state

This repository is a starter scaffold. No production calculation engine, client database, cutting optimizer, document issuer, or external integration is claimed to exist yet.

## Development

Requirements: Node.js 22+ and npm.

```bash
npm install
npm run typecheck
npm test
npm run build
```

## Safety and correctness

- Every calculation must expose inputs, units, formulas, assumptions, rounding, and source provenance.
- Client workspaces and all customer data must be isolated.
- Supplier prices require source and effective date; stale or estimated prices must be labelled.
- Cutting plans must account for stock length, kerf, trim, compatibility, and reusable offcuts.
- Quotations and invoices are drafts until explicitly reviewed and approved.
- No purchasing, sending, payment, accounting mutation, or legal issuance without separately approved permissions.
- Expensive or model-based jobs must use the parent platform's resource guard and queue.
