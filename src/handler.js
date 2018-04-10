//servFiles
// function to serv the public files to the dom


// fetch API
// make a request to the external api and return the required data

const request = require('request');
const handler = (req, res, value) => {
  const url = `https://blockchain.info/tobtc?currency=${value}&value=1`
  request.get(url, (error, response, body)=> {
    if error{
      return error;
    }
    else {
      res.end(body);
    }
  });
}

module.exports = handler;
