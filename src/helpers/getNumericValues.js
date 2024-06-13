export const getNumericValues = (data, forEachKey = []) => {
  const setOfKeys = new Set(forEachKey);

  const numberOfKeys = setOfKeys.size;

  const isTrue = ([key, value]) =>
    numberOfKeys > 0
      ? setOfKeys.has(key) && typeof value === "number"
      : typeof value === "number";

  return data
    .map((row) =>
      Object.entries(row)
        .filter((entry) => isTrue(entry))
        .map(([key, value]) => value)
    )
    .flat();
};
