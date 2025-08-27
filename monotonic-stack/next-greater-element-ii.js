// Given a circular array nums, for each element, find the next greater element as if the array wraps around (after the end, continue
// from the start). If there is no next greater, put -1.
// Example:
// Input: [1,2,1]
// • For index 0 (1): next greater is 2 (index 1)
// • For index 1 (2): wrap around, no greater, so -1
// • For index 2 (1): wrap to index 0, next greater is 2 (index 1)
// Output: [2,-1,2]
// Extra test case:
// Input: [3,8,4,1,2]
// Expected: [8,-1,8,2,3]

const nextGreaterElement = (nums) => {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  const n = nums.length;
  for (let i = 0; i < 2 * n - 1; i++) {
    const num = nums[i % n];

    while (stack.length > 0 && num > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = num;
    }

    if (i < n) {
      stack.push(i);
    }
  }
  return result;
};
const input = [3, 8, 4, 1, 2];
const result = nextGreaterElement(input);

console.log(result);
