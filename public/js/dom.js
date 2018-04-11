// currency rate listener
var select = (selector)=>{
  return document.querySelector(selector);
}
var x = select('#browsers');
var y = select('.amount');

var ok= select('.end')


ok.addEventListener('click',function(e){
 var curnType = x.value;
 var amount = y.value;
 

 fetch('/getrate','POST',amount,curnType,function(response){
    console.log(response);
    
  
 });
});


//calc listener
