function getItem(){ 
    const itemsInLocal = localStorage.getItem("CARTITEM");  
    const getLocalInArray = JSON.parse(itemsInLocal); 
    document.getElementById("cart_container").innerHTML = "";

    for(let i=0;i<getLocalInArray.length;i++){
      const Contains = `<div class="cart_products" id="container_`+i+`">     
            <div class="image"><img id="images_${i}" src="`+getLocalInArray[i].image+`" alt="Images" width="100%" height="200"></div>
            <div class="artName" > <span id="name_${i}">`+getLocalInArray[i].name+`</span></div>
            <div class="rate"> <span  id="rateOfArts_${i}" value ="`+getLocalInArray[i].rate+`">Rs.`+getLocalInArray[i].rate+`</span></div>            
            <div class="qnty">
              <button class="button" id="decrease_${i}"  value="${i}" onclick="decrease(event)">-</button>
              <p class= "inputBox"  id="input_${i}" type="number"  value="1" min= "0">1</p>
              <button class="insButton" id="increase_${i}" value="${i}" onclick="increase(event)">+</button> 
            </div>
            <div class="priceValue" id="price_${i}" onchange="updateCartTotal()">Rs.`+getLocalInArray[i].rate+`</div> 
            <div>
            <button class="removeBtn" id="remove" onclick="removeItem(${i})" value="${i}">Remove</button>
            </div>  
          </div>`
          const totals = `<div class="totalValue" id="total"></div>`
      document.getElementById("cart_container").innerHTML += Contains;
      document.getElementById("totalRate").innerHTML += totals; 
    }
}
getItem();

function increase(event) {
  //1. get quantity
  let targetElement = event.target.value;
  let inputNumber = document.getElementById("input_"+targetElement).innerHTML;
  console.log(inputNumber);
  //2. validation

  //3. increase quantity
  let qtyInArray = parseInt(inputNumber); 
  let increaseQty = qtyInArray+1;
  if(increaseQty != null) {
  //4. update the qty
    document.getElementById("input_"+targetElement).innerHTML = increaseQty;
  }
  //5. price of the product
  let artPrice = document.getElementById("rateOfArts_"+targetElement).getAttribute("value");
  //6. Calculate total amount
  let amount = increaseQty*artPrice;
  if(amount != null){
    document.getElementById("price_"+targetElement).innerHTML = "Rs."+amount;
    document.getElementById("price_"+targetElement).setAttribute("value",amount);
  }  
updateCartTotal();
} 

function decrease(event) {
  //1. get quantity
  let targetValue = event.target.value;
  let inputNumber = document.getElementById("input_"+targetValue).innerHTML;
  //2. validation
  let inputInArray = parseInt(inputNumber);
  //3. decrease quantity
  let decreaseNum = inputNumber>1 ? inputInArray-1 : 1;
  //4. disbled the decrease button.
  if(decreaseNum === 1) {
  document.getElementById("decrease_"+targetValue).style.display="none";
  }
  if(decreaseNum != null) {
    //5. update the quantity
    document.getElementById("input_"+targetValue).innerHTML = decreaseNum;
  }
  //6. price of the product
  let artPrice = document.getElementById("rateOfArts_"+targetValue).getAttribute("value");
  //7. Calculate total amount
  let amount = decreaseNum*artPrice;
  let target = event.target.value;
  if(amount != null){
    document.getElementById("price_"+target).innerHTML = "Rs."+amount;
    document.getElementById("price_"+target).setAttribute("value",amount);
  }
  updateCartTotal();
}

function updateCartTotal() {
  //1. craete variable
  let total = 0;
  //2. total price of the products
  let priceList = document.getElementsByClassName("priceValue");
  for(let i=0;i<priceList.length;i++){
  let rate = document.getElementById("price_"+i).getAttribute("value");
  let rateInArray = JSON.parse(rate);   
  //3. Add the price of products
     total = total + rateInArray;
     document.getElementById("total").innerHTML = "Rs."+total;
  }
 }



function removeItem(index) {
  //1. get value from the local storage
  let localName = localStorage.getItem("CARTITEM");
  const localInArray = JSON.parse(localName); 
  //2. delete the product from localstorage and set the rest product.
  localInArray.splice(index,1);
  let stringify = JSON.stringify(localInArray);
  localStorage.setItem("CARTITEM",stringify);
  //CartServcie.removeItem(index);
  getItem();
 }

