import { renderLegend } from "../other/renderers/renderLegend";
import { renderDot } from "../other/renderers/renderDot";

export const constants = {
  formatters: {
    nameFormatter: (name) =>
      name.charAt(0).toUpperCase() + name.substring(1).toLowerCase(),
    valueFormatter: (value) => value.toLocaleString(),
    categoryFormatter: (tick) => tick.split(" ")[1],
  },
  axisPadding: { bottom: 40, right: 40, left: 40, top: 40 },
  lineColors: { official: "#861f41", enrolled: "#009681" },
  csvUrl: "data/first-day-enrollment.csv",
  referenceLineStrokeDasharray: "3 3",
  categoryDataKey: "term_desc",
  legendContent: renderLegend,
  axisLabelColor: "black",
  lineStrokeWidth: 3,
  tickLine: false,
  axisLine: false,
  dot: renderDot,
  maxZoom: true,
  height: 600,
};
