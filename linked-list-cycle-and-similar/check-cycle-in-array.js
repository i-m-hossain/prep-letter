const checkCycleInArray = (nums) => {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

let array = [1, 3, 4, 2, 2];
// let output = 2;
// array = [3, 1, 3, 4, 2];
// output = 3;
// array = [3, 3, 3, 3, 3];
// output = 3;

const res = checkCycleInArray(array);
console.log(res);
