var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const count = createCounter(10);

console.log(count()); //10
console.log(count()); //11
