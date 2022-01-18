const { join } = require("path");

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  preset: "ts-jest",
  rootDir: join(__dirname, "src"),
  coverageDirectory: join(__dirname, "coverage"),
};
