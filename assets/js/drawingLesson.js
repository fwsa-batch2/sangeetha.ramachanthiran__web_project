//Create variables for canva sheet and tools and context...!
const draw = document.getElementById("canvaSheet");
const drawingTools = document.getElementById("drawingTools");
const drawingContext = draw.getContext('2d');

//Create offset for X and Y co-ordinators..!
const drawOffSetX = draw.offsetLeft;
const drawOffSetY = draw.offsetTop;

//offset for X and Y co-ordinate subract from inner width and height and create sheet width and height..!
draw.width = window.innerWidth - drawOffSetX;
draw.height = window.innerHeight - drawOffSetY;

let isDraw = false;
let lineWidth = 5;

let coordinateX;
let coordinateY;

drawingTools.addEventListener('click', e =>{
  if(e.target.id === 'clear'){
    drawingContext.clearRect(0, 0, draw.width,draw.height);
  }
});

drawingTools.addEventListener('change' , e=>{
    if(e.target.id === 'chooseColor'){
        drawingContext.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth'){
        lineWidth = e.target.value
    }
    
});

//This variable for 58th line...!
const canva = (e) => {
    if(!isDraw){
        return;
    }
    drawingContext.lineWidth = lineWidth;
    drawingContext.lineCap = 'round'

    drawingContext.lineTo(e.clientX - drawOffSetX, e.clientY);
    drawingContext.stroke();
}

draw.addEventListener('mousedown',(e) =>{
    isDraw = true;
    coordinateX = e.clientX;
    coordinateY = e.clientY;
});

draw.addEventListener('mouseup', e =>{
    isDraw = false;
    drawingContext.stroke();
    drawingContext.beginPath();
});

draw.addEventListener('mousemove',canva);

























// document.getElementById("cartCont").innerHTML = ""
// for(var i=0;i<3;i++){

// const testhtml = `<div class="leftContainer">
//           <img class="wishlist" src="../assets/img/heart.png" alt="wishlist" width="8%" height="40">
         
//          <button class="addToCart" onclick="addToCart()">
//           <img  src="../assets/img/addToCart.png" alt="addToCart" width="11%" height="50" >
//          </button> 
         
//           <img class="image" id="butterfly" src="../assets/img/kaushik_butterfly.jpeg" alt="kaushik's butterfly" width="50%" height="200">
//           <p class="leftContent"><span class="artName" id="name">`+testArr[i][0]+`</span><br> Pencil drawing <br><br><br> <span class="head">`+testArr[i][2]+`</span><br>
//           Chennai <span class="rate" id="rateOfButterfly">`+testArr[i][1]+`</span></p>
//         </div>
//   `
// document.getElementById("cartCont").innerHTML += testhtml;

// }
























let shopArts = (function(){

    arts = [];
  
    //Constructor
    function cartItem(name, rate, count){
      this.name = name;
      this.rate = rate;
      this.count = count;
    }
  
    //Save items
    function saveItems(){
      sessionStorage.setItem("artItems", JSON.stringify(arts));
  
    }
  
    //Load arts
    function loadArt(){
      arts = JSON.parse(sessionStorage.getItem("artItems"));
  
    }
    if(sessionStorage.getItem("artItems")!= null){
      loadArt();
    }
  
    
    let object ={};
  
    //Add to cart
    object.addItemToCart = function(name, rate, count){
      for(let item in arts){
        if(arts[item],name === name){
          arts[item].count ++;
          saveItems();
          return;
        }
      }
      let item = new Item(name, rate, count);
      arts.push(item);
      saveItems();
    }
  
    //set count from item
    object.setCountForItem = function(name, count){
      for(let i in arts){
        if(arts[i].name === name){
          arts[i].count = count;
          break;
        }
      }
    }
  
    //clear arts
    object.clearArts = function(){
      arts =[];
      saveItems();
    }
  
    //Count cart
    object.totalCount = function(){
      let totalCount = 0;
      for(let item in arts){
        totalCount += arts[item].count;
      }
      return totalCount;
    }
  
    //Total arts
    object.totalArt = function(){
      let totalArt = 0;
      for(let item in arts){
        totalArt += arts[item].rate * arts[item].count;
      }
      return Number(totalArt.toFixed(2));
    }
  
    //List arts
    object.listArt = function(){
    let artCopy =[];
    for(i in cart){
      item = arts[i];
      itemCopy ={};
      for(p in item){
        itemCopy[p] = Item[p];
      }
      itemCopy.total = Number(item.rate * item.count).toFixed(2);
      artCopy.push(itemCopy);
    }
    return artCopy;
    }
  
  
    return object;
  })();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let butterfly = [];
  
  // function getButterfly(){
   
  //   const getLocal =  localStorage.getItem("items");
  //   const butterflyInArray = JSON.parse(getLocal);
  //   if(butterflyInArray != null){
  //   //  alert("hello");
  //   console.log("hello");
  //   }
  // }
  
  // function kaushikButterfly(){
  //   event.preventDefault();
  //   let butterflyRate = document.getElementById("rateOfButterfly").innerText
  //   let butterflyImage = document.getElementById("butterfly").src;
   
  //   const butterflyValues ={
  //     "image" :butterflyImage ,
  //     "Rate" : butterflyRate
  //   }
  
  //   butterfly.push(butterflyValues);
  //   const butterflyInString = JSON.stringify(butterfly);
  //   localStorage.setItem("items", butterflyInString);
  
  //   // alert("Item carted");
  //   // window.location.href="./../pages/addToCart.html"
  // }
  // getButterfly();
  
  // let doraBuji = [];
  
  // function getDoraBuji(){
   
  //   const localDoraBuji =  localStorage.getItem("items");
  //   const doraBujiInArray = JSON.parse(localDoraBuji);
  //   if(doraBujiInArray != null){
  //   //  alert("hello");
  //   console.log("hello");
  //   }
  // }
  
  // function smileDoraBuji(){
    
  //   let doraBujiRate = document.getElementById("rateOfDoraBuji").innerText
  //   let doraBujiImage = document.getElementById("doraBuji").src;
   
  //   const doraBujiValues ={
  //     "image" :doraBujiRate ,
  //     "Rate" : doraBujiImage
  //   }
  
  //   doraBuji.push(doraBujiValues);
  //   const doraBujiInString = JSON.stringify(doraBuji);
  //   localStorage.setItem("items", doraBujiInString);
  
  //   // alert("Item carted");
  //   // window.location.href="./../pages/addToCart.html"
  // }
  // getDoraBuji();
  
  

    
    
    


