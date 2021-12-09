function submitHandler() {
  event.preventDefault();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm").value;

  if (password != confirmPassword) {
    document.getElementById("errorMsg").innerHTML = "This is invalid";
    return;
  }
  saveData();
  
 
 
}
function error(){
  let email_id = document.getElementById("emailId").value;
  const register_email = JSON.parse(localStorage.getItem("Detail"))

  let isExist = false;

for (i=0; i<register_email.length; i++){
    const user = register_email[i];
    const email = user.email;
  if(email_id == register_email){
   isExist =true;
   break;
    
  }
  else{
    isExist = false;
  }
  return isExist;
  }
}



let details = [];
function saveData(){
 

  const inputName = document.getElementById("userName").value;
  const emailid = document.getElementById("emailId").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("password").value;
  
const values = {
    Name : inputName,
    Emailid : emailid,
    Password : password,
    Confirm_Password : confirmPassword
}

details.push(values);

const detailsInString = JSON.stringify(details);
localStorage.setItem("Detail", detailsInString); 
error();
getData();
}

function getData(){
 
  const getLocal =  localStorage.getItem("Detail");
  const detailsInArray = JSON.parse(getLocal);
  if(detailsInArray){
    details = detailsInArray;
  }
}
getData();

