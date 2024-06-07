import { CSVToArray } from "./CSVToArray";
import { isNumeric } from "./isNumeric";

export const CSVToArrayOfObjects = (csvText) => {
  const oneDimensionalArray = CSVToArray(csvText);

  const keys = oneDimensionalArray[0];

  const rows = oneDimensionalArray.slice(1);

  const arrayOfObjects = rows.map((row) =>
    Object.fromEntries(
      row.map((value, index) => [
        keys[index],
        isNumeric(value) ? Number(value) : value,
      ])
    )
  );

  return arrayOfObjects.slice(0, arrayOfObjects.length - 1);
};
