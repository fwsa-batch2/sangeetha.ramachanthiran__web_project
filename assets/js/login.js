function submitHandler(){
    event.preventDefault();
    
    let userEmail = document.getElementById("emailId");
    let password = document.getElementById("password");

    // const userValue = {
    //     "emailId" : userEmail,
    //     "passWord" : password
    // }
    // console.log("userEmail");
//     
    
}


function errorFunction(){
    const localName = JSON.parse(localStorage.getItem("Detail"));

    for(i=0; i< localName.length; i++){
        const storeData = localName[i];
        const email = storeData.userEmail;
        if(userValue != storeData){ 
            document.getElementById("invalidMsg").innerHTML = "Not Registered";
            alert("Not Registered");
        }
        else{
           
        }
    }
}