var dice = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function diceRoll() {
    var p1 = Math.random() * 6;
    p1 = Math.floor(p1);

    var p2 = Math.random() * 6;
    p2 = Math.floor(p2);

    document.getElementById("p1").setAttribute("src", "images\\" + dice[p1]);
    document.getElementById("p2").setAttribute("src", "images\\" + dice[p2]);

    if (p1 == p2) {
        document.getElementById("result").innerHTML = "DRAW";
    } else if (p1 > p2) {
        document.getElementById("result").innerHTML = "PLAYER 1 WINS";
    } else {
        document.getElementById("result").innerHTML = "PLAYER 2 WINS";
    }
}