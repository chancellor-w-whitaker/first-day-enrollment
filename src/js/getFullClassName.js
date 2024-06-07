export const getFullClassName = (defaultClassName, extraClassName) => {
  return extraClassName.length > 0
    ? `${defaultClassName} ${extraClassName}`
    : defaultClassName;
};
