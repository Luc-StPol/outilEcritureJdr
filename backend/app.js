const express = require('express');
const mongoose = require('mongoose');

const pnjRoutes = require('./routes/pnj.js');
const villeRoutes = require('./routes/ville.js');

const app = express();

app.use(express.json());

//Connect to MongoDB database
mongoose
  .connect('mongodb+srv://lucstpol:zvvDDG3U1hwZkiAv@database.8jxn0zi.mongodb.net/')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//CORS rules
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Credentials'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Routes
app.use('/api/pnj', pnjRoutes);
app.use('/api/villes', villeRoutes);

module.exports = app;
