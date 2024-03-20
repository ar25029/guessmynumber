// "use strict";

var secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;
document.querySelector('.number').textContent = '?';


let score = 20;
let hs = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}
displayMessage("start guessing...")
function onHandleEvent() {
    const guess = document.querySelector('.guess').value;


    if (!guess) {
        displayMessage("⭕No Number!")
    }
    else if (guess == secretNumber) {
        // document.querySelector(".message").textContent = "✅Correct Number!";
        displayMessage("✅Correct Number!")
        score++;
        document.querySelector(".score").textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;

        if (score > hs) {
            hs = score;
            document.querySelector('.highscore').textContent = hs;
        }
        else {
            score = hs
            document.querySelector('.highscore').textContent = hs;
        }
    }
    else if (guess > secretNumber) {
        // document.querySelector(".message").textContent = "too high";
        displayMessage("too high")

        score--;
        document.querySelector(".score").textContent = score;
    }
    else if (guess < secretNumber) {
        // document.querySelector(".message").textContent = "too low";
        displayMessage("too low")

        score--;
        document.querySelector(".score").textContent = score;
    }

}

document.querySelector('.check').addEventListener('click', onHandleEvent);

document.querySelector('.again').addEventListener('click', onHandleAgain)

function onHandleAgain() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "start guessing...";
    document.querySelector('.guess').value = '';
    document.querySelector(".score").textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    const oldscore = score;
    if (oldscore > score) {
        document.querySelector('.highscore').textContent = oldscore;
    }
    else { }
}
