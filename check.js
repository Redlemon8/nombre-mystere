const gameStep = document.querySelector('h2');
const containerElement = document.getElementById('start-game');

const easyMode = document.createElement('button');
const intermediateMode = document.createElement('button');
const hardMode = document.createElement('button');
hardMode.addEventListener('click', addform);

const labelElement = document.createElement('label');
labelElement.htmlFor = 'answer';

const inputElement = document.createElement('input');
inputElement.id = 'answer';

const buttonElement = document.createElement('button');

initTheGame ();


function initTheGame () {

    console.log('je suis à l\'intérieur de la fonction iniTheGame');
    const formElement = document.createElement('form');
    
    gameStep.textContent = 'Choisissez la difficulté !';

    containerElement.appendChild(formElement);

    easyMode.type = 'submit';
    easyMode.textContent = '1 - 100';
    easyMode.classList = 'buttonMode'
    intermediateMode.type = 'submit';
    intermediateMode.textContent = '1 - 250';
    intermediateMode.classList = 'buttonMode'
    hardMode.type = 'submit';
    hardMode.textContent = '1 - 500';
    hardMode.classList = 'buttonMode'

    formElement.appendChild(easyMode);
    formElement.appendChild(intermediateMode);
    formElement.appendChild(hardMode);

    //  let addFormElement = addform();
    //  addFormElement = document.querySelector('input').style.display = 'none';
    //  addFormElement = document.querySelector('.buttonElement').style.display = 'none';
}


let value = null;
async function lireValeur() {
  return new Promise(resolve => {

   addform ();
    
    const idInterval = setInterval(() => {
      if (value !== null) {
        clearInterval(idInterval);
        removeForm();
        // pour avoir le temps de voir le formulaire disparaître avant l'affichage d'un éventuel alert
        setTimeout(() => {
            resolve(value);
            value = null;
        }, 50);
      }
    }, 500);

  });
}



function addform() {


    const formElement = document.createElement('form');
    formElement.id = 'questionForm';
         
    buttonElement.type = 'submit';
    buttonElement.textContent = 'OK';
    buttonElement.classList = 'submitButton'

    formElement.appendChild(labelElement);

    const inputContainer = document.createElement('div');
    inputContainer.id = 'inputForm';

    formElement.appendChild(inputContainer);
    inputContainer.appendChild(inputElement);
    inputContainer.appendChild(buttonElement);

    const containerElement = document.getElementById('start-game');
    containerElement.appendChild(formElement);
    inputElement.focus();

    formElement.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const reponse = document.getElementById('answer').value;
        value = reponse;
        });

   }

    function removeForm() {
        const containerElement = document.getElementById('start-game');
        containerElement.innerHTML = '';
    }

   function transitionForm() {
        const transitionElement = document.createElement('form');
        transitionElement.id = 'restartQuestion';

        const buttonRestartElement = document.createElement('button');
        buttonRestartElement.type = 'submit';
        buttonRestartElement.textContent = 'Rejouer';
        buttonRestartElement.classList = 'transitionButton';

        const buttonEndElement = document.createElement('button');
        buttonEndElement.type = 'submit';
        buttonEndElement.textContent = 'Quiter';
        buttonEndElement.classList = 'transitionButton';
        buttonEndElement.addEventListener('click', restart);

        transitionElement.appendChild(buttonRestartElement);
        transitionElement.appendChild(buttonEndElement);

        const restartContainerElement = document.getElementById('new-game');
        restartContainerElement.appendChild(transitionElement);
   }