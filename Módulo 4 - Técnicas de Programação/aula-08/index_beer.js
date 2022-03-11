const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const beerRouter = require('./beer');

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.BoraSerTech = 'Bora Ser Tech com a Lets Code';
  next();
});

app.use('/beer', beerRouter);

app.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});
