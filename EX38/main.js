function move(myArray, x, y){

var newArray = myArray.splice(y, 1, myArray[x])
myArray[x] = newArray[0]
console.log(myArray)
}
move([10, 20, 30, 40, 50], 0, 2);
