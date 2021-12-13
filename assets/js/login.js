function submitHandler(){
    event.preventDefault();
    
    let userEmail = document.getElementById("emailId").value;
    
    let password = document.getElementById("password").value;

    let localName = JSON.parse(localStorage.getItem("Detail"));


    if(localName != null){
        for(let i=0; i<localName.length; i++){
            if(localName[i].EmailId != userEmail){
                alert("Not Registered");
                break;
            }
            else{
                alert("Hasan");
             window.location.href="../index.html";
             break;
            }
        }
    }
    else{
        alert("Please Register ");
    }
}


