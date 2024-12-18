const started = document.getElementById("started");
started.addEventListener("click", startGame);
const game = document.getElementById("game").style.display = "none";
KeyboardEvent: key='Enter';


console.log('before startGame function');

function startGame() {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("game").style.display = "block";
    console.log('cliked');
}

    async function play() {

            const max = 500;
            let nombreMystere = Math.floor(Math.random() * (max + 1));
            let counter = 0;
            let response = document.getElementById("response");
            console.log('fonction async');
            console.log(nombreMystere);
            function game () {
                if (parseInt(response) < nombreMystere) {
                    counter++;
                    alert('C\'est plus !')
                } else if (parseInt(response) > nombreMystere){
                    counter++; 
                    alert('C\'est moins !')
                } else {
                    counter++;
                    alert(`Félicitation vous avez trouvé le nombre mystère ! en ${counter} fois`);
                }    
            }
        
                while(parseInt(response) != nombreMystere) {
                    response = await lireValeur();
                    game();
                }
    }; play();
        

let value = null;

async function lireValeur() {
  return new Promise(resolve => {
    
    const idInterval = setInterval(() => {
      if (value !== null) {
        clearInterval(idInterval);

        // pour avoir le temps de voir le formulaire disparaître avant l'affichage d'un éventuel alert
        setTimeout(() => {
            resolve(value);
            value = null;
        }, 50);
      }
    }, 500);

  });
}
