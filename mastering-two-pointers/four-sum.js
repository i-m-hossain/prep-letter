// Given an array of integers and a target value, find all unique quadruplets (four numbers) in the array that add up to the target. Each quadruplet must not repeat in the result set.

const testCases = require("./four-sum-test-cases");

// Example
// Input: nums = [1, 0, -1, 0, -2, 2], target = 0
// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
// Another Example (Try This!)
// Input: nums = [2, 2, 2, 2, 2], target = 8

const findAllQuadruplets = (nums, target) => {
  const numbers = nums.sort((a, b) => a - b);
  const n = numbers.length;
  const result = [];

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && numbers[i] == numbers[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && numbers[j] == numbers[j - 1]) continue;
      let left = j + 1;
      let right = n - 1;
      while (left < right) {
        const sum = numbers[i] + numbers[j] + numbers[left] + numbers[right];
        // console.log(
        //   numbers[i],
        //   "+",
        //   numbers[j],
        //   "+",
        //   numbers[left],
        //   "+",
        //   numbers[right],
        //   "=",
        //   sum,
        //   "target:",
        //   target
        // );
        if (sum == target) {
          result.push([numbers[i], numbers[j], numbers[left], numbers[right]]);
          left++;
          right--;

          while (left < right && numbers[left] == numbers[left - 1]) {
            left++;
          }
          while (left < right && numbers[right] == numbers[right + 1]) {
            right--;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

// const nums = [1, 0, -1, 0, -2, 2],
//   target = 0;

// const nums = [2, 2, 2, 2, 2],
//   target = 8;

// const nums = [-2, -1, -1, 1, 1, 2, 2],
//   target = 0;

// const nums = [-3, -2, -1, 0, 0, 1, 2, 3],
//   target = 0;

// const nums = [-2, -1, -1, 1, 1, 2, 2],
//   target = 0;

for (const testcase of testCases) {
  const result = findAllQuadruplets(testcase.nums, testcase.target);
  console.log("result:", result, "expected:", testcase.expected);
}
