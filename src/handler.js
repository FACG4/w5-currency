//servFiles
// function to serv the public files to the dom
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
   }else{
     res.end(file);
   }

 })
}
//me

const makeApi = ()=>{
  
  const url = "https://blockchain.info/tobtc?currency="+ value+"&value=1";
  request.get(url, (error, response, body) => {
   let json = JSON.parse(body);
   let status = json.status;
  });
  }

// fetch API
// make a request to the external api and return the required data










module.exports = {servePublic} ;