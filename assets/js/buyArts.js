// let arrayOfProducts = [{"artName":"Butterfly-on-hand","artType":"Pencildrawing","artistName":"Kaushik","place":"Chennai","artPrice":"100","artImage":"../assets/img/kaushik_butterfly.jpeg"},
// {"artName":"Mountain","artType":"Painting","artistName":"Ismail","place":"Thoothukudi","artPrice":"500","artImage":"../assets/img/smile_mountain_painting.jpg"},
// {"artName":"Dora-Buji","artType":"Color-pencil-drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"200","artImage":"../assets/img/smile_dora.jpg"},
// {"artName":"One-Perspective-Room","artType":"Sketch","artistName":"Ismail","place":"Thoothukudi","artPrice":"300","artImage":"../assets/img/smile_rooms.jpg"},
// {"artName":"Mother-Love","artType":"Pencil drawing","artistName":"Annapoorani","place":"Theni","artPrice":"120","artImage":"../assets/img/poorani_mothersLove.jpeg"},
// {"artName":"Attractive-eyes","artType":"Pencil-drawing","artistName":"Sangeetha","place":"Chennai","artPrice":"100","artImage":"../assets/img/sangee_eyes.jpg"},
// {"artName":"Super-Heros","artType":"Color-pencil-drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"100","artImage":"../assets/img/smile_superHeros.jpg"},
// {"artName":"Birds","artType":"Painting","artistName":"Kaushik","place":"Chennai","artPrice":"500","artImage":"../assets/img/kaushik_birds_painting.jpeg"},
// {"artName":"Cute-baby-sleeping","artType":"Pencil-drawing","artistName":"Annapoorani","place":"Theni","artPrice":"100","artImage":"../assets/img/poorani_baby.jpeg"},
// {"artName":"Banana","artType":"Color-pencil-drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"100","artImage":"../assets/img/smile_banana.jpg"},
// {"artName":"Forest","artType":"Painting","artistName":"Ismail","place":"Thoothukudi","artPrice":"1000","artImage":"../assets/img/smile_forest_painting.jpg"},
// {"artName":"Three-sisters-love","artType":"Pencil-drawing","artistName":"Sangeetha","place":"Chennai","artPrice":"100","artImage":"../assets/img/Sangee_sistersLove.jpg"},
// {"artName":"Subway-surfers","artType":"Color-pencil-drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"100","artImage":"../assets/img/smile_subway.jpg "},
// {"artName":"Actor-Vijay","artType":"Pencil-drawing","artistName":"Sangeetha","place":"Chennai","artPrice":"100","artImage":"../assets/img/sangee_thalapathy.jpg"},
// {"artName":"Apple","artType":"Color pencil drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":" 100","artImage":"../assets/img/smile_apple.jpg"},
// {"artName":"Ear Phones","artType":"Pencil drawing","artistName":"Ismail","place":"Thoothukudi","artPrice":"100","artImage":"../assets/img/smile_headset.jpeg"}];

// let array = arrayOfProducts[0].artName;

// console.log(array);

let myArray = [];

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
          <img class="addToCart" id="addToCart_` +
      i +
      `" art_no="` +
      i +
      `" src="../assets/img/addToCart.png" alt="addToCart" width="15%" height="11%" data-index="${i}" onclick="addToCart(event)">
          <img class="image" id="images_` +
      i +
      `" src="` +
      myArray[i].imageSrc +
      ` " alt="drawing" width="60%" height="200">
          <p class="Content">
          <span class="artName" id="name_` +
      i +
      `">` +
      myArray[i].artsName +
      `</span><br>` +
      myArray[i].artsType +
      `<br><br><br>
          <span class="artistName">` +
      myArray[i].artistsName +
      `</span><br>` +
      myArray[i].artistsPlace +
      `
          <span class="rate" id="rateOfArts_` +
      i +
      `">` +
      myArray[i].artsPrice +
      `</span></p>
        </div>`;
    document.getElementById("container").innerHTML += containerContains;
  }
}
creatingContainer();

let items = [];

function addToCart(event) {

  const index = event.target.dataset.index
  console.log(index);

  let artsName = myArray[index].artsName;
  console.log(artsName);

  let artsPrice = myArray[index].artsPrice;
  console.log(artsPrice);

  let artsImage = myArray[index].imageSrc;
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

