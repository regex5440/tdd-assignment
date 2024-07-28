import add from "../src";

describe("Handle invalid input", () => {
  it("non-string input", (d) => {
    expect(add(1)).toBe(0);
    d();
  });
  it("multiple alphanumeric values", (d) => {
    expect(add.bind(null, "1,ab,3s")).toThrow(TypeError);
    d();
  });
});

describe("Handle valid input", () => {
  it("empty string", (d) => {
    expect(add("")).toBe(0);
    d();
  });
  it("single digit", (d) => {
    expect(add("1")).toBe(1);
    d();
  });
  it("multiple digits", (d) => {
    expect(add("1,2,3")).toBe(6);
    d();
  });
  it("multiple digits with comma and whitespace", (d) => {
    expect(add("1, 2, 3")).toBe(6);
    d();
  });
  it("multiple digits with newline and comma", (d) => {
    expect(add("1\n2,3")).toBe(6);
    d();
  });
});
