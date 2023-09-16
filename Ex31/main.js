
function func(arr,n) {

    var i = arr.indexOf(n);
    let spliced = arr.splice(i, 1);
    
   // console.log(spliced);
    console.log(arr);
    
}
func([1,2,3,4,5],5);

