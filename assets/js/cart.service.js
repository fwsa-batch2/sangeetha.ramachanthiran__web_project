class CartService {


    static removeItem(index){
        let localName = localStorage.getItem("cartItem");
        const localInArray = JSON.parse(localName); 
        localInArray.splice(index,1);
        console.log(localInArray);
        let stringify = JSON.stringify(localInArray);
        localStorage.setItem("cartItem",stringify);
    }
}