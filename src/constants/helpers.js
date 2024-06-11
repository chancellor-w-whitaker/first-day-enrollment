export const helpers = {
  formatters: {
    nameFormatter: (name) =>
      name.charAt(0).toUpperCase() + name.substring(1).toLowerCase(),
    categoryTickFormatter: (tick) => tick.split(" ")[1],
    valueFormatter: (value) => value.toLocaleString(),
  },
  axisPadding: { bottom: 24, right: 48, left: 48, top: 24 },
  lineColors: { official: "#861f41", enrolled: "#009681" },
  labels: { yAxis: "Enrollment", xAxis: "Fall" },
  csvUrl: "data/first-day-enrollment.csv",
  referenceLineStrokeDasharray: "3 3",
  categoryDataKey: "term_desc",
  lineStrokeWidth: 2,
  tickLine: false,
  axisLine: true,
  labelOffset: 0,
  maxZoom: true,
  height: 500,
};
