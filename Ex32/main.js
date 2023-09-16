function contains(arr , n ){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] === n ){
            return true 
        }     
    }
    return false
}
arr = [2,4,6,7,8]
console.log(contains(arr,5))
console.log(contains(arr,4)) 

