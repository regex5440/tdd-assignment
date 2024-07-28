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
  it("no values between separators", (d) => {
    expect(add.bind(null, "1,\n")).toThrow(TypeError);
    d();
  });
  it("no negative numbers", (d) => {
    expect(add.bind(null, "1, -2, 3")).toThrow(Error);
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
  it("values with custom delimiter", (d) => {
    expect(add("//;\n1;2")).toBe(3);
    d();
  });
  it("values with custom separator and default separators", (d) => {
    expect(add("//;\n 1; 2, 4")).toBe(7);
    d();
  });
  it("values greater than 1000 should be ignored", (d) => {
    expect(add("2,1001,34")).toBe(36);
    d();
  });
  it("delimiter of any length", (d) => {
    expect(add("//[***]\n2***3***4")).toBe(9);
    d();
  });
  it("multiple delimiters", (d) => {
    expect(add("//[*][%]\n1*3%4")).toBe(8);
    d();
  });
});
