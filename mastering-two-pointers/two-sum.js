/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] == target) {
      return [left + 1, right + 1];
    }
    if (numbers[left] + numbers[right] > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
};

const numbers = [2, 7, 11, 15];
const result = twoSum(numbers, 9);
console.log(result);
