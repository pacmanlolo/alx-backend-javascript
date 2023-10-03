export default function cleanSet(mySet, startString) {
  let res = '';
  let i = 0;
  for (const element of mySet) {
    const firstchar = element.substr(0, startString.length);
    if (firstchar === startString && startString.length !== 0) {
      const reststring = element.substr(startString.length, element.length);
      if (i === 0) {
        res = `${reststring}`;
        i = 1;
      } else {
        res = `${res}-${reststring}`;
      }
    }
  }
  return res;
}
