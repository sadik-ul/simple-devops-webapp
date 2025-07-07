// index.js

const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response HTTP header with status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello"
  res.end('Hello World!\n');
});

// Server listens on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
