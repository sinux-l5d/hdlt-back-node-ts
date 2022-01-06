import express from 'express';
import * as dotenv from 'dotenv';
import './loadEnv';

const app = express();

// Désactive le header qu'Express inject
app.disable('x-powered-by');

// Ajoute un middleware qui décode le json pour nous
// TODO: check ce qu'il fait dans le cas où le body n'est pas du json
app.use(express.json());

// Handle API's root
app.get('/', (req, res) => {
  // Return JSON with status 200
  res.status(200).send({ message: 'Hello World !' });
});

// We export the app for running or testing
export default app;
