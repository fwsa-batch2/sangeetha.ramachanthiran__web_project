
let myArray = [];

function creatingContainer() {
  let getItemSInLocal = localStorage.getItem("itemS");
  let getItemSInArray = JSON.parse(getItemSInLocal);
  for (i = 0; i < getItemSInArray.length; i++) {
    let imageSrc = getItemSInArray[i].imgSrc;
    let artsName = getItemSInArray[i].artName;
    let artsType = getItemSInArray[i].artType;
    let artistsName = getItemSInArray[i].artistName;
    let artistsPlace = getItemSInArray[i].place;
    let artsPrice = getItemSInArray[i].price;
    let values = {
      imageSrc: imageSrc,
      artsName: artsName,
      artsType: artsType,
      artistsName: artistsName,
      artistsPlace: artistsPlace,
      artsPrice: artsPrice,
    };
    myArray.push(values);
  }

  document.getElementById("container").innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    const containerContains =
      `<div class="productContainer">
          <img class="wishlist" src="../assets/img/heart.png" alt="wishlist" width="10%" height="10%">
          <img class="addToCart" id="addToCart_` +i+`" art_no="` +i+`" 
          src="../assets/img/addToCart.png" alt="addToCart" width="15%" height="11%" data-index="${i}" onclick="addToCart(event)">
          <img class="image" id="images_` +i+`" src="` +myArray[i].imageSrc +`" alt="drawing" width="60%" height="200">
          <p class="Content">
          <span class="artName" id="name_` +i +`">` +myArray[i].artsName +`</span><br>` +myArray[i].artsType +`<br><br><br>
          <span class="artistName">` +myArray[i].artistsName +`</span><br>` +myArray[i].artistsPlace +`
          <span class="rate" id="rateOfArts_` + i +`">` +myArray[i].artsPrice +`</span></p>
        </div>`
    document.getElementById("container").innerHTML += containerContains;
  }
}
creatingContainer();

let items = [];

function addToCart(event) {

  const index = event.target.dataset.index;
  let artsName = myArray[index].artsName;
  let artsPrice = myArray[index].artsPrice;
  let artsImage = myArray[index].imageSrc;
  
  let values = {
    name: artsName,
    image: artsImage,
    rate: artsPrice,
    quantity: 1,
  };
  items.push(values);

  let itemsInString = JSON.stringify(items);
  let itemsInLocal = localStorage.setItem("cartItem", itemsInString);

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

