var randomNumber = Math.floor(Math.random()*100)+1;

var num = document.getElementById("val");

var startButton = document.getElementById("submit");

var scoreBoard = document.getElementById("score"); 

var mistakeStatus = document.getElementById("mistake");

var runStatus =document.getElementById("run");

var resetButton = document.getElementById("reset");

var guessAraary=[]

mistakeStatus.style.backgroundColor="red";

var  lifeTime=10;

var win=false;


startButton.addEventListener("click",begin)

function begin() {

    if (lifeTime != 0) {
        startGame()
    } else {
        endGame();
    }
}

function startGame() {
    let guessNumber = num.value;
    console.log(randomNumber)
        if (guessNumber > randomNumber) {
            guessAraary.push(guessNumber)
            lifeTime--;
           
            scoreBoard.textContent = `Previous ${guessAraary.join(" ")}`;
            mistakeStatus.textContent="Wrong!"
            runStatus.textContent ="Last guess was too high!";
        } else if (guessNumber < randomNumber) {
            guessAraary.push(guessNumber);
            lifeTime--;
            
            scoreBoard.textContent = `Previous: ${guessAraary.join(" ")}`;
            mistakeStatus.textContent="Wrong!"
            runStatus.textContent ="Last guess was too low!";
        } else{
            guessAraary.push(guessNumber);
            win=true;
            lifeTime=0;
            endGame();

        }
    } 
    

function endGame(params) {
     if (win == true) {
        mistakeStatus.style.backgroundColor="green";
        scoreBoard.textContent = `Number of guesses: ${lifeTime}`;
        mistakeStatus.textContent="Your Win!"
        startButton.removeEventListener("click",begin)
        startButton.disabled = true;
     } else {
        scoreBoard.textContent = `Previous: ${guessAraary.join(" ")}`;
        mistakeStatus.textContent="Your loss!"
        runStatus.textContent="Your chances is finished"
        startButton.removeEventListener("click",begin)
        startButton.disabled = true;
     }
}


resetButton.addEventListener("click",()=>{
     location.reload()
})