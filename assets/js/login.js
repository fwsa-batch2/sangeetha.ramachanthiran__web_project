function submitHandler(){
    event.preventDefault();
    
    let userEmail = document.getElementById("emailId");
    let password = document.getElementById("password");

    let userValue = {
        emailId = userEmail,
        passWord = password
    }
    const localName = JSON.parse(localStorage.getItem("Detail"));
    for(i=0; i< localName.length; i++){
        const store = localName[i];
        if(userValue != localName){
            document.getElementById("invalidMsg").innerHTML = "Not Registered";
        }
    }
}