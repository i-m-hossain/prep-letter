// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
const threeSumClosest = (numbers, target) => {
  const nums = numbers.sort((a, b) => a - b);
  console.log(nums);

  const n = nums.length;
  const result = [];
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum == target) {
        result.push(sum);
        left++;
        right--;
      } else if (sum < target) {
        result.push(sum);
        left++;
      } else {
        result.push(sum);
        right--;
      }
    }
  }

  let closest = result[0];
  let minDiff = Math.abs(target - closest);
  for (const num of result) {
    const diff = Math.abs(target - num);
    if (minDiff > diff) {
      minDiff = diff;
      closest = num;
    }
  }
  return closest;
};

const nums = [-1, 2, 1, -4],
  target = 1;

// const nums = [0, 0, 0],
//   target = 1;
const result = threeSumClosest(nums, target);
