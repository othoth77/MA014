export type PriceStatus = "verified-current" | "customer-provided" | "historical" | "estimated";

export interface PriceProvenance {
  readonly status: PriceStatus;
  readonly source: string;
  readonly effectiveDate: string;
  readonly capturedAt: string;
  readonly supplierId?: string;
}

export function validatePriceProvenance(value: PriceProvenance): void {
  if (!value.source.trim()) throw new Error("Price source is required");
  if (!isDate(value.effectiveDate)) throw new Error("Effective date must be YYYY-MM-DD");
  if (!isDate(value.capturedAt.slice(0, 10))) throw new Error("Captured date must be YYYY-MM-DD");
}

function isDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}
