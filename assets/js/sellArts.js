let array =[];

function getValueFromLocal() {
  //get localStorage value
  let getLocalStorage =  localStorage.getItem("ITEMS");
  let itemSInArray = JSON.parse(getLocalStorage);
  //condition for replacing value
  if(itemSInArray != null){
    array = itemSInArray;
  }
}
getValueFromLocal();

function submitHandler(event) {
  event.preventDefault();
  // get product details
  const artistName = document.getElementById("artistName").value;
  const place = document.getElementById("place").value;
  const artName = document.getElementById("artName").value;
  const artType = document.getElementById("artType").value;
  const price = JSON.parse(document.getElementById("price").value);
  const imgSrc = document.getElementById("image").value;
  const itemValue = {
    "artistName" : artistName,
    "place" : place,
    "artName" : artName,
    "artType" : artType,
    "price" : price,
    "imgSrc" : imgSrc
  }
  // condition for image link exists
  let imageLink = existImageLink(imgSrc);
  if(imageLink){
    alert("This drawing already added");
    return;
  }
  array.push(itemValue);
  let itemsInString = JSON.stringify(array);
  // set the values in localStorage
  localStorage.setItem("ITEMS", itemsInString);
  window.location.href="../pages/buyArts.html"
}

function existImageLink(imageSource) {
  // get the value from the localStorage
  const userProducts = JSON.parse(localStorage.getItem("ITEMS"));
  // Condition for if the localStorage is empty the length of the array is zero.
    let lengthOfUserProduct = userProducts != null ? userProducts.length : 0;
    let isExist;
  if(userProducts != null){
  for (let i = 0; i < lengthOfUserProduct; i++) {
    // get image source from user product details.
    const userItem = userProducts[i];
    const srcOfImage = userItem.imgSrc;
    // check the image source is already in localStorage
  if(imageSource == srcOfImage){
   isExist =true;
   break;
  }
  else{
    isExist = false;
  }
  }
}
  return isExist;  
}