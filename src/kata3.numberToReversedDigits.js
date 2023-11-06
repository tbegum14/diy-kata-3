const numberToReversedDigits = (number) => {
  const array = number.toString().split("").reverse();

  return array.map((num) => Number(num));
};

module.exports = numberToReversedDigits;
