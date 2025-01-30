import express from 'express';
import path from 'path';
import router from './routes.js';


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));
app.use(express.static(path.join(process.cwd(), 'public')));

//app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.use(router);

app.use((req, res) => {
  res.status(404).render('error404', { path: req.path });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// const app = {

//     clue: [],

//     init: function() {
//         console.log('app.js started');
//         check.init();
// Appelle de la méthode génération nombre mystère
// Appelle de la méthode de soumission de formulaire (eventListener) 
    


//     displayClue: function(clueText) {
//     clue.push(clueText);
//     let message = '';
//     for (let i = 0; i < clue.length; i = i + 1) {
//        console.log(clue);
//         message = clue[i];
//     }
//     const gameClue = document.querySelector('h2');
//     gameClue.textContent = message;
// }

