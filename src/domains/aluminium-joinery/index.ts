/**
 * Aluminium joinery domain entry point.
 *
 * Intentionally no profile formulas are implemented yet. They must be
 * supplied and validated for a specific profile series/system and workshop.
 */
export interface AluminiumJobSpecification {
  readonly clientId: string;
  readonly productType: "window" | "door" | "other";
  readonly widthMm: number;
  readonly heightMm: number;
  readonly quantity: number;
  readonly profileSystemId: string;
}

export function validateAluminiumJob(input: AluminiumJobSpecification): void {
  if (!input.clientId.trim()) throw new Error("clientId is required");
  if (!input.profileSystemId.trim()) throw new Error("profileSystemId is required");
  for (const [field, value] of Object.entries({
    widthMm: input.widthMm,
    heightMm: input.heightMm,
    quantity: input.quantity
  })) {
    if (!Number.isSafeInteger(value) || value <= 0) {
      throw new Error(`${field} must be a positive safe integer`);
    }
  }
}
