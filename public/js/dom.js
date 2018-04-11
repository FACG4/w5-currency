var select = (selector)=>{
  return document.querySelector(selector);
}

var selectCurr = select('#browsers');
var amountInput = select('.amount');
var submit = select('.submit');
var result = select('.result-calc')

amountInput.addEventListener('change',function(e){
 var currType = selectCurr.value;
 var amount = amountInput.value;

 fetch('/getrate','POST',amount,currType,function(response){

    result.textContent = amount+'  '+currType +' =  '+response+'  Bitcoin.';
 });
});
