import { getFullClassName } from "../helpers/getFullClassName";

export const MainContainer = ({ className = "", ...rest }) => {
  const defaultClassName = "container";

  const fullClassName = getFullClassName(defaultClassName, className);

  return <main className={fullClassName} {...rest}></main>;
};
