export default function iterateThroughObject(reportWithIterator) {
   let myItems = '', i = 0;
   for (const it of reportWithIterator) {
        if (reportWithIterator.length - 1 == i) {
            myItems += it
        }
        else {
            myItems += it + ' | ';
        }
        i++;
   }
   return myItems;
}
