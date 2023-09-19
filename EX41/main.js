function between(start, end){ 

var arr = new Array(end-start+1)
         
		for (var i = 0; i < arr.length; i++) 
        {
			arr[i] = start;
            start++;
		}
      		return arr;
		}
	console.log(between(1,4))
