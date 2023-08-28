const { omit } = require("lodash");
const { colors, sizeScale, fonts } = require("./base");
const { getSpacingVariants } = require("./spacing");
module.exports = {
  colors,
  sizeScale,
  fonts,
  generateCustomProperties: true,
  utilities: {
    ...getSpacingVariants(spacing)
  },
  breakpoints: {
    md: "48em",
    lg: "68em"
  }
};
