import { constants } from "../../constants";

const {
  axisPadding: { right: paddingRight, left: paddingLeft },
  formatters: { categoryFormatter: tickFormatter },
  axisLabelColor: labelFill,
  categoryDataKey: dataKey,
  axisLine,
  tickLine,
} = constants;

export const xAxis = {
  label: {
    style: { fontSize: "large" },
    position: "insideBottom",
    fill: labelFill,
    value: "Fall",
    offset: -5,
  },
  padding: { right: paddingRight, left: paddingLeft },
  tickFormatter,
  axisLine,
  tickLine,
  dataKey,
};
