const baseConfig = require("mono-tools/eslint.config.js");

module.exports = {
  ...baseConfig,
  globals: {
    ...baseConfig.globals,
    anotherGlobal: true,
  },
};
