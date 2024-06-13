import { getFullClassName } from "../helpers/getFullClassName";

export const Section = ({ className = "", ...rest }) => {
  const defaultClassName =
    "py-1 py-sm-2 py-md-3 px-1 px-sm-2 px-md-3 px-lg-4 px-xl-5";

  const fullClassName = getFullClassName(defaultClassName, className);

  return <div className={fullClassName} {...rest}></div>;
};
