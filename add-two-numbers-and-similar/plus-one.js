const plusOne = (digits) => {
  const n = digits.length;
  let carry = 1;
  for (let i = n - 1; i >= 0; i--) {
    sum = digits[i] + carry;
    if (sum > 9) {
      digits[i] = 0;
    } else {
      digits[i] = sum;
      carry = 0;
    }
  }

  if (carry > 0) return [1].concat(digits);
  return digits;
};

const digits = [1, 9, 9];
console.log(plusOne(digits));
