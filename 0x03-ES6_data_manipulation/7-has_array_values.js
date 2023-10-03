export default function hasValuesFromArray(mySet, myArray) {
  for (const num of myArray) {
    if (!mySet.has(num)) return false;
  }
  return true;
}
