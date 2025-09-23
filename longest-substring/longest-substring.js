function longestSubstring(s) {
  let maxLength = 0;
  const seen = new Map();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (seen.has(s[right])) {
      left = seen.get(s[right]) + 1;
    }
    seen.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
    console.log(maxLength);
  }
  return maxLength;
}

const res = longestSubstring("bacabc");

console.log(res); //5
