function getItem(){ 

    const getLocal = localStorage.getItem("items");  
    const itemsInArray = JSON.parse(getLocal); 
   
   

    let noOfItems = itemsInArray.length;
    console.log(noOfItems);
    let myItems = "";

    for(i=0; i < noOfItems; i++){
       
        const item = itemsInArray.Rate;
        myItems = myItems + item;
    }



    const store = document.getElementById("rateOfItem");
    store.innerHTML = myItems;

}
getItem()

console.log("hello");