// random number generator
var randomNumber = Math.floor(Math.random() * 100) + 1;

// accessing html elements
var num = document.getElementById("val");

var startButton = document.getElementById("submit");

var scoreBoard = document.getElementById("score");

var mistakeStatus = document.getElementById("mistake");

var runStatus = document.getElementById("run");

var resetButton = document.getElementById("reset");

// storing guessing values
var guessAraary = []

// it's a life time 
var lifeTime = 10;

var win = false;

//  ribbon falling ribbon 
function rainbowGif() {
    let img = document.createElement("img");
    img.setAttribute("src", "./rainbow.gif");
    document.body.appendChild(img);
     img.style.pointerEvents ="none";
    
}
// mistake status function
function  mistakes(value,check) {
    if (check) {
        mistakeStatus.style.color = "red";
    }else{
        mistakeStatus.style.color = "green";
    }
    mistakeStatus.style.fontWeight = 'bolder';
    mistakeStatus.textContent = value;
 
}

// runstatus function
function runs(value) {
    runStatus.textContent = value;
}

startButton.addEventListener("click", begin)


//cheacking lifetime before starting game
function begin() {
    if (lifeTime != 0) {
        startGame()
    } else {
        endGame();
    }
}

// starting game function
function startGame() {
    let guessNumber = num.value;
    if (guessNumber > randomNumber) {
        guessAraary.push(guessNumber)
        lifeTime--;
        scoreBoard.textContent = `Previous ${guessAraary.join(" ")}`;
        mistakes("Wrong!",true);
        runs("Last guess was too high!");
    } else if (guessNumber < randomNumber) {
        guessAraary.push(guessNumber);
        lifeTime--;
        scoreBoard.textContent = `Previous: ${guessAraary.join(" ")}`;
        mistakes("Wrong!",true);
        runs("Last guess was too low!");
    } else {
        guessAraary.push(guessNumber);
        win = true;
        endGame();
    }
}

// Ending game function
function endGame(params) {
    if (win == true) {
        scoreBoard.textContent = `Number of guesses: ${10 - lifeTime}`;
        mistakes("Your Win!",false);
        runs(null);
        rainbowGif();
        startButton.removeEventListener("click", begin)
        startButton.disabled = true;


    } else {
        scoreBoard.textContent = `Previous: ${guessAraary.join(" ")}`;
        mistakes("Your loss!",true);
        runs("Your chances is finished");
        startButton.removeEventListener("click", begin)
        startButton.disabled = true;
    }
}

// starting new game button
resetButton.addEventListener("click", () => {
    location.reload()
})
