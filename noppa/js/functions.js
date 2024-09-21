function rollDice () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var diceImg = document.getElementById("diceImg");
    diceImg.src = "../noppa/images/" + randomNumber + ".png";
}

document.getElementById("dice").addEventListener("click", rollDice);