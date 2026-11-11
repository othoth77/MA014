import { describe, expect, it } from "vitest";
import { validateAluminiumJob } from "../../src/domains/aluminium-joinery/index.js";

describe("aluminium job input", () => {
  it("accepts a complete positive-dimension job", () => {
    expect(() => validateAluminiumJob({
      clientId: "client-a",
      productType: "window",
      widthMm: 1200,
      heightMm: 1400,
      quantity: 2,
      profileSystemId: "system-pending-validation"
    })).not.toThrow();
  });

  it("rejects missing dimensions", () => {
    expect(() => validateAluminiumJob({
      clientId: "client-a",
      productType: "window",
      widthMm: 0,
      heightMm: 1400,
      quantity: 1,
      profileSystemId: "system-a"
    })).toThrow();
  });
});
