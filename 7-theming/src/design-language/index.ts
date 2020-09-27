// this theme follows the System UI Theme Specification
// Ref: https://system-ui.com/theme

import { colors } from "./colors";
import { fonts, fontSizes, fontWeights } from "./typography";

const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  sizes: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],

  // transition speeds in ms
  speeds: [0, "75ms", "100ms", "150ms", "200ms", "300ms", "500ms"],

  // levels of elevation 0, 1 and 2
  shadows: [
    "none",
    "0px 8px 4px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.24)",
    "0px 4px 4px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.24)",
  ],

  radii: {
    small: 2,
    medium: 4,
    large: 16,
    round: "50%",
  },
};

export default theme;
