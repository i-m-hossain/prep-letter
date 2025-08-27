// Input: [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const length = temperatures.length;
  const result = new Array(length).fill(0);
  const stack = [];
  for (let i = 0; i < length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  return result;
};

const res = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(res);
