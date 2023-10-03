export default function getListStudentIds(myArray) {
  let res = [];
  if (Array.isArray(myArray)) {
    res = myArray.map((obj) => obj.id);
  }
  return res;
}
