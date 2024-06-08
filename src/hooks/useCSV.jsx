import { useEffect, useState, useMemo } from "react";

export const useCSV = (url) => {
  const csvText = useFetchText(url);

  const arrayOfObjects = useMemo(() => csvToArrayOfObjects(csvText), [csvText]);

  return arrayOfObjects;
};

const useFetchText = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.text())
        .then((text) => {
          if (!ignore) {
            setData(text);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);
  return data;
};

const csvToArrayOfObjects = (csvText) => {
  const oneDimensionalArray = csvToArray(csvText);

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

// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.
const csvToArray = (strData, strDelimiter) => {
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = strDelimiter || ",";

  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    // Delimiters.
    "(\\" +
      strDelimiter +
      "|\\r?\\n|\\r|^)" +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' +
      strDelimiter +
      "\\r\\n]*))",
    "gi"
  );

  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;

  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while ((arrMatches = objPattern.exec(strData))) {
    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[1];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    // if (arrMatches[2]) {
    //   // We found a quoted value. When we capture
    //   // this value, unescape any double quotes.
    //   var strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
    // } else {
    //   // We found a non-quoted value.
    //   var strMatchedValue = arrMatches[3];
    // }

    const strMatchedValue = arrMatches[2]
      ? arrMatches[2].replace(new RegExp('""', "g"), '"')
      : arrMatches[3];

    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  // Return the parsed data.
  return arrData;
};

const isNumeric1 = (string) => !Number.isNaN(string);

const isNumeric2 = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);

const isNumeric3 = (string) => !Number.isNaN(Number(string));

const isNumeric4 = (string) => Number.isFinite(+string);

const isNumeric5 = (string) => string == Number.parseFloat(string);

const isNumeric = (string) =>
  isNumeric1(string) &&
  isNumeric2(string) &&
  isNumeric3(string) &&
  isNumeric4(string) &&
  isNumeric5(string);
