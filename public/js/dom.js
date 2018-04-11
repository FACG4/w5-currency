var select = (selector)=>{
  return document.querySelector(selector);
}

var selectCurr = select('#browsers');
var amountInput = select('.amount');
var submit = select('.submit');

submit.addEventListener('click',function(e){
 var currType = selectCurr.value;
 var amount = amountInput.value;

 fetch('/getrate','POST',amount,currType,function(response){
    console.log(response);
 });
});
