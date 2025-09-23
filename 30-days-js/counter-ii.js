Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // skip holes in sparse arrays (like real map does)
    if (i in this) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

const result = [1, 2, 3].myMap(function (item) {
  return item * 3;
});

console.log(result);
