// router function

const handler = require('./handler.js');

const router  = (req ,res)=>{
  const {url} = req;
  if(url === '/') {
    handler.servePublic('index.html',res);
  } else{
    handler.servePublic(url, res);
  }

}