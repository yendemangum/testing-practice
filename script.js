module.exports.capitalize = function (string) {
  let array = Array.from(string);
  array[0] = array[0].toUpperCase();
  let string2 = array.join("");
  return string2;
};

module.exports.reverseString = function (string) {
  let array = Array.from(string);
  array = array.reverse();
  let string2 = array.join("");
  return string2;
};

module.exports.calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

module.exports.caesarCipher = function (string, number) {
  let letters = Array.from(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  );
  let array = Array.from(string);
  let newArray = [];
  for (let i = 0; i<array.length; i++) {
    if (letters.includes(array[i])) {
      newArray.push(letters[letters.indexOf(array[i]) + number]);
    } else {
        newArray.push(array[i])
    }
  }
  return newArray.join("");
};

module.exports.analyzeArray = function (array) {
    return {
        average:  array.reduce((sum, num) => sum + num, 0) / array.length,
        min: array.reduce((min, current) => {
            return (current < min) ? current : min;
          }, array[0]),
        max: array.reduce((max, current) => {
            return (current > max) ? current : max;
          }, array[0]),
        length: array.length
    }
}