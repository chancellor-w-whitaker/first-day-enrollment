import { valueFormatter } from "./valueFormatter";
import { nameFormatter } from "./nameFormatter";

export const tooltipFormatter = (value, name) => [
  valueFormatter(value),
  nameFormatter(name),
];
