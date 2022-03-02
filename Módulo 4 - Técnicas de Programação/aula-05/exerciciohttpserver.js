// - Criar 3 endpoints (/1, /2, /3) e retornar 3 tipos (htmls, json, ...) diferentes de dados.
// - Pesquisar e tratar outros tipos de http method (GET, PUT, POST e DELETE).
// - Criar 3 arquivos .txt com conteudo dentro.
//    - Criar 1 endpoint com um deles retornando html e renderizando o conteúdo dentro de uma lista <html> <ul> <li>.
//    - Criar 1 endpoint retornando o conteúdo dentro de um json.


const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/js') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      Escola: 'Lets Code',
      Ano: 2022,
      Aluno: 'Artur Faiotto Clemente',
      Turma: 'Bora Ser Tech - LINX'
    }));

  } else if (method === 'GET' && url === '/html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, 'index.html');
    const data = fs.readFileSync(filePath, 'utf-8');
    res.end(data);
    
  } else if (method === 'PUT' && url === '/ola') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end( '<body><h1> Ola Mundo! </h1></body>');
  }
});


server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});