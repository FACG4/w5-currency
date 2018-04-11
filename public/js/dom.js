// currency rate listener
var select = (selector)=>{
  return document.querySelector(selector);
}
var curnType = select('#browsers').value;
var amount = select('.amount').value;
var ok= select('.end')


ok.addEventListener('click',function(e){


 fetch('/getrate','POST',amount,curnType,function(response){
  console.log(response);
 
 });
});


//calc listener
