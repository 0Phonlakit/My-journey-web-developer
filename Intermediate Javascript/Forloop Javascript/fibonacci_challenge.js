function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    
       var output = [];
    
        var first_number = -1;
    
        var second_number = 1;
    
        var sum = 0;
    
        for(var i=0; i<n; i++){       
    
            sum = first_number + second_number;
    
            output.push(sum);
    
            first_number = second_number;
    
            second_number = sum;
    
        }
    
        return output;
    
    //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
}