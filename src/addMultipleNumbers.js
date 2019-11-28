// Sum up multiple numbers
function sumNumbers() {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

module.exports = sumNumbers;
