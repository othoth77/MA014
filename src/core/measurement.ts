export type LengthUnit = "mm" | "cm" | "m";

const TO_MM: Record<LengthUnit, bigint> = {
  mm: 1n,
  cm: 10n,
  m: 1000n
};

export interface Length {
  readonly value: bigint;
  readonly unit: LengthUnit;
}

export function length(value: bigint, unit: LengthUnit): Length {
  if (value < 0n) throw new Error("Length cannot be negative");
  return Object.freeze({ value, unit });
}

export function toMillimetres(input: Length): bigint {
  return input.value * TO_MM[input.unit];
}
