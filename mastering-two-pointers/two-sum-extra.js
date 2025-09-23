/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const found = map.has(complement);
    if (found) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
    console.log(map);
  }
};

const nums = [2, 7, 11, 15],
  target = 9;
const res = twoSum(nums, target);
console.log(res);
