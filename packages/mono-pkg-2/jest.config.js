const baseConfig = require("mono-tools/jest.config.js");

module.exports = {
  ...baseConfig,
  globals: {
    ...baseConfig.globals,
    anotherGlobal: true,
  },
};
