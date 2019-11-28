// functions that multipl multiple numbers together
function multiplyMultNums() {
  product = 1;
  for (let i = 0; i < arguments.length; i++) {
    product = product * arguments[i];
  }

  return product;
}

module.exports = multiplyMultNums;
