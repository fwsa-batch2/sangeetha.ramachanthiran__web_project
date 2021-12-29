
let arrayOfProducts = [["Butterfly-on-hand","Pencildrawing","Kaushik","Chennai","Rs-100","../assets/img/kaushik_butterfly.jpeg"],
["Dora-Buji","Color-pencil-drawing","Ismail","Thoothukudi","Rs-200","../assets/img/smile_dora.jpg"],
["Mountain","Painting","Ismail","Thoothukudi","Rs-500","../assets/img/smile_mountain_painting.jpg"],
["One-Perspective-Room","Sketch","Ismail","Thoothukudi","Rs-300","../assets/img/smile_rooms.jpg"],
["Mother-Love","Pencil drawing","Annapoorani","Theni","Rs-120","../assets/img/poorani_mothersLove.jpeg"],
["Attractive-eyes","Pencil-drawing","Sangeetha","Chennai","Rs-100","../assets/img/sangee_eyes.jpg"],
["Super-Heros","Color-pencil-drawing","Ismail","Thoothukudi","Rs-100","../assets/img/smile_superHeros.jpg"],
["Birds","Painting","Kaushik","Chennai","Rs-500","../assets/img/kaushik_birds_painting.jpeg"],
["Cute-baby-sleeping","Pencil-drawing","Annapoorani","Theni","Rs-100","../assets/img/poorani_baby.jpeg"],
["Banana","Color-pencil-drawing","Ismail","Thoothukudi","Rs-100","../assets/img/smile_banana.jpg"],
["Forest","Painting","Ismail","Thoothukudi","Rs-1000","../assets/img/smile_forest_painting.jpg"],
["Three-sisters-love","Pencil-drawing","Sangeetha","Chennai","Rs-100","../assets/img/Sangee_sistersLove.jpg"],
["Subway-surfers","Color-pencil-drawing","Ismail","Thoothukudi","Rs-100","../assets/img/smile_subway.jpg "],
["Actor-Vijay","Pencil-drawing","Sangeetha","Chennai","Rs-100","../assets/img/sangee_thalapathy.jpg"],
["Apple","Color pencil drawing","Ismail","Thoothukudi"," Rs-100","../assets/img/smile_apple.jpg"],
["Ear Phones","Pencil drawing","Ismail","Thoothukudi","Rs-100","../assets/img/smile_headset.jpeg"]];

let array = arrayOfProducts[0][1];

console.log(array);

creatingContainer();  

function creatingContainer(){
  document.getElementById("container").innerHTML = "";
for(var i=0;i<arrayOfProducts.length;i++){

const containerContains = `<div class="productContainer">
          <img class="wishlist" src="../assets/img/heart.png" alt="wishlist" width="10%" height="10%">
          <img class="addToCart" src="../assets/img/addToCart.png" alt="addToCart" width="15%" height="11%" onclick="addToCart()">
          <img class="image" id="butterfly" src="`+arrayOfProducts[i][5]+` " alt="kaushik's butterfly" width="60%" height="200">
          <p class="Content"><span class="artName" id="name">`+arrayOfProducts[i][0]+`</span><br> `+arrayOfProducts[i][1]+`<br><br><br> <span class="artistName">`+arrayOfProducts[i][2]+`</span><br>
          `+arrayOfProducts[i][3]+`<span class="rate" id="rateOfArts">`+arrayOfProducts[i][4]+`</span></p>
        </div>
  `
document.getElementById("container").innerHTML += containerContains;
}
}


















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