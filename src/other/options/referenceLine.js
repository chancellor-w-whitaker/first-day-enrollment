import { constants } from "../../constants";

const {
  referenceLineStrokeDasharray: strokeDasharray,
  formatters: { valueFormatter },
} = constants;

export const referenceLine = {
  label: {
    formatter: (value) => valueFormatter(Math.round(value)),
    position: "insideBottomLeft",
  },
  strokeDasharray,
};
