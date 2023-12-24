function bmiCalculator (weight, height) {
    var calBMI = weight / Math.pow(height, 2) ;
    
    if (calBMI > 24.9) {
        return ("Your BMI is " + calBMI + ", so you are overweight.");
    }
    
    if (calBMI >= 18.5 && calBMI <= 24.9) {
         return ("Your BMI is " + calBMI + ", so you have a normal weight.");
    }
    
    else {
        return ("Your BMI is " + calBMI + ", so you are underweight.")
    }
}