const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let additional;

  options.separator =
    typeof options.separator !== "undefined" ? options.separator : "+";
  options.additionSeparator =
    typeof options.additionSeparator !== "undefined"
      ? options.additionSeparator
      : "|";

  if (typeof options.addition !== "undefined") {
    additional = repeater(options.addition, {
      repeatTimes: options.additionRepeatTimes,
      separator: options.additionSeparator,
    });
  }

  return Array(options.repeatTimes)
    .fill(str + (additional ? additional : ""))
    .join(options.separator);
};
