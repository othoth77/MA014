# MA014 Architecture

## Design principles

1. Domain modules own trade-specific units, formulas, constraints, and validation.
2. Calculation engines are deterministic and must not silently invent missing inputs.
3. Every result carries an auditable explanation of inputs, assumptions, units, and formula versions.
4. Client data is tenant-scoped at every storage and service boundary.
5. Supplier prices carry provenance, currency, unit, and effective date.
6. Documents are drafts until an authorized human approves issuance.
7. Resource-intensive work is submitted through the parent MYTHOS queue and resource guard.

## Initial module layout

- `src/core/`: shared primitives, validation, money and measurement types.
- `src/domains/aluminium-joinery/`: aluminium joinery domain rules and calculations.
- `src/domains/woodworking/`: future woodworking domain.
- `src/domains/metal-fabrication/`: future metal fabrication domain.
- `src/domains/construction/`: future construction domain.
- `src/domains/printing-production/`: future printing and production domain.
- `src/application/`: use cases and orchestration.
- `src/integrations/`: approved parent-platform and external integrations.
- `tests/`: unit, domain, integration, security, and reference-job tests.

## Initial delivery sequence

1. Define domain contracts, units, money representation, and provenance.
2. Build aluminium joinery input schemas and reference fixtures.
3. Implement bill-of-material calculations with independently checked examples.
4. Implement cutting-stock optimization including kerf, trim, compatibility, and reusable offcuts.
5. Implement transparent costing and quotation drafts.
6. Add tenant isolation, audit, approval, and parent queue integration.
7. Pass activation gates documented in the parent registry before production use.

No trade formula should be implemented from assumptions alone. Confirm each profile series, assembly rule, and customer-specific catalog before calculation.
