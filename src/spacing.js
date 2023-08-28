const { forEach, isArray, omit, reduce } = require("lodash");
const { sizeScale } = require("./base");

const baseSpacing = {
  padding: {
    variants: omit(sizeScale, "auto"),
    properties: [
      "p",
      ["pt", "top"],
      ["pb", "bottom"],
      ["pl", "left"],
      ["pr", "right"],
      ["px", "inline"],
      ["py", "block"],
    ],
  },
  margin: {
    variants: sizeScale,
    properties: [
      "m",
      ["mt", "top"],
      ["mb", "bottom"],
      ["ml", "left"],
      ["mr", "right"],
      ["mx", "inline"],
      ["my", "block"],
    ],
  },
};

function getSpacingVariants(spacing) {
  const variants = {};
  forEach(spacing, (value, cssKey) => {
    value.properties.forEach((variant) => {
      const key = isArray(variant) ? variant[0] : variant;
      const suffix = isArray(variant) ? `-${variant[1]}` : "";
      variants[key] = {
        items: value.variants,
        output: "standard",
        property: cssKey + suffix,
      }
    });
  });

  return variants;

}

module.exports = {
  baseSpacing,
  space: getSpacingVariants(baseSpacing),
};
