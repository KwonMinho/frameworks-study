const fetch = require("../async");

describe("Async", () => {
  it("async", async () => {
    const data = await fetch();
    expect(data).toEqual({ item: "Milk", price: 200 });
  });
});
