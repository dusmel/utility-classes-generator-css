const { omit } = require("lodash");
const { colors, sizeScale, fonts } = require("./src/base");
const { space } = require("./src/spacing");

module.exports = {
  colors,
  sizeScale,
  fonts,
  generateCustomProperties: true,
  utilities: {
    bg: {
      items: colors,
      output: "standard",
      property: "background",
    },
    color: {
      items: colors,
      output: "standard",
      property: "color",
    },
    font: {
      items: fonts,
      output: "standard",
      property: "font-family",
    },
    ...space,
  },
  breakpoints: {
    md: "48em",
    lg: "68em",
  },
};
