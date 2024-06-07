import { getFullClassName } from "../js/getFullClassName";

export const Section = ({ className = "", ...rest }) => {
  const defaultClassName = "my-3 p-3 bg-body rounded shadow-sm";

  const fullClassName = getFullClassName(defaultClassName, className);

  return <div className={fullClassName} {...rest}></div>;
};
