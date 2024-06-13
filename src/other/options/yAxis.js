import { constants } from "../../constants";

const {
  axisPadding: { bottom: paddingBottom, top: paddingTop },
  formatters: { valueFormatter: tickFormatter },
  axisLabelColor: labelFill,
  axisLine,
  tickLine,
} = constants;

export const yAxis = {
  label: {
    style: { textAnchor: "middle", fontSize: "large" },
    position: "insideLeft",
    value: "Enrollment",
    fill: labelFill,
    angle: -90,
    offset: 2,
  },
  padding: { bottom: paddingBottom, top: paddingTop },
  tickFormatter,
  axisLine,
  tickLine,
};
