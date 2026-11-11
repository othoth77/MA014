# MA014 — MYTHOS ESTIMATOR

**Catalog code:** MA014  
**Internal ID:** `mythos-estimator`  
**Status:** Reserved / in development  
**Operational status:** Planned  
**Initial domain:** Aluminium joinery

## Mission

Prepare traceable technical and commercial studies for customer jobs across multiple trades. Convert a customer's requirements into quantities, material lists, production and cutting plans, labor and operating costs, pricing scenarios, and reviewable **Devis** or **Facture** drafts.

This is a specialist agent, not a generic calculator and not a replacement for MA008 MYTHOS GROWTH. MA014 owns job-level technical calculations, material optimization and cost estimates. MA008 owns business growth, CRM and revenue intelligence.

## Initial module: aluminium joinery

For a window, door or other aluminium assembly, the intended workflow is:

1. Capture dimensions, product type, quantities, profile series, glass, hardware and finish requirements.
2. Load the selected client's approved profile, accessory, supplier and price catalog.
3. Calculate profile lengths, glass area, hardware, consumables and bill of materials.
4. Optimize cutting across available stock lengths. Account for saw kerf, trim allowances, profile compatibility, orientation and reusable offcuts.
5. Produce a human-readable cutting list, stock allocation, remaining offcuts and waste report.
6. Calculate labor, transport, overhead, waste allowance, margin and configurable taxes.
7. Generate a transparent cost breakdown and a Devis or Facture draft for review and approval.

## Planned trade modules

- Aluminium joinery
- Woodworking and furniture
- Metal fabrication
- Construction and building works
- Printing and production
- Additional configurable trades after their formulas and constraints are validated

Each trade module must define its own units, material model, production rules, formulas, constraints, validation data and acceptance tests. Do not assume that one trade's cutting or costing rules apply to another.

## Client-specific knowledge

Each client/business workspace must be isolated and may contain:

- Materials, dimensions, product specifications and approved alternatives
- Supplier identities, quotations, price lists, units and effective dates
- Historical jobs, quantities, actual consumption and corrections
- Labor rates, production times, transport and overhead rules
- Waste policy, margin policy and configurable tax settings
- Document templates, revisions and approval history

Prices must be labelled as verified current, customer-provided, historical or estimated. Every price needs a source and effective date where available. Stale data must be flagged; the agent must not silently treat an old price as current market truth. Cross-client retrieval is prohibited.

## Calculation and output requirements

Every result must expose inputs, units, formulas, assumptions, rounding rules, uncertainty and source references. The cost breakdown must separate materials, waste, labor, transport, overhead, margin and taxes. A cutting optimization result must show the actual cut layout and remaining reusable stock, not only a waste percentage.

Devis and Facture outputs are drafts by default. External sending, legally consequential issuance, purchases, payment collection and accounting mutations require separately approved integrations and explicit approval. None is enabled by this reservation.

## Platform integration and boundaries

- Use the parent MYTHOS Agents shared queue and universal resource guard for queued, model-based or resource-intensive work.
- Reuse parent permissions, approvals, audit, AI routing and OTHKM approved staging.
- Do not create a parallel queue, resource guard, model router, credential vault, approval system or canonical memory store.
- MA007 may supply approved external market/supplier research; MA014 validates source, date, unit and applicability before using it.
- MA005 owns mission orchestration; MA006 owns software implementation; MA008 owns growth and revenue intelligence.
- No arbitrary shell execution or free-form worker jobs.

## Activation gates

1. Dedicated implementation with reviewed requirements, architecture, data model, threat model and parent integration contract.
2. Client-isolated catalogs and historical job records with auditable provenance.
3. Aluminium joinery calculations validated against independently checked reference jobs.
4. Cutting-stock optimizer tested for stock lengths, kerf, trim, offcuts, compatibility and edge cases.
5. Costing engine tested for units, labor, transport, overhead, waste, margin, tax configuration and rounding.
6. Devis/Facture drafts with revision history and explicit approval; no unapproved external issuance.
7. Tests for stale prices, missing inputs, client isolation, formula traceability and failure recovery.
8. Integration with parent queue, resource guard, permissions, approvals, audit and OTHKM staging.
9. Independent review, runbook, rollback plan and explicit owner approval before production activation.

## Current reservation state

This entry reserves MA014 in the parent catalog only. It does not claim that an implementation, calculation engine, client database, integrations, jobs or production permissions exist. The next available catalog code remains MA015.
