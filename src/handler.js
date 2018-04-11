//servFiles
// function to serv the public files to the dom

const fs = require('fs');
const path = require('path');
const contentType = {
  html : 'text/html' ,
  css : 'text/css' ,
  jpg : 'images/jpg',
  ico : 'images/ico',
  js  : 'text/javascript'
}
const servePublic = (endpoint, res) => {
 const filePath =path.join(__dirname,'..','public',endpoint);
 const fileExtention = endpoint.split('.')[1];
 res.writeHead(200,{'Content-Type':`${contentType[fileExtention]}`});
 fs.readFile(filePath , (error,file) => {
   if(error){
      return error;
   }
   else{
     res.end(file);
   }
 })
}

//get the value from client side;

let getRate = (req, res) => {
    let currency = '';
    req.on('data', (chunk) => {
      currency += chunk;

    });
    req.on('end', ()=>{
      rateFromApi(res, currency);
    });
}

// fetch API
// make a request to the external api and return the required data

const request = require('request');
const rateFromApi = (res, currency) => {
  const url = `https://blockchain.info/tobtc?currency=${currency}&value=1`
  request.get(url, (error, response, body) => {
    if (error){
      return error;
    }
    else {
      res.writeHead(302, {'location': '/'})
      res.end(body);
    }
  });
}

module.exports = {servePublic, getRate};
