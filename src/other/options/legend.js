import { constants } from "../../constants";

const {
  formatters: { nameFormatter: formatter },
  legendContent: content,
} = constants;

export const legend = {
  wrapperStyle: { fontSize: "large" },
  iconType: "filled-dots",
  verticalAlign: "top",
  iconSize: 15.75,
  formatter,
  content,
};
