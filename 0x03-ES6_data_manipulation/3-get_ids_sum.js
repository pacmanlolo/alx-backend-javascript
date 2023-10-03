export default function getStudentIdsSum(myArray) {
  const init = 0;
  const sumarray = myArray.reduce((acc, currentstudent) => acc + currentstudent.id, init);
  return sumarray;
}
