const filterPrice = require("./testNum");

describe("Check boundary conditions for 30", () => {
  it("Boundaries >= 30", () => {
    expect(filterPrice(30)).toBe(true);
  });
  it("Boundaries < 30", () => {
    expect(filterPrice(29)).toBe(false);
  });
});
