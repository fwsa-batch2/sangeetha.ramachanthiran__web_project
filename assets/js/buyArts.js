

let myArray = [{"artsName":"Mountain","artsType":"Painting","artistsName":"Ismail","artistsPlace":"Thoothukudi","artsPrice":1000,"imageSrc":"../assets/img/smile_mountain_painting.jpg"},
{"artsName":"Super-Heros","artsType":"Color-pencil-drawing","artistsName":"Ismail","artistsPlace":"Thoothukudi","artsPrice":500,"imageSrc":"../assets/img/smile_superHeros.jpg"},
{"artsName":"Ear Phones","artsType":"Pencil drawing","artistsName":"Ismail","artistsPlace":"Thoothukudi","artsPrice":200,"imageSrc":"../assets/img/smile_headset.jpeg"}];

function creatingContainer() {
  let getItemSInLocal = localStorage.getItem("itemS");
  let getItemSInArray = JSON.parse(getItemSInLocal);
  console.log(getItemSInArray);
  for (i = 0; i < getItemSInArray.length; i++) {
    let imageSrc = getItemSInArray[i].imgSrc;
    console.log(imageSrc);
    let artsName = getItemSInArray[i].artName;
    console.log(artsName);
    let artsType = getItemSInArray[i].artType;
    console.log(artsType);
    let artistsName = getItemSInArray[i].artistName;
    console.log(artistsName);
    let artistsPlace = getItemSInArray[i].place;
    console.log(artistsPlace);
    let artsPrice = getItemSInArray[i].price;
    console.log(artsPrice);

    let values = {
      imageSrc: imageSrc,
      artsName: artsName,
      artsType: artsType,
      artistsName: artistsName,
      artistsPlace: artistsPlace,
      artsPrice: artsPrice,
    };
    myArray.push(values);
    console.log(myArray);
  }

  document.getElementById("container").innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    const containerContains =
      `<div class="productContainer">
          <img class="wishlist" src="../assets/img/heart.png" alt="wishlist" width="10%" height="10%">
          <img class="addToCart" id="addToCart_` +i +`" art_no="` +i +`" src="../assets/img/addToCart.png" alt="addToCart" width="15%" height="11%" data-index="${i}" onclick="addToCart()}">
          <img class="image" id="images_` +i +`" src="` +myArray[i].imageSrc +` " alt="drawing" width="60%" height="200">
          <p class="Content">
          <span class="artName" id="name_` +i +`">` +myArray[i].artsName +`</span>
          <br>` +myArray[i].artsType +`<br><br><br> <span class="artistName">` +myArray[i].artistsName +`</span>
          <br>` + myArray[i].artistsPlace +`<span class="rate" id="rateOfArts_` +i +`">` +myArray[i].artsPrice +`</span>
          </p>
        </div>`;
    document.getElementById("container").innerHTML += containerContains;
  }
}
creatingContainer();

let items = [];

function addToCart(event) {

  const index = event.target.dataset.index
  console.log(index);

  const art = myArray[index];
  console.log(art);



  let artNo = document.getElementById(event.target.id).getAttribute("art_no");
  console.log(artNo);
  console.log(getArray);
  let artsName = myArray[artNo].artsName;
  console.log(artsName);

  let artsPrice = myArray[artNo].artsPrice;
  console.log(artsPrice);

  let artsImage = myArray[artNo].imageSrc;
  console.log(artsImage);

  let values = {
    name: artsName,
    image: artsImage,
    rate: artsPrice,
    quantity: 1,
  };
  items.push(values);

  let itemsInString = JSON.stringify(items);
  let itemsInLocal = localStorage.setItem("cartItem", itemsInString);
  console.log(itemsInLocal);

  document.getElementById("alerts").innerHTML = "Successfully carted";
}

function getLocalStorage() {
  let getItemsFromLocal = localStorage.getItem("cartItem");
  const itemsInArray = JSON.parse(getItemsFromLocal);
  if (itemsInArray != null) {
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
