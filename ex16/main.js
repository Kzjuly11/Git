
// program to check leap year
function LeapYear(st_year,end_year) {
    
    var year_range = [];
        
        for (var i = st_year; i <= end_year; i++) {
             year_range.push(i);
        }
        
        for(var j = 0 ; j < year_range.length ; j++){
        if (( year_range[j] % 4 == 0) && (year_range[j] % 100 !=0 ) || (year_range[j] % 400 == 0)) {          
            console.log(year_range[j])            
        }          
    }    
}
LeapYear(2000,2022)

