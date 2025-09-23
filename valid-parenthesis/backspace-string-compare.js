/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  if (backSpaceOperation(s) == backSpaceOperation(t)) {
    return true;
  }
  return false;
};

function backSpaceOperation(string) {
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "#") {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }
  return stack.join("");
}
// Example 1:

// Input:
// let s = "ab#c",
//   t = "ad#c";
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:
//
// Input:
// s = "ab##";
// t = "c#d#";
// Output: true;
// Explanation: Both s and t become "".
// Example 3:

// Input:
s = "a#c";
t = "b";
// Output: false
// Explanation: s becomes "c" while t becomes "b".

const result = backspaceCompare(s, t);
console.log(result);
