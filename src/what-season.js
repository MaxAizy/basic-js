const CustomError = require("../extensions/custom-error");

const seasons = ["winter", "spring", "summer", "autumn"];

module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (!Object.prototype.toString.call(date).match(["object Date"]))
    throw new Error();
  return seasons[Math.floor(((date.getMonth() + 1) / 12) * 4) % 4];
};
