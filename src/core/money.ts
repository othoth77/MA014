/**
 * Money is stored as integer minor units to avoid binary floating-point
 * arithmetic in financial calculations. Currency and scale are explicit.
 */
export interface Money {
  readonly amountMinor: bigint;
  readonly currency: string;
  readonly scale: number;
}

export function money(amountMinor: bigint, currency: string, scale = 2): Money {
  if (!/^[A-Z]{3}$/.test(currency)) throw new Error("Currency must be a 3-letter ISO code");
  if (!Number.isInteger(scale) || scale < 0 || scale > 6) throw new Error("Invalid currency scale");
  return Object.freeze({ amountMinor, currency, scale });
}

export function addMoney(a: Money, b: Money): Money {
  assertSameUnit(a, b);
  return money(a.amountMinor + b.amountMinor, a.currency, a.scale);
}

export function multiplyMoney(value: Money, quantity: bigint): Money {
  return money(value.amountMinor * quantity, value.currency, value.scale);
}

function assertSameUnit(a: Money, b: Money): void {
  if (a.currency !== b.currency || a.scale !== b.scale) {
    throw new Error("Cannot combine money with different currencies or scales");
  }
}
