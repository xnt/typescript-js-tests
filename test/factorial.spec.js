import { getFactorial } from "../src/Factorial/factorialCalculator";

const hackyAssert = (actual, expected) => {
  // CodeSanbox refuses to work with the "assert" module, so well... 🤷
  if (actual !== expected) {
    throw Error(`Fail: expected ${expected} but got ${actual}`);
  }
};

describe("Factorial calculation", () => {
  it("Calculates a possitive > 0", () => {
    hackyAssert(getFactorial(5), 120);
  });

  it("Calculates 1", () => {
    hackyAssert(getFactorial(1), 1);
  });

  it("Calculates 0", () => {
    hackyAssert(getFactorial(0), 1);
  });

  it("Calculates garbage", () => {
    hackyAssert(getFactorial("garbage"), 1);
  });
});
