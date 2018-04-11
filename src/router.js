const request = require('request')
const handler = require('./handler.js');

const router  = (req ,res)=>{
  const {url} = req;
  if(url === '/') {
    handler.servePublic('index.html',res);
  } else if(url === '/getrate') {
    handler.getRate(req, res);
  }else{
    handler.servePublic(url, res);
  }
}

module.exports = router;
