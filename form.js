 export const form = {

    submit: function () {
        const form = document.getElementById('submit-form');
         form.addEventListener('submit', function () {
            
         });
    },

    //  checkAnswer: function () {
    //      console.log('form module submit');
    //  },

     getNumber: function () {
        console.log('form module submited');
         const mysterious = document.getElementById('mysterious').value;
         console.log(mysterious);
     },

 };



// lireValeur: async function() {
//     return new Promise(resolve => {

//     addform ();
  
//     const idInterval = setInterval(() => {
//         if (value !== null) {
//             clearInterval(idInterval);
//             removeForm();
//             // pour avoir le temps de voir le formulaire disparaître avant l'affichage d'un éventuel alert
//             setTimeout(() => {
//                 resolve(value),
//                 value = null,
//             }, 50),
//         }
//     }, 500),

// }),




// function addform() {


//     const formElement = document.createElement('form');
//     formElement.id = 'questionForm';
         
//     buttonElement.type = 'submit';
//     buttonElement.textContent = 'OK';
//     buttonElement.classList = 'submitButton'

//     formElement.appendChild(labelElement);

//     const inputContainer = document.createElement('div');
//     inputContainer.id = 'inputForm';

//     formElement.appendChild(inputContainer);
//     inputContainer.appendChild(inputElement);
//     inputContainer.appendChild(buttonElement);

//     const containerElement = document.getElementById('start-game');
//     containerElement.appendChild(formElement);
//     inputElement.focus();

//     formElement.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         const reponse = document.getElementById('answer').value;
//         value = reponse;
//         });

//    }

//     function removeForm() {
//         const containerElement = document.getElementById('start-game');
//         containerElement.innerHTML = '';
//     }

//    function transitionForm() {
//         const transitionElement = document.createElement('form');
//         transitionElement.id = 'restartQuestion';

//         const buttonRestartElement = document.createElement('button');
//         buttonRestartElement.type = 'submit';
//         buttonRestartElement.textContent = 'Rejouer';
//         buttonRestartElement.classList = 'transitionButton';

//         const buttonEndElement = document.createElement('button');
//         buttonEndElement.type = 'submit';
//         buttonEndElement.textContent = 'Quiter';
//         buttonEndElement.classList = 'transitionButton';
//         buttonEndElement.addEventListener('click', restart);

//         transitionElement.appendChild(buttonRestartElement);
//         transitionElement.appendChild(buttonEndElement);

//         const restartContainerElement = document.getElementById('new-game');
//         restartContainerElement.appendChild(transitionElement);
//    }