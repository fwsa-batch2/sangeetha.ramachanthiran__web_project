
function getItem(){ 

    const itemsInLocal = localStorage.getItem("item");  
    const getLocalInArray = JSON.parse(itemsInLocal); 
    console.log(getLocalInArray);

    document.getElementById("cart_container").innerHTML = "";
    for(let i=0;i<getLocalInArray.length;i++){
      const Contains = `<div class="cart_products">    
            <div class="image" > <img id="images_`+i+`" src="`+getLocalInArray[i].image+` " alt="Images" width="100%" height="200"></div>
            <div class="artName" > <span id="name_`+i+`">`+getLocalInArray[i].name+`</span></div>
            <div class="rate"> <span  id="rateOfArts_`+i+`" value ="`+getLocalInArray[i].rate+`">Rs.`+getLocalInArray[i].rate+`</span></div>            
            <button class="button" id="decrease"  value="`+i+`" onclick="decrease()">-</button>
            <input class= "inputBox"  id="input_`+i+`" type="number"  value="0" min= "0" onfocusout="updateValue()" >
            <button class="button" id="increase" value="`+i+`" onclick="increase()">+</button> 
            <div class="priceValue" id="price_`+i+`" onchange="updateCartTotal()"  ></div>     
          </div>`
          const totals = `<div class="totalValue" id="total" ></div>`
      document.getElementById("cart_container").innerHTML += Contains;
      document.getElementById("totalRate").innerHTML += totals;
     
    }
}
getItem();
function updateValue() {
  let getTarget = event.target.value;
  let inputNum = document.getElementById("input_"+getTarget).value;
  let input = JSON.parse(inputNum);
  let priceOfArts = document.getElementById("rateOfArts_"+targetElement).getAttribute("value");
  let amount = input*priceOfArts;
  let target = event.target.value;
  
  if(amount != null){
    
    document.getElementById("price_"+target).innerHTML = "Rs."+amount;
    document.getElementById("price_"+target).setAttribute("value",amount);
}
}

function increase() {
  let targetElement = event.target.value;
  let inputNumber = document.getElementById("input_"+targetElement).value;
  let inputInArray = JSON.parse(inputNumber);
  let increaseNum = inputInArray+1;
  if(increaseNum != null) {
    document.getElementById("input_"+targetElement).value = increaseNum;
  }
  // let artPrice = document.getElementById("rateOfArts_"+targetElement).getAttribute("value");
  // let amount = increaseNum*artPrice;
  // let target = event.target.value;
  
  // if(amount != null){
    
  //   document.getElementById("price_"+target).innerHTML = "Rs."+amount;
  //   document.getElementById("price_"+target).setAttribute("value",amount);
  // }
  
updateCartTotal();
}

function decrease() {
  let targetValue = event.target.value;
  let inputNumber = document.getElementById("input_"+targetValue).value;
  let inputInArray = JSON.parse(inputNumber);

  let decreaseNum = inputNumber>0 ? inputInArray-1 : 0;
  if(decreaseNum != null) {
    
    document.getElementById("input_"+targetValue).value = decreaseNum;
  }
  // let artPrice = document.getElementById("rateOfArts_"+targetValue).getAttribute("value");
  // let amount = decreaseNum*artPrice;
  // let target = event.target.value;
  
  // if(amount != null){
    
  //   document.getElementById("price_"+target).innerHTML = "Rs."+amount;
  //   document.getElementById("price_"+target).setAttribute("value",amount);
  
  updateCartTotal();
}

 function updateCartTotal() {
  let total = 0;
  let priceList = document.getElementsByClassName("priceValue");
  let length = priceList.length;
  // console.log(priceList);
  
  for(i=0;i<length;i++){

  let rate = document.getElementById("price_"+i).getAttribute("value");
  let rateInArray = JSON.parse(rate);
     total = total + rateInArray;
    //  console.log(total);
     document.getElementById("total").innerHTML = "Rs."+total;
  }
 }

console.log("hello");