const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js app behind Apache reverse proxy!\n');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
