
function getItem(){ 

    const itemsInLocal = localStorage.getItem("cartItem");  
    const getLocalInArray = JSON.parse(itemsInLocal); 
    console.log(getLocalInArray);

    document.getElementById("cart_container").innerHTML = "";
    for(let i=0;i<getLocalInArray.length;i++){
      const Contains = `<div class="cart_products" id="container_`+i+`">     
            <div class="image"><img id="images_`+i+`" src="`+getLocalInArray[i].image+`" alt="Images" width="100%" height="200"></div>
            <div class="artName" > <span id="name_`+i+`">`+getLocalInArray[i].name+`</span></div>
            <div class="rate"> <span  id="rateOfArts_`+i+`" value ="`+getLocalInArray[i].rate+`">Rs.`+getLocalInArray[i].rate+`</span></div>            
            <button class="button" id="decrease"  value="`+i+`" onclick="decrease(event)">-</button>
            <input class= "inputBox"  id="input_`+i+`" type="number"  value="1" min= "0"  >
            <button class="button" id="increase" value="`+i+`" onclick="increase(event)">+</button> 
            <div class="priceValue" id="price_`+i+`"  onchange="updateCartTotal()">Rs.`+getLocalInArray[i].rate+`</div> 
            <div>
            <button class="removeBtn" onclick="removeItem(event)">Remove</button>
            </div>  
          </div>`
          const totals = `<div class="totalValue" id="total" ></div>`
      document.getElementById("cart_container").innerHTML += Contains;
      document.getElementById("totalRate").innerHTML += totals;
     
    }
}
getItem();

function increase(event) {
  let targetElement = event.target.value;
  let inputNumber = document.getElementById("input_"+targetElement).value;
  let inputInArray = JSON.parse(inputNumber);
  let increaseNum = inputInArray+1;
  if(increaseNum != null) {
    document.getElementById("input_"+targetElement).value = increaseNum;
  }
  let artPrice = document.getElementById("rateOfArts_"+targetElement).getAttribute("value");
  let amount = increaseNum*artPrice;
  let target = event.target.value;
  
  if(amount != null){
    document.getElementById("price_"+target).innerHTML = "Rs."+amount;
    document.getElementById("price_"+target).setAttribute("value",amount);
  }
  
updateCartTotal();
}

function decrease(event) {
  let targetValue = event.target.value;
  let inputNumber = document.getElementById("input_"+targetValue).value;
  let inputInArray = JSON.parse(inputNumber);
  let decreaseNum = inputNumber>0 ? inputInArray-1 : 0;
  if(decreaseNum != null) {
    document.getElementById("input_"+targetValue).value = decreaseNum;
  }
  let artPrice = document.getElementById("rateOfArts_"+targetValue).getAttribute("value");
  let amount = decreaseNum*artPrice;
  let target = event.target.value;
  
  if(amount != null){
    document.getElementById("price_"+target).innerHTML = "Rs."+amount;
    document.getElementById("price_"+target).setAttribute("value",amount);
  }
  updateCartTotal();
}

 function updateCartTotal() {
  let total = 0;
  let priceList = document.getElementsByClassName("priceValue");
  for(let i=0;i<priceList.length;i++){
  let rate = document.getElementById("price_"+i).getAttribute("value");
  let rateInArray = JSON.parse(rate);
     total = total + rateInArray;
     document.getElementById("total").innerHTML = "Rs."+total;
  }
 }

 function removeItem(event) {
  let getLocal = localStorage.getItem("cartItem");
  const getLocalInArray = JSON.parse(getLocal); 
  console.log(getLocalInArray);
  let targetName = event.target.value;
  console.log(targetName);
  
 }
