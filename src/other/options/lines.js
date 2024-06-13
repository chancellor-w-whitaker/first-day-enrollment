import { constants } from "../../constants";

const { lineStrokeWidth: strokeWidth, lineColors, dot } = constants;

export const lines = Object.entries(lineColors).map(([dataKey, stroke]) => ({
  strokeWidth,
  dataKey,
  stroke,
  dot,
}));
