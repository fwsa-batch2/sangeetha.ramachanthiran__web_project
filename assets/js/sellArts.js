let array =[];
function getData(){
 
    let getLocalStorage =  localStorage.getItem("itemS");
    let itemSInArray = JSON.parse(getLocalStorage);
    if(itemSInArray != null){
      array = itemSInArray;
    }
  }
getData();

function submitHandler() {
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

array.push(itemValue);
let itemsInString = JSON.stringify(array);
localStorage.setItem("itemS", itemsInString);
window.location.href="../pages/buyArts.html"
}
