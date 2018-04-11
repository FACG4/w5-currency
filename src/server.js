const http = require('http');
const router = require('./router');

const server = http.createServer(router);
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;


server.listen(3000, () => {
  console.log(`hiiiiii I at port ${port}`);
})