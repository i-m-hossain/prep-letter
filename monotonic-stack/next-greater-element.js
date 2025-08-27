// You’re given two arrays, nums1 and nums2, and each value in nums1 also exists in nums2. For each value in nums1, find its
// “next greater” value in nums2 (the first number to its right in nums2 that’s bigger). If there isn’t one, return -1 for that number.
// Example:
// nums1 = [4,1,2], nums2 = [1,3,4,2]
// For 4 in nums1, in nums2 it appears at index 2, and no greater value to its right, so answer is -1.
// For 1, in nums2 at index 0, next greater is 3.
// For 2, in nums2 at index 3, no greater to the right, so -1.
// Output: [-1, 3, -1]
// Extra test case:
// Expected: [3,-1]

const nextGreaterElement = (nums1, nums2) => {
  const result = new Array(nums1.length).fill(-1);
  const hashmap = {};
  const stack = [];
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > nums2[stack[stack.length - 1]]) {
      const index = stack.pop();
      hashmap[nums2[index]] = nums2[i];
    }
    stack.push(i);
  }

  for (let i = 0; i < nums1.length; i++) {
    if (hashmap[nums1[i]]) {
      result[i] = hashmap[nums1[i]];
    }
  }
  return result;
};

// const nums1 = [2, 4],
//   nums2 = [1, 2, 3, 4];
const nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
const res = nextGreaterElement(nums1, nums2);
console.log(res);

// Output: [-1, 3, -1]
