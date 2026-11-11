import { describe, expect, it } from "vitest";
import { addMoney, money, multiplyMoney } from "../../src/core/money.js";

describe("money", () => {
  it("adds exact minor units", () => {
    expect(addMoney(money(125n, "TND"), money(75n, "TND")).amountMinor).toBe(200n);
  });

  it("multiplies without floating-point arithmetic", () => {
    expect(multiplyMoney(money(125n, "TND"), 3n).amountMinor).toBe(375n);
  });

  it("rejects mixed currencies", () => {
    expect(() => addMoney(money(100n, "TND"), money(100n, "EUR"))).toThrow();
  });
});
