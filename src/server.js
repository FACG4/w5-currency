

const handler = require('./handler');
const http = require('http');
const server = http.createServer(handler);
const port = 3000;
server.listen(port, ()=>{
  console.log("listening on port "+ port);
})
