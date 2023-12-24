prompt("Enter you name : ");
prompt("Enter your couple :");

var calScore = Math.floor((Math.random() * 100) + 1) ;

if (calScore > 80) {
    alert("Your love score is " + calScore + " %" + " You love each other like Kabye loves Kanye.");
} 

if (calScore > 30 && calScore <= 80 ) {
    alert("Your love score is " + calScore + " %");
}

if (calScore <= 30){
    alert("Your love score is " + calScore + " %" + " Your go together like oil and water.");
}