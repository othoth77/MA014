# MA014 — MYTHOS ESTIMATOR
**Catalog code:** MA014  
**Internal ID:** `mythos-estimator`  
**Status:** In development — specification and scaffold only  
**Parent:** [othoth77/agents](https://github.com/othoth77/agents)  
**Shared learning platform:** Parent-owned MYTHOS Learning System

## Mission
A multi-domain, auditable technical costing and pricing agent. It turns requirements, measurements, business costs, supplier data and actual job outcomes into traceable quantities, bills of materials, production plans, cost models, pricing scenarios and reviewable Devis/Facture drafts. It starts with aluminium joinery and transport/vehicle costing, then expands through separately validated trade modules.

MA014 is not a generic chatbot and must not use an LLM as the authority for engineering or financial arithmetic. AI may interpret requests, collect missing inputs, select a validated domain module and explain results. Deterministic, unit-aware calculation engines own all consequential calculations.

## Domain roadmap
1. Aluminium joinery: windows, doors, profile systems, glass, accessories, fasteners, cutting stock, offcuts and workshop job costing.
2. Transport and vehicle service costing: route distance, loaded and empty kilometres, fuel, maintenance, tyres, depreciation, fixed vehicle costs, driver time, tolls, parking and trip pricing.
3. Woodworking and furniture.
4. Metal fabrication.
5. Construction and building works.
6. Printing and production.
7. Additional configurable trades after domain-specific validation.

Each domain module must own its schema, units, formulas, constraints, reference fixtures, validation rules and acceptance tests. Never apply one trade's assumptions to another trade.

## Universal cost ledger
Every workspace must support user-defined expense lines and categories. Required classifications:
- **Fixed:** rent, base salaries, insurance, subscriptions, permits, annual fees and fixed financing/lease costs.
- **Variable:** raw materials, fuel, consumables, packaging, per-unit commissions and usage-based energy.
- **Semi-variable / mixed:** electricity, telecoms, maintenance contracts and other costs with a fixed base plus usage component.
- **One-off / irregular:** repairs, replacement equipment, setup fees, exceptional purchases and irregular services.
- **Capital assets / depreciation:** equipment and vehicles allocated over a documented useful life or usage basis; distinguish depreciation from loan principal repayment.
- **Direct vs indirect:** costs attributable to one job versus shared business overhead.
- **Recurring frequency:** per trip, per unit, daily, weekly, monthly, quarterly, yearly, meter/hour/km or custom interval.

Each expense record should capture: label, category, cost behavior, direct/indirect flag, amount, currency, tax basis, unit, quantity, frequency, effective dates, allocation driver, workspace, source, evidence reference, entered-by, confidence, and review status. Users can add categories, edit values, deactivate old entries and define custom allocation rules.

## Cost allocation and accounting safeguards
- Support allocation by machine hours, labor hours, production units, area, weight, kilometres, trips, revenue share or an explicit custom driver.
- Allocate fixed overhead over a selected and visible capacity basis (actual, practical or planned activity); show under/over-absorption where relevant.
- Split mixed costs into base and usage components.
- Separate direct job costs from business overhead.
- Avoid double counting: depreciation is not loan principal; fuel is not embedded again in a per-km allowance; maintenance reserves are not duplicated with actual repair charges in the same period; tax-inclusive and tax-exclusive amounts must be explicit.
- Support period boundaries, accrual/reserve policies and actual-vs-estimated reconciliation.
- Show unallocated costs and warn when allocation drivers or activity denominators are missing.
- Keep original source entries immutable; corrections create reviewed revisions and audit events.

## Transport and vehicle costing module
Inputs include origin/destination or manually supplied distance, route provider/source, vehicle type, loaded distance, empty/deadhead distance, return distance, detours, waiting time, fuel type, consumption (L/100 km or equivalent), fuel price and effective date, annual business kilometres, utilization, driver/owner time and applicable tolls/parking.

Cost groups:
- Fuel: total operating kilometres × consumption / 100 × unit fuel price.
- Maintenance reserve: documented maintenance cost divided by expected interval/distance, or a reviewed historical cost-per-km.
- Tyres: replacement set cost divided by expected service kilometres.
- Depreciation: (acquisition value − expected residual value) / expected lifetime kilometres, or an explicitly selected time basis.
- Fixed costs: insurance, permits, inspection, taxes, subscriptions and finance/lease charges, allocated transparently over an appropriate annual/monthly activity base.
- Labor/time: driver wage or owner time, loading/unloading, waiting and handling.
- Other: tolls, parking, ferry, cleaning, dispatch, accommodation and user-defined expenses.

All kilometres that consume vehicle capacity must be counted, including empty/deadhead and return legs. Display loaded, empty and total distance separately. A route engine may suggest road distance, but the user can override it; preserve source and timestamp. Tunisia-specific prices, taxes, permits and rules must be configuration/data, not hard-coded foreign assumptions.

Outputs: break-even trip cost, cost per total km, cost per paid/loaded km, suggested selling price, user-entered price, profit/loss, margin and sensitivity scenarios. Distinguish gross margin on selling price from markup on cost:
- selling price for target gross margin = total cost / (1 - margin rate)
- selling price for markup = total cost × (1 + markup rate)
Show the chosen method. Do not double-count depreciation and loan principal; financing treatment must be explicitly configured.

## Aluminium joinery module
Capture product type, dimensions, quantity, profile system/series, glass, finish, hardware, accessories, fasteners, consumables and workshop-specific rules. Calculate profile lengths, glass area, bill of materials, labor and handling. Cutting optimization must account for stock lengths, compatibility, saw kerf, trim, defects, orientation and reusable offcuts. Return the cut layout, stock allocation, offcut inventory and waste report. A claimed optimized plan must be reproducible and testable.

## Pricing and documents
Every estimate separates direct materials, waste, labor, energy, transport, fixed/variable/semi-variable overhead allocation, equipment/depreciation, taxes, margin and contingency. Present break-even cost, recommended price and the price entered by the user with resulting profit/loss. Support conservative/base/high scenarios and sensitivity analysis. Devis and Facture remain drafts with revisions and explicit human approval. No sending, purchasing, payment collection, accounting mutation or legally consequential issuance is active by default.

## Historical learning and MYTHOS Learning System
MA014 must use the parent-owned shared learning contracts; it must not build a private competing memory, training registry, model router, queue or audit system.
- Keep tenant-isolated operational history: estimates, actual costs, measurements, corrections, price snapshots, approved formulas and job outcomes.
- Compare estimated versus actual consumption, labor, waste, time, route distance and cost. Record variance reason and confidence.
- A reviewed actual outcome may improve future estimates only within its authorized workspace unless explicitly sanitized and approved for shared knowledge.
- Separate raw history, reviewed facts, reusable knowledge, training datasets and model weights.
- Live learning creates a proposed rule/model/configuration revision; it never silently rewrites a validated formula or price.
- Evaluate proposed changes on held-out historical cases and regression fixtures before activation. Keep version, provenance, metrics, approver and rollback pointer.
- Import prepared CSV/XLSX/JSON datasets and approved model artifacts through the parent Training Registry. Validate schema, rights, provenance, quality, privacy, malware and evaluation split before use.
- Cross-agent learning shares only approved, scoped and minimized knowledge. Customer records, prices, documents, credentials and identifiable data remain tenant-bound.
- Do not train on customer data or publish shared learnings without documented authorization and privacy review.

## Provenance and confidence
Every important input and result must identify its source (user entry, approved supplier quote, official source, historical actual, imported dataset or assumption), effective date, unit/currency/tax basis, confidence and validation status. Stale, missing or conflicting values must be visible and never silently replaced by invented defaults.

## Parent-platform integration
Reuse parent registry, shared queue, HYBRID resource governance, AI routing, permissions, approvals, audit/redaction and OTHKM staging/canonical-memory governance. Heavy optimization and model training must pass the universal resource guard. No arbitrary shell or free-form worker jobs.

## Activation gates
1. Reviewed requirements, architecture, threat model and parent integration contract.
2. Client isolation and expense ledger with auditable revisions.
3. Independently validated fixed/variable/mixed/one-off cost allocation and double-counting tests.
4. Aluminium reference jobs and cutting optimizer validated against independently checked outputs.
5. Transport module validated with loaded/empty/return distances, fuel, maintenance, tyres, depreciation, fixed costs and margin scenarios.
6. Historical actual-vs-estimate reconciliation and confidence/provenance tests.
7. Learning proposals, dataset import, evaluation, approval, versioning and rollback integrated with parent platform.
8. Tests for tenant isolation, privacy, stale prices, missing data, units, rounding, tax basis and recovery.
9. Devis/Facture draft workflow with explicit approval; no unapproved external issuance.
10. Independent review, runbook, rollback plan and explicit owner approval before production activation.

## Current truth
This repository is a starter scaffold. This specification does not mean that the costing engines, optimizers, learning runtime, database, integrations or production permissions are implemented. MA014 remains in development and is not production-ready.
