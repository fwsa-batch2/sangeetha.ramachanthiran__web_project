let details = [];
function getData(){
 
  const getLocal =  localStorage.getItem("Detail");
  const detailsInArray = JSON.parse(getLocal);
  if(detailsInArray != null){
    details = detailsInArray;
  }
}
function submitHandler() {
  event.preventDefault();
  const inputName = document.getElementById("userName").value;
  const emailId = document.getElementById("emailId").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm").value;
  
const values = {
    Name : inputName,
    EmailId : emailId,
    Password : password,
    Confirm_Password : confirmPassword
}

if (password != confirmPassword) {

  document.getElementById("errorMsg").innerHTML = "This is invalid";

  return;
}
  let myError = error(emailId);
  console.log(myError);
  if(myError){
    alert("Already registered");
    return;
  }
  details.push(values);
  const detailsInString = JSON.stringify(details);
  localStorage.setItem("Detail", detailsInString); 
  
  
  alert("Successfully Registered")
  window.location.href="./../pages/login.html"
  
  
  }
  
  getData();
  function error(myParameter){
    console.group("error");
    const registerEmail = JSON.parse(localStorage.getItem("Detail"));


    let isExist = false;
  if(registerEmail != null){
    for (i=0; i<registerEmail.length; i++){
      const user = registerEmail[i];
      const email = user.EmailId;
    if(myParameter == email){
     isExist =true;
     
     break;
    
    }
    else{
      isExist = false;
    }
    
    }
  }
    console.groupEnd("error");
    return isExist;
    
  }
  