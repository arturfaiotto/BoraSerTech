const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
  res.send('Hello World!') 
}); //Imprime Hello World! no GET


app.use(bodyParser.json());
app.post('/', (req, res) => {
    const body = req.body;
    res.json({
        received_at: new Date().toISOString(),"message-from-body": body.message,
    })
}); //Imprime { "received_at": "2022-03-10T23:16:24.637Z", "message-from-body": "Eae, pessoal" }

app.listen(8080, () => {
    console.log(`escutando em http://localhost:8080`);
  });