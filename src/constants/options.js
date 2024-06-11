import { renderers } from "./renderers";
import { helpers } from "./helpers";

const {
  formatters: { categoryTickFormatter, valueFormatter, nameFormatter },
  labels: { xAxis: xAxisLabel, yAxis: yAxisLabel },
  referenceLineStrokeDasharray,
  categoryDataKey,
  lineStrokeWidth,
  labelOffset,
  axisPadding,
  lineColors,
  tickLine,
  axisLine,
} = helpers;

export const options = {
  yAxis: {
    label: {
      className: "text-anchor-middle",
      offset: labelOffset,
      value: yAxisLabel,
      position: "left",
      angle: -90,
    },
    padding: { bottom: axisPadding.bottom, top: axisPadding.top },
    tickFormatter: valueFormatter,
    axisLine,
    tickLine,
  },
  xAxis: {
    label: { offset: labelOffset, position: "bottom", value: xAxisLabel },
    padding: { right: axisPadding.right, left: axisPadding.left },
    tickFormatter: categoryTickFormatter,
    dataKey: categoryDataKey,
    axisLine,
    tickLine,
  },
  referenceLine: {
    label: {
      formatter: (value) => valueFormatter(Math.round(value)),
      position: "insideBottomLeft",
    },
    strokeDasharray: referenceLineStrokeDasharray,
  },
  lines: Object.entries(lineColors).map(([dataKey, stroke]) => ({
    strokeWidth: lineStrokeWidth,
    dot: renderers.dot,
    dataKey,
    stroke,
  })),
  tooltip: {
    formatter: (value, name) => [valueFormatter(value), nameFormatter(name)],
  },
  legend: {
    formatter: nameFormatter,
    verticalAlign: "top",
    align: "left",
  },
};
