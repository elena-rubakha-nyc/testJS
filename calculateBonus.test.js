const calculateBonus = require("./calculateBonus");

describe("Verify that the the bonus is calculated correcty", () => {
  it("Bonus must be 50 if sum of values > 50", () => {
    expect(calculateBonus(30, 40)).toBe(50);
  });
  it("Bonus must be equal to sum if sum < 50", () => {
    expect(calculateBonus(15, 14)).toBe(29);
  });
});
