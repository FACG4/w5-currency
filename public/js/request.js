function fetch(url,method ,amount, value, callback){
  var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    let response = xhr.responseText;
    callback(response);
  }
}
var data= JSON.stringify({value,amount})
xhr.open(method, url);
xhr.send(data);
}