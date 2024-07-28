import add from "../src";

describe("Handle invalid input", () => {
  it("empty string", (d) => {
    expect(add("")).toBe(0);
    d();
  });
  it("non-string input", (d) => {
    expect(add(1)).toBe(0);
    d();
  });
});
