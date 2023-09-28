export default function iterateThroughObject(reportWithIterator) {
  const iterator = reportWithIterator();

  const employeeNames = [];
  let next = iterator.next();

  while (!next.done) {
    employeeNames.push(next.value);
    next = iterator.next();
  }

  return employeeNames.join(' | ');
}
