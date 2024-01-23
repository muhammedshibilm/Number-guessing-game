var randomNumber = Math.floor(Math.random()*100)+1;

var num = document.getElementById("val");

var button = document.getElementById("submit");

var scoreBoard = document.getElementById("score"); 

var mistakeStatus = document.getElementById("mistake");

var runStatus =document.getElementById("run");

var resetButton = document.getElementById("resetButton");

var guessAraary=[]

var gameMode = true;

var win=false;


button.addEventListener("click",begin)

function begin() {

    if (gameMode) {
        startGame()
    } else {
        endGame();
    }
}

function startGame() {
    let guessNumber = num.value;
    console.log(guessNumber)
    console.log(randomNumber)
    let lifeTime=10;
    if (lifeTime!=0) {
    
        if (guessNumber > randomNumber) {
        
            guessAraary.push(guessNumber)
            console.log(guessAraary)
            scoreBoard.textContent = `Previous ${guessAraary.join(" ")}`;
            mistakeStatus.textContent="Wrong!"
            runStatus.textContent ="Last guess was too high!";
        } else if (guessNumber < randomNumber) {
            guessAraary.push(guessNumber)
            console.log(guessAraary)
            scoreBoard.textContent = `Previous: ${guessAraary.join(" ")}`;
            mistakeStatus.textContent="Wrong!"
            runStatus.textContent ="Last guess was too low!";
        } else{
            
            guessAraary.push(guessNumber)
            console.log(guessAraary)

        }


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
