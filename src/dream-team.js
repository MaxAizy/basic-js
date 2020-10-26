const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .map((item) =>
          typeof item === "string" ? item.trim().substr(0, 1).toUpperCase() : ""
        )
        .sort()
        .join("")
    : false;
};
