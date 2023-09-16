

let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let sum = []
 sum = array1.concat(array2)
// var set = [...new Set(sum)] // 
 //console.log(set) // ex 22 
 
 const difference = array1.filter((element) => array2.includes(element));
  
console.log(difference); // ex 23

 
