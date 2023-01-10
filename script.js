let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber){
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "Red";
    }
    
    else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You Got It Right"
        gameResult.style.backgroundColor = "Green"
    }
    else if (guessedNumber < randomNumber){
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "blue";
    }

    else{
        gameResult.textContent = "Please Provide A Valid Input";
        gameResult.style.backgroundColor = "Red"
    }

}