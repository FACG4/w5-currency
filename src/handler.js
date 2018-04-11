const fs = require('fs');
const path = require('path');
const request = require('request');
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

let getRate = (req, res) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;

    });
    req.on('end', ()=>{
      console.log(data);
      console.log(typeof data);
      data = JSON.parse(data)
      const currency = data.value;
      const amount = data.amount;
      rateFromApi(res, currency , amount);
    });
}

const rateFromApi = (res, currency,amount) => {
  const url = `https://blockchain.info/tobtc?currency=${currency}&value=${amount}`
  request.get(url, (error, response, body) => {
    if (error){
      return error;
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end(body);
    }
  });
}

const notFound = (url, res) =>{
  const filePath = path.join(__dirname, '..', 'public', 'not_found.html');
  fs.readFile(filePath, (error, file)=>{
    if(error){
      return error;
    } else{
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(file);
    }
  })
}


module.exports = {servePublic, getRate, notFound};
