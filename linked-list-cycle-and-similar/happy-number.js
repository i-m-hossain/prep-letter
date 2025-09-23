const happyNumber = (num) => {
  const seen = new Set();
  return build(num, seen);
};

function build(num, seen) {
  let sum = 0;
  let digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (const digit of digits) {
    sum += digit * digit;
  }

  if (sum == 1) {
    return true;
  } else if (seen.has(sum)) {
    return false;
  } else {
    seen.add(sum);
    return build(sum, seen);
  }
}
const res = happyNumber(2);
console.log(res);
