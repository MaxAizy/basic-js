const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix
    .flat(Infinity)
    .reduce((acc, item) => (item === "^^" ? acc + 1 : acc), 0);
};
