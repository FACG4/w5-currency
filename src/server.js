


const router = require('./router');

const http = require('http');
const server = http.createServer(router);
const port = 3000;
server.listen(port, ()=>{
  console.log("listening on port "+ port);
})
