function houseKeeper(yearsOfExperience, name, cleaningRepertoire, clern){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function(){
        alert("Cleaning in progress ...");
    }
}

var houseKeeper1 = new houseKeeper(2, "Pat", ["lobby", "kitchen"]);
var houseKeeper2 = new houseKeeper(6, "May", ["lobby", "bathroom"]);

console.log(houseKeeper1.name);
// Pat

houseKeeper1.clean();
// popup Cleaning in progress ...