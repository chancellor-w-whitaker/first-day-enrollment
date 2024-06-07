import { useMemo } from "react";

import { CSVToArrayOfObjects } from "../js/CSVToArrayOfObjects";
import { useFetchText } from "./useFetchText";

export const useCSV = (url) => {
  const csvText = useFetchText(url);

  const arrayOfObjects = useMemo(() => CSVToArrayOfObjects(csvText), [csvText]);

  return arrayOfObjects;
};
