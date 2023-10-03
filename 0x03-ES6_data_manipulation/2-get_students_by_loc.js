export default function getStudentsByLocation(myArray, city) {
  const res = myArray.filter((student) => student.location === city);
  return res;
}
