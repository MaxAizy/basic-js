const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  return typeof sampleActivity !== "string" ||
    isNaN(parseFloat(sampleActivity)) ||
    parseFloat(sampleActivity) > MODERN_ACTIVITY ||
    parseFloat(sampleActivity) <= 0
    ? false
    : Math.ceil(
        Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
          (Math.log(2) / HALF_LIFE_PERIOD)
      );
};
