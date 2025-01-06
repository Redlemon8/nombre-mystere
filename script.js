const clue = [];

function displayClue (clueText) {
    clue.push(clueText);
    let message = '';
    for (let i = 0; i < clue.length; i = i + 1) {
       console.log(clue);
        message = clue[i];
    }
    const gameClue = document.querySelector('h2');
    gameClue.textContent = message;
}

async function play() {
    console.log('j\'ai été envoyé par hardMode button');
    let response;
    const max = 500;
    const game = {
        nombreMystere: Math.floor(Math.random() * (max + 1)),
        counter: 0,
    };
    console.log(game.nombreMystere);

    while(parseInt(response) != game.nombreMystere) {
        response = await lireValeur();                                                         // LOOP UNTIL NUMBER FOUND
        game.counter++;
        gameFunction();
    }

    function gameFunction () {
        if (parseInt(response) < game.nombreMystere) {
            const tall = `Le nombre secret est plus grand que ${response}`;
            displayClue(tall);                                                                  // FONCTION WITH GAME CONDITION
        } else if (parseInt(response) > game.nombreMystere){
            const little = `Le nombre secret est plus petit que ${response}\n`;
            displayClue(little);
        } else {
            const finish = `Félicitation vous avez trouvé le nombre mystère ${game.nombreMystere} ! en ${game.counter++} fois`;
            displayClue(finish);
            removeForm();
            transitionForm();
        }
    }
}; play();
