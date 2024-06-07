export const nullifyEmptyStringValues = (data, forEachKey = []) => {
  const setOfKeys = new Set(forEachKey);

  const numberOfKeys = setOfKeys.size;

  const shouldNullifyValue = ([key, value]) =>
    numberOfKeys > 0 ? setOfKeys.has(key) && value === "" : value === "";

  return data.map((row) =>
    Object.fromEntries(
      Object.entries(row).map(([key, value]) =>
        shouldNullifyValue([key, value]) ? [key, null] : [key, value]
      )
    )
  );
};
