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

describe("Handle valid input", () => {
  it("single digit", (d) => {
    expect(add("1")).toBe(1);
    d();
  });
  it("multiple digits", (d) => {
    expect(add("1,2,3")).toBe(6);
    d();
  });
});
