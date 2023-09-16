
// const arr = [1, 2, 1, 3, 4, 3, 5];

// const toFindDuplicates = arr => arr.filter((item, n) => arr.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arr);
// console.log(duplicateElements);

let array = [6, 9, 15, 6, 13, 9, 11, 15];
let n = 0, newArr = [];
 
function findDuplicates(arr) {
   for (let i = 0; i < array.length ; i++) {
      for (let j = i + 1; j < array.length; j++) {
      if (arr[i] == arr[j]) {
            newArr[n] = arr[i];
            n++;
         }
      }
   }
   return newArr;
}
console.log(findDuplicates(array))
