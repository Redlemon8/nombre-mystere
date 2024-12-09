const started = document.getElementById("started");
started.addEventListener("click", startGame);

const firstDifficulty = document.getElementById('first-difficulty').style.display = 'none';
const secondDifficulty = document.getElementById('second-difficulty').style.display = 'none';
const thirdDifficulty = document.getElementById('third-difficulty').style.display = 'none';

console.log('before startGame function');

function startGame() {
    document.getElementById("title").innerHTML = "Difficulté";
    document.getElementById("started").style.display = "none";
    document.getElementById("first-difficulty").style.display = "block";
    document.getElementById("second-difficulty").style.display = "block";
    document.getElementById("third-difficulty").style.display = "block";

    console.log('cliked');
}

const newGame = document.getElementById("new-game");


function mode() {
    
}

