const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./script");

test("capitalize", () => {
  expect(capitalize("33opp")).toBe("33opp");
});

test("reverseString", () => {
  expect(reverseString("smith")).toBe("htims");
});

describe("calculator", () => {
  it("addition", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });
  it("subtraction", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });
  it("multiplication", () => {
    expect(calculator.multiply(1, 1)).toBe(1);
  });
  it("division", () => {
    expect(calculator.divide(1, 1)).toBe(1);
  });
});

describe("caesarCipher", () => {
  it("wraps", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  it("preservesCase", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  it("punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

test("analyzeArray", () => {
  expect(JSON.stringify(analyzeArray([1, 8, 3, 2, 4, 6]))).toBe(
    JSON.stringify({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    })
  );
});
