export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const element of array) {
    res.push(appendString + element);
  }

  return returnArray;
}
