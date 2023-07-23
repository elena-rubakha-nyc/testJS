const sum = require("./sum");

describe("Test sum function", () => {
  it("Sum of positive numbers", () => {
    expect(sum(3, 7)).toEqual(10);
  });
  it("Check the refult for > and < ", () => {
    expect(sum(3, 7)).toBeGreaterThan(4);
    expect(sum(3, 7)).toBeLessThan(7);
  });
});
