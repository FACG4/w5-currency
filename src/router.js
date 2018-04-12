const request = require('request')
const handler = require('./handler.js');

const router  = (req ,res)=>{
  const {url} = req;
  if(url === '/') {
    handler.servePublic('index.html',res);
  } else if(url === '/getrate') {
    handler.getRate(req, res);
  } else if(['/favicon.ico','/css/style.css', '/js/dom.js', '/js/request.js'].includes(url)){
    handler.servePublic(url, res);
  } else {
    handler.notFound(url, res);
  }
}

module.exports = router;
