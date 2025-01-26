import { form } from "./form.js";

export const check = {

    // Génération du nombre mystère
    game: {
      nombreMystere: Math.floor(Math.random() * (500 + 1)),
      counter: 0,
    },

    init: function() {
      console.log('check.js started');
      check.game.nombreMystere;
        // check.play();
        // check.lireValeur();
        // check.gameFunction();
         form.getNumber();
    },
  }
//     gameFunction: function() {
//       if (parseInt(response) < check.game.nombreMystere) {
//           const tall = `Le nombre secret est plus grand que ${response}`;
//           displayClue(tall);                                                                  // FONCTION WITH GAME CONDITION
//       } else if (parseInt(response) > check.game.nombreMystere){
//           const little = `Le nombre secret est plus petit que ${response}\n`;
//           displayClue(little);
//       } else {
//           const finish = `Félicitation vous avez trouvé le nombre mystère ${check.game.nombreMystere} ! en ${check.game.counter++} fois`;
//           displayClue(finish);
//           removeForm();
//           transitionForm();
//       }
//   },

//    // Vérification de la réponse est du nombre mystère
//    play: async function () {
//     let response;

//     while (parseInt(response) !== check.game.nombreMystere) {  // Add attempt limit
//         response = await lireValeur();
//         check.game.counter++;
//         gameFunction(check.game.nombreMystere);  // Pass game object as argument
//     }

//     return check.game;  // Optionally return game object
//   },

//   lireValeur: async function() {
//     return new Promise((resolve, reject) => {

//       //addform();

//       const idInterval = setInterval(() => {
//         if (value !== null) {
//           clearInterval(idInterval);
//           removeForm();
//           resolve(value);
//           value = null;
//         }
//       }, 500);

//       setTimeout(() => {
//         clearInterval(idInterval);
//         //removeForm();
//         reject(new Error("No value received"));
//       }, 5000);
//     });
//   }
// };

