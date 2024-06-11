import { options } from "../constants/options";
import { findAverage } from "./findAverage";

const { referenceLine, lines } = options;

export const getReferenceLines = (data) =>
  lines.map(({ dataKey, stroke }) => {
    const { label: labelConstants, ...lineConstants } = referenceLine;

    const lineValues = data
      .map(({ [dataKey]: value }) => value)
      .filter((value) => typeof value === "number");

    const averageValue = findAverage(...lineValues);

    const label = { value: averageValue, fill: stroke, ...labelConstants };

    const line = { y: averageValue, stroke, label, ...lineConstants };

    return line;
  });
