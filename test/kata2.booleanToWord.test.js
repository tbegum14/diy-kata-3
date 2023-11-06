const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns true for Yes", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });

  it("returns false for No", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
