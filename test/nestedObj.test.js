const { getInputKeys, getOutPutValue } = require("../nestedObj");


test("是否轉為陣列", () => {
  let inputValue = {
    hired: {
      be: {
        to: {
          deserve: "I",
        },
      },
    },
  };
  expect(getInputKeys(inputValue)).toEqual([
    "hired",
    "be",
    "to",
    "deserve",
    "I",
  ]);
});

test("是否輸出object", () => {
  let outputList = ["hired", "be", "to", "deserve", "I"];
  expect(getOutPutValue(outputList)).toEqual({
    I: { deserve: { to: { be: "hired" } } }
  });
});
