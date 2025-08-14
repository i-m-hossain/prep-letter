function merge(nums1, m, nums2, n) {
  let i = m;
  let j = n;
  while (i > 0 || j > 0) {
    if (nums1[i - 1] > nums2[j - 1]) {
      nums1[i + j - 1] = nums1[i - 1];
      i--;
    }
    if (nums1[i - 1] <= nums2[j - 1]) {
      nums1[i + j - 1] = nums2[j - 1];
      j--;
    }
    //if nums2 emtpy
    if (j == 0 && i > 0) {
      nums1[i + j - 1] = nums1[i - 1];
      i--;
    }
    // nums1 empty
    if (i == 0 && j > 0) {
      nums1[i + j - 1] = nums2[j - 1];
      j--;
    }
  }

  return nums1;
}

const res1 = merge([1, 3, 5, 7, 9, 0, 0, 0, 0, 0], 5, [2, 4, 6, 8, 10], 5);
const res2 = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
const res3 = merge([1], 1, [], 0);
const res4 = merge([0], 0, [1], 1);
const res5 = merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
