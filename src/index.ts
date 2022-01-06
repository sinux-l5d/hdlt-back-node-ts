import app from '@app';

// Ce fichier lance juste l'application. Il est séparé de app.ts car nous pouvons tester l'application lors de tests unitaires
const port = 3000;
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
