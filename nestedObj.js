let inputValue = {
  hired: {
    be: {
      to: {
        deserve: "I",
      },
    },
  },
};

let results = [];
const getInputKeys = (inputValue) => {
  // let results = [];
  const r = results;
  Object.keys(inputValue).forEach((key) => {
    const value = inputValue[key];
    if (typeof value === "object") {
      r.push(key);
      getInputKeys(value, r);
    } else if (typeof value !== "object") {
      r.push(key);
      r.push(value);
    }
  });
  console.log('r',r);
  console.log('results',results);

  return r;
};

function getOutPutValue(OutPutList) {
  // console.log("OutPutList2", OutPutList);
  var res = OutPutList.reduce((value, key) => ({ [key]: value }));
  console.log("res", res);
  return res;
}

// function getInputValueToOutPutValue() {
//   getInputKeys(inputValue);
//   return getOutPutValue(results);
// }
// console.log("test3JSON", JSON.stringify(getInputValueToOutPutValue()));

module.exports = {
  getInputKeys,
  getOutPutValue,
};
