var bottle = 99 ;

while (bottle >= 0) {
    var bottleWord = "bottle" ;

    if (bottle === 1) {
        bottleWord = "bottles";
    }

    console.log(bottle + " " + bottleWord + " of beer on the wall");

    console.log(bottle + " " + bottleWord + " of beer,");

    console.log("Take one down, pass it around,");

	bottle--;

    console.log(bottle + " " + bottleWord + " of beer on the wall.");
}



