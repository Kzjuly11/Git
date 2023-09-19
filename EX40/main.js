function array_range(x,l){
var arr = new Array(l) 
for(var i = 0 ; i < l ; i++){
    arr[i] = x;
    x++  
}
return arr 
}
console.log(array_range(1,4))