import express from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

//Configuration pour les vues ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Assets statiques:
app.use(express.static('./public'));


app.use(router);

app.use((req, res) => {
  res.status(404).render('error404', {message : "La page demandée n'a pas pu être trouvée"})
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });