// Given an array of integers, find all unique triplets (three numbers) in the array which sum to zero. The solution set must not contain
// duplicate triplets.
// Example
// Input: sortedNums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// _Triplets must not repeat – order doesn’t matter._
// Another Example (Try This!)
// Input: sortedNums = [-2, 0, 1, 1, 2]

const findAllUniqueTriplets = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b); //   [-4, -1, -1, 0, 1, 2];
  const result = [];
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue; // skip duplicate i
    let left = i + 1;
    let right = sortedNums.length - 1;
    const target = -sortedNums[i];
    while (left < right) {
      const currentSum = sortedNums[left] + sortedNums[right];
      if (currentSum == target) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;

        while (left < right && sortedNums[left] == sortedNums[left - 1]) {
          left++;
        }

        while (left < right && sortedNums[right] == sortedNums[right + 1]) {
          right--;
        }
      } else if (currentSum < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return result;
};

const sortedNums = [-1, 0, 1, 2, -1, -4];

const res = findAllUniqueTriplets(sortedNums);

console.log(res);
