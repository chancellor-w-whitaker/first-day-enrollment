import { referenceLine } from "../other/options/referenceLine";
import { lines } from "../other/options/lines";
import { findAverage } from "./findAverage";

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
