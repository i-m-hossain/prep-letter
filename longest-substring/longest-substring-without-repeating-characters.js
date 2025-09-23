// let s = "abcabcdbb";
// output=3
// Explanation: The answer is "abc", with the length of 3.

// Input:
// s = "bbbbb";
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input:
s = "pwwkew";
// s = "dvdf";
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function longestSubstring(s) {
  let count = 0;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
      if (set.size > count) {
        count = set.size;
      }
    } else if (set.has(s[i])) {
      set = addElement(set, s[i]);
    }
  }
  return count;
}
function addElement(mySet, elem) {
  const arr = [...mySet]; // Convert set to array
  const idx = arr.indexOf(elem);

  if (idx !== -1) {
    // Remove everything up to and including elem
    arr.splice(0, idx + 1);
  }

  arr.push(elem); // Add the element

  return new Set(arr); // Return a new Set
}

const res = longestSubstring(s);
console.log(res);
