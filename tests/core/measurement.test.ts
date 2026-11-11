import { describe, expect, it } from "vitest";
import { length, toMillimetres } from "../../src/core/measurement.js";

describe("measurements", () => {
  it("normalizes supported lengths to millimetres", () => {
    expect(toMillimetres(length(2n, "m"))).toBe(2000n);
    expect(toMillimetres(length(35n, "cm"))).toBe(350n);
  });

  it("rejects negative lengths", () => {
    expect(() => length(-1n, "mm")).toThrow();
  });
});
