let randomNumber = Math.floor(Math.random()*100)+1;

let guessNumber = document.getElementById("val");

let button = document.getElementById("submit");

var   gameStatus = "Previous guesses:"

var gameMode = true;

var win=false;

var scores =[]
button.addEventListener("click",begin)

function begin() {

    if (gameMode) {
        startGame()
    } else {
        endGame();
    }
}

function startGame() {

    let lifeTime=10;
    if (lifeTime != 0) {
        
    } else {
        gameMode=false;
    }
    
}

function endGame(params) {
     if (win == true) {
        console.log("wined")
     } else {
        console.log("loss")
     }
}
