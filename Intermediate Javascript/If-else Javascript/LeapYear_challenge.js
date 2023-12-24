function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
    if (year % 4 === 0 ) {
        
        if (year % 100 !== 0) {
            return ("Leap year.")
        }
        
        if (year % 400 === 0){
            return ("Leap year.")
        }
    }
    
    else {
        return ("Not leap year.")
    }
    
    /**************Don't change the code below****************/    
    
    }