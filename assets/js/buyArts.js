let myArray = [{imageSrc:"../assets/img/smile_headset.jpeg",
    artsName: "Headset",artsType: "Pencil drawing",
    artistsName: "Ismail",
    artistsPlace: "Thoothukudi",
    artsPrice: 500},
    {imageSrc:"../assets/img/smile_subway.jpg",
    artsName: "Subway Surfers",
    artsType: "Pencil drawing",
    artistsName: "Ismail",
    artistsPlace: "Thoothukudi",
    artsPrice: 500},];

function creatingContainer() {
  let getItemSInLocal = localStorage.getItem("itemS");
  let getItemSInArray = JSON.parse(getItemSInLocal);
  let lengthOfgetItemSInArray = getItemSInArray.length;
  for (let i = 0; i < lengthOfgetItemSInArray; i++) {
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
    }
    myArray.push(values);  
  }
  document.getElementById("container").innerHTML = "";
  let lengthOfArray = myArray.length;
  for (let i = 0; i < lengthOfArray; i++) {
    const containerContains =
      `<div class="productContainer">
        <img class="wishlist" src="../assets/img/heart.png" alt="wishlist" width="10%" height="10%">
        <img class="addToCart" id="addToCart_${i}" value="${i}" src="../assets/img/addToCart.png" alt="addToCart" width="15%" height="11%" data-index="${i}" onclick="{addToCart(event)}">
        <img class="image" id="images_${i}" src="` +myArray[i].imageSrc +` " alt="drawing" width="60%" height="200">
        <p class="Content">
          <span class="artName" id="name_${i}">` +myArray[i].artsName +`</span>
          <br>` +myArray[i].artsType +`<br><br><br><span class="artistName">` +myArray[i].artistsName +`</span>
          <br>` + myArray[i].artistsPlace +`<span class="rate" id="rateOfArts_${i}">` +myArray[i].artsPrice +`</span>
        </p>
      </div>`
    document.getElementById("container").innerHTML += containerContains;
  }
}
creatingContainer();

let items = [];

function addToCart(event) {
  let index = event.target.dataset.index;
  let art = myArray[index];
  console.log(art);
  let artsName = art.artsName;
  let artsPrice = art.artsPrice;
  let artsImage = art.imageSrc;
  let values = {
    name: artsName,
    image: artsImage,
    rate: artsPrice,
    quantity: 1,
  }
  items.push(values);
  let itemsInString = JSON.stringify(items);
  let itemsInLocal = localStorage.setItem("cartItem", itemsInString);
  console.log(itemsInLocal);
}

function getLocalStorage() {
  let getItemsFromLocal = localStorage.getItem("cartItem");
  const itemsInArray = JSON.parse(getItemsFromLocal);
  if (itemsInArray != null) {
    items = itemsInArray;
  }  
}
getLocalStorage();
console.log("hello");
