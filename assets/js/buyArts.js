

let arrayOfProducts = [{"artName":"Butterfly-on-hand","artType":"Pencildrawing","artistName":"Kaushik","place":"Chennai","artPrice":"100","artImage":"../assets/img/kaushik_butterfly.jpeg"},
{"artName":"Mountain","artType":"Painting","artistName":"Ismail","place":"Thoothukudi","artPrice":"500","artImage":"../assets/img/smile_mountain_painting.jpg"},
{"artName":"Dora-Buji","artType":"Color-pencil-drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"200","artImage":"../assets/img/smile_dora.jpg"},
{"artName":"One-Perspective-Room","artType":"Sketch","artistName":"Ismail","place":"Thoothukudi","artPrice":"300","artImage":"../assets/img/smile_rooms.jpg"},
{"artName":"Mother-Love","artType":"Pencil drawing","artistName":"Annapoorani","place":"Theni","artPrice":"120","artImage":"../assets/img/poorani_mothersLove.jpeg"},
{"artName":"Attractive-eyes","artType":"Pencil-drawing","artistName":"Sangeetha","place":"Chennai","artPrice":"100","artImage":"../assets/img/sangee_eyes.jpg"},
{"artName":"Super-Heros","artType":"Color-pencil-drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"100","artImage":"../assets/img/smile_superHeros.jpg"},
{"artName":"Birds","artType":"Painting","artistName":"Kaushik","place":"Chennai","artPrice":"500","artImage":"../assets/img/kaushik_birds_painting.jpeg"},
{"artName":"Cute-baby-sleeping","artType":"Pencil-drawing","artistName":"Annapoorani","place":"Theni","artPrice":"100","artImage":"../assets/img/poorani_baby.jpeg"},
{"artName":"Banana","artType":"Color-pencil-drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"100","artImage":"../assets/img/smile_banana.jpg"},
{"artName":"Forest","artType":"Painting","artistName":"Ismail","place":"Thoothukudi","artPrice":"1000","artImage":"../assets/img/smile_forest_painting.jpg"},
{"artName":"Three-sisters-love","artType":"Pencil-drawing","artistName":"Sangeetha","place":"Chennai","artPrice":"100","artImage":"../assets/img/Sangee_sistersLove.jpg"},
{"artName":"Subway-surfers","artType":"Color-pencil-drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"100","artImage":"../assets/img/smile_subway.jpg "},
{"artName":"Actor-Vijay","artType":"Pencil-drawing","artistName":"Sangeetha","place":"Chennai","artPrice":"100","artImage":"../assets/img/sangee_thalapathy.jpg"},
{"artName":"Apple","artType":"Color pencil drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":" 100","artImage":"../assets/img/smile_apple.jpg"},
{"artName":"Ear Phones","artType":"Pencil drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"100","artImage":"../assets/img/smile_headset.jpeg"}];

let array = arrayOfProducts[0].artName;

// console.log(array);

creatingContainer();  

function creatingContainer(){
  document.getElementById("container").innerHTML = "";
for(var i=0;i<arrayOfProducts.length;i++){

const containerContains = `<div class="productContainer">
          <img class="wishlist" src="../assets/img/heart.png" alt="wishlist" width="10%" height="10%">
          <img class="addToCart" id="addToCart_`+i+`" art_no="`+i+`" src="../assets/img/addToCart.png" alt="addToCart" width="15%" height="11%" onclick="addToCart()">
          <img class="image" id="images_`+i+`" src="`+arrayOfProducts[i].artImage+` " alt="kaushik's butterfly" width="60%" height="200">
          <p class="Content"><span class="artName" id="name_`+i+`">`+arrayOfProducts[i].artName+`</span><br> `+arrayOfProducts[i].artType+`<br><br><br> <span class="artistName">`+arrayOfProducts[i].artistName+`</span><br>
          `+arrayOfProducts[i].place+`<span class="rate" id="rateOfArts_`+i+`">`+arrayOfProducts[i].artPrice+`</span></p>
        </div>
  `
document.getElementById("container").innerHTML += containerContains;
}
}

let items = [];
// let arrayOfArtName = [];
// let arrayOfPrice =[];

function addToCart(){
  // console.log(event.target.id);

  let artNo = document.getElementById(event.target.id).getAttribute("art_no");

  console.log(artNo);

  let artsName = arrayOfProducts[artNo].artName;
  console.log(artsName);

  let artsPrice = arrayOfProducts[artNo].artPrice;
  console.log(artsPrice);

  let artsImage = arrayOfProducts[artNo].artImage;
  console.log(artsImage);

  let values = {
   "name": artsName,
   "image" : artsImage,
   "rate" : artsPrice
  }
  items.push(values);

  let itemsInString = JSON.stringify(items);
  let itemsInLocal = localStorage.setItem("item", itemsInString );
  console.log(itemsInLocal);

  
  document.getElementById("alerts").innerHTML = "Successfully carted";
  
  }

function getLocalStorage() {
  let getItemsFromLocal = localStorage.getItem("item");
  const itemsInArray = JSON.parse(getItemsFromLocal);
  if(itemsInArray != null) {
    items = itemsInArray;
  }
  
}





getLocalStorage();

















// let cartArts = []; 

// function addToCart(){
//   console.group("addToCart");
// let itemName = document.getElementById("name").textContent;
// console.log(itemName);
// let itemRate = document.getElementById("rateOfButterfly").textContent;
// console.log(itemRate);
// let items ={
//   productName : itemName,
//   productRate : itemRate
// }
// console.log(items);
// cartArts.push(items);
// console.log(cartArts);
// let itemsInString = JSON.stringify(cartArts);
// let itemsInSession = sessionStorage.setItem("artItems", itemsInString);
// console.log(itemsInSession);
// console.groupEnd("addToCart");
// }







// updateCartTotal();

// document.getElementById("emptyCart").addEventListener("click", emptyCart);

// let imageBtn = document.getElementsByClassName('addToCart');
// for(let i=0; i< imageBtn.length; i++){
//   imageBtn[i].addEventListener('click', function(){addToCart(this);});

// }

// function addToCart(param){

//   let sibs =[];
//   let getRate;
//   let getName;
//   let  cartArts =[];
//   let stringCartArts;

//   while(param = param.previousSibling){
//     if(param.nodeType === 3) continue;
//     if(param.className == "rate"){
//       getRate = param.innerText;
//     }

//     if(param.className == "artName"){
//       getName == param.innerText;
//     }
//     sibs.push(param);
//   }
//   //create object
//   let items ={
//     artName : getName,
//     rate : getRate
//   };
//   let itemsInString = JSON.stringify(items);

//   if(!sessionStorage.getItem('cartArts')){
//      cartArts.push(itemsInString);

//     stringCartArts = JSON.stringify(cartArts);

//     sessionStorage.setItem('cartArts',stringCartArts);

//     addedToCart(getName);
//     // updateCartTotal();
//   }
//   else{
//     cartArts = JSON.parse(sessionStorage.getItem("cartArts"));

//     cartArts.push(itemsInString);
//     stringCartArts = JSON.stringify(cartArts);

//     sessionStorage.setItem('cartArts',stringCartArts);
//     addedToCart(getName);
//     // updateCartTotal();
//   }
// }

// function updateCartTotal(){

//   let total = 0;
//   let rate = 0;
//   let products = 0;
//   let artName = "";
//   let cartTable = "";

//   if(sessionStorage.getItem("cartArts")){
//     let cartArts = JSON.parse(sessionStorage.getItem("cartArts"));

//     products = cartArts.length;

//     for (let i=0; i<products; i++){
//       let n = JSON.parse(cartArts[i]);
//       rate = parseFloat(n.rate.split('$')[1]);
//       artName = n.artName;

//       cartTable += "<tr><td>" + artName + "</td></tr>$" + rate.toFixed(2) + "</td></tr>";
//       total += rate;
//     }
//   }

//   document.getElementById("total").innerHTML = total.toFixed(2);
//   document.getElementById("cartTable").innerHTML = cartTable;
//   document.getElementById("itemQuantity").innerHTML =  products;
//   }


//   function addedToCart(paramName){
//     let msg = paramName + "was added";
//     let alerts = document.getElementById("alerts");
//     alerts.innerHTML = msg;

//     if(!alerts.classList.contains("msg")){
//       alerts.classList.add("msg");
//     }
//   }

//   function emptyCart(){
//     if(sessionStorage.getItem("cartArts")){
//       sessionStorage.removeItem("cartArts");
//       updateCartTotal();

//       let alerts = document.getElementById("alerts");
//       alerts.innerHTML = "";
//       if(alerts.classList.contains("msg")){
//         alerts.classList.remove("msg");
//       }
//     }
//   }