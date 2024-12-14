const started = document.getElementById("started");
started.addEventListener("click", startGame);
const game = document.getElementById("game").style.display = "none";
KeyboardEvent: key='Enter';

let max = 51;
let again = true;


console.log('before startGame function');

function startGame() {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("game").style.display = "block";
    console.log('cliked');
}

function findTheNumber() {
    console.log('we have to find the number');
    /* START THE LOOP */
    while (again === true) {
    console.log('are we here ?');
                /* GENERATE A RANDOM NUMBER */
        function getRandomInt(max) {

            
            return Math.floor(Math.random() * max);
        }
        
        console.log(`le nombre mystère est : ${getRandomInt(max)}`);
        
        let numberPlayer = document.getElementById("number-player");

        while (numberPlayer != getRandomInt(max)) {
            if (numberPlayer < getRandomInt(max)) {
                document.getElementsByClassName('title').textContent = `C/'est plus !`;
                console.log("c/'est plus !");
            } else if (numberPlayer > getRandomInt(max)) {
                document.getElementsByClassName('title').textContent = `C/'est moins !`;
                console.log("c/'est moins !");
            } else {
                document.getElementsByClassName('title').textContent = `Bravo vous avez trouvez le nombre mystère !`;
                console ('vous avez trouvez le nombre mystère !');
            }
        }
    }
}
