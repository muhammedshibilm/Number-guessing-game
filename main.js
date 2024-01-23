var randomNumber = Math.floor(Math.random()*100)+1;

var num = document.getElementById("val");

var button = document.getElementById("submit");

var scoreBoard = document.getElementById("score"); 

var mistakeStatus = document.getElementById("mistake");

var runStatus =document.getElementById("run");

var resetButton = document.getElementById("resetButton");

var guessAraary=[]

// game mistake text
var para;
// var gameMode = true;
var  lifeTime=10;

var win=false;


button.addEventListener("click",begin)

function begin() {

    if (lifeTime != 0) {
        startGame()
    } else {
        endGame();
    }
}

function startGame() {
    let guessNumber = num.value;
    console.log(guessNumber)
    console.log(randomNumber)
        if (guessNumber > randomNumber) {
            guessAraary.push(guessNumber)
            lifeTime--;
            mistakeStatus.style.backgroundColor="red";
            console.log("life" +lifeTime)
            console.log(guessAraary)
            scoreBoard.textContent = `Previous ${guessAraary.join(" ")}`;
            mistakeStatus.textContent="Wrong!"
            runStatus.textContent ="Last guess was too high!";
        } else if (guessNumber < randomNumber) {
            guessAraary.push(guessNumber);
            lifeTime--;
            mistakeStatus.style.backgroundColor="red";
            console.log("life" +lifeTime)
            console.log(guessAraary);
            scoreBoard.textContent = `Previous: ${guessAraary.join(" ")}`;
            mistakeStatus.textContent="Wrong!"
            runStatus.textContent ="Last guess was too low!";
        } else{
            guessAraary.push(guessNumber)
            console.log(guessAraary)
            mistakeStatus.style.backgroundColor="green";
            scoreBoard.textContent = `Previous: ${guessAraary.join(" ")}`;
            mistakeStatus.textContent="Correct";
            win=true;
            lifeTime=0;
            endGame();

        }
    } 
    

function endGame(params) {
     if (win == true) {
        console.log("wined")
     } else {
        console.log("loss")
     }
}
