document.addEventListener("DOMContentLoaded", function () {

    var changeText = document.querySelector("h1").innerHTML = "Refresh Me";

    var imgElement = document.getElementsByClassName("img1")[0];
    var imgElement2 = document.getElementsByClassName("img2")[0];

    function rolldice(){

        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        if (randomNumber1 === 6) {
            imgElement.src = "./images/dice6.png";
        } else if (randomNumber1 === 5) {
            imgElement.src = "./images/dice5.png";
        } else if (randomNumber1 === 4) {
            imgElement.src = "./images/dice4.png";
        } else if (randomNumber1 === 3) {
            imgElement.src = "./images/dice3.png";
        } else if (randomNumber1 === 2) {
            imgElement.src = "./images/dice2.png";
        } else {
            imgElement.src = "./images/dice1.png";
        }

        if (randomNumber2 === 6) {
            imgElement2.src = "./images/dice6.png";
        } else if (randomNumber2 === 5) {
            imgElement2.src = "./images/dice5.png";
        } else if (randomNumber2 === 4) {
            imgElement2.src = "./images/dice4.png";
        } else if (randomNumber2 === 3) {
            imgElement2.src = "./images/dice3.png";
        } else if (randomNumber2 === 2) {
            imgElement2.src = "./images/dice2.png";
        } else {
            imgElement2.src = "./images/dice1.png";
        }

        if (randomNumber1 > randomNumber2) {
            changeText = document.querySelector("h1").innerHTML = "🏆 Player 1 Win!";
        }
        else if (randomNumber1 < randomNumber2){
            changeText = document.querySelector("h1").innerHTML = "Player 2 Win! 🏆";
        }
        else {
            changeText = document.querySelector("h1").innerHTML = "Draw! 🤔";
        }
    }
    
    rolldice();
});