function fetch(url,method , value, callback){
  let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    let response = xhr.responseText;
    callback(response);
  }
}
xhr.open(method, url);
xhr.send(value);
}