const http = require('http');
const handler = require('./handler')
const port = 3000;
const server = http.createServer(handler);

server.listen(port, ()=> console.log(`this server runs on port ${port}`)
);
