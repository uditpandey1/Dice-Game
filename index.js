// random number generator
function randomNumber() {
    var randomNumber1;

    var randomNumber0 = Math.random() * 6;

    randomNumber1 = Math.floor(randomNumber0) + 1;

    return randomNumber1;
}

//player1 dice
var value1 = randomNumber();

var player1 = "images/dice" + value1 + ".png";

document.querySelector("img.img1").setAttribute("src", player1);

//player2 dice
var value2 = randomNumber();

var player2 = "images/dice" + value2 + ".png";

document.querySelector("img.img2").setAttribute("src", player2);

//Result
if (value1 > value2) {
    document.querySelector("h1").textContent = "Player1 Wins!";
} else if (value1 === value2) {
    document.querySelector("h1").textContent = "Draw!";
} else {
    document.querySelector("h1").textContent = "Player2 Wins!";
}

