const baseConfig = require("mono-tools/prettier.config.js");

module.exports = {
  ...baseConfig,
  globals: {
    ...baseConfig.globals,
    anotherGlobal: true,
  },
};
