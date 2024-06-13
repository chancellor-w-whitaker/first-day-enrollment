import { constants } from "../../constants";

const {
  formatters: { valueFormatter, nameFormatter },
} = constants;

export const tooltip = {
  formatter: (value, name) => [valueFormatter(value), nameFormatter(name)],
};
