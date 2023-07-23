function filterPrice(value) {
  return value >= 30;
}

let price = [12, 30, 45, 130, 1, 4, 6].filter(filterPrice);

console.log(price);

module.exports = filterPrice;
