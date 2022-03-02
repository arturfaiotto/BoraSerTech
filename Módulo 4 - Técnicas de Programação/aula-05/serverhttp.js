const http = require('http');

const server = http.createServer();


server.on('request', (req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/teste1') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        escola: 'Lets Code',
        ano: 2022,
    }
  ));

  } else if (method === 'GET' && url === '/teste2') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end( '<body><h1> Ola Mundo! </h1></body>');
  }
});

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});