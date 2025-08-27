// 300 test cases for the four-sum problem
// Each test case: { nums: [...], target: N, expected: [...] }
// Generated automatically

const findAllQuadruplets = (nums, target) => {
  const numbers = nums.slice().sort((a, b) => a - b);
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
        if (sum == target) {
          result.push([numbers[i], numbers[j], numbers[left], numbers[right]]);
          left++;
          right--;
          while (left < right && numbers[left] == numbers[left - 1]) left++;
          while (left < right && numbers[right] == numbers[right + 1]) right--;
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

const testCases = [];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 300; i++) {
  const len = randomInt(4, 12); // array length between 4 and 12
  const nums = Array.from({ length: len }, () => randomInt(-10, 10));
  const target = randomInt(-20, 20);
  const expected = findAllQuadruplets(nums, target);
  testCases.push({ nums, target, expected });
}

module.exports = testCases;
