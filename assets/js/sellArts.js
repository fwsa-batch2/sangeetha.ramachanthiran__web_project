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
  let imageLink = existImageLink(imgSrc);
  console.log(imageLink);
  if(imageLink){
    alert("This drawing already added");
    return;
  }
  array.push(itemValue);
  let itemsInString = JSON.stringify(array);
  localStorage.setItem("ITEMS", itemsInString);
  window.location.href="../pages/buyArts.html"
}

function existImageLink(imageSource) {
  console.group("existImageLink");
  const userProducts = JSON.parse(localStorage.getItem("ITEMS"));
    let lengthOfUserProduct = userProducts != null ? userProducts.length : 0;
    let isExist;
    console.log(isExist);
  if(userProducts != null){
  for (let i = 0; i < lengthOfUserProduct; i++) {
    const userItem = userProducts[i];
    const srcOfImage = userItem.imgSrc;
  if(imageSource == srcOfImage){
   isExist =true;
   break;
  }
  else{
    isExist = false;
  }
  }
}
  console.groupEnd("existImageLink");
  return isExist;  
}