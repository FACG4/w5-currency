// router function
const request = require('request')

const handler = require('./handler.js');

const router  = (req ,res)=>{
  const {url} = req;


  
  if(url === '/') {
    handler.servePublic('index.html',res);
  }else if(url === '/getrate'){
    var data ='';
    req.on('data',(chunck) =>{
      data += chunck;
    })
    req.on('end',()=>{
   console.log(data);
   
  
        const url = "https://blockchain.info/tobtc?currency="+ data+"&value=1";
        request.get(url, (error, response, body) => {
        // let json = JSON.parse(body);
         console.log(body);
          res.end(body)
         
        });
    })


  } else{
    handler.servePublic(url, res);
  }

}
//me



module.exports = router;