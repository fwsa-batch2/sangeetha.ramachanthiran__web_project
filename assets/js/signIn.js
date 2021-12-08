function submitHandler() {
  event.preventDefault();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm").value;

  if (password != confirmPassword) {
    document.getElementById("errorMsg").innerHTML = "This is invalid";
    return;
  }
 
  saveData();
  window.location.href = "file:///home/sangeetharamachanthiran/smileyworldartapp-ui/index%20.html";
  



let details = [];


function error(){
  let email_id = document.getElementById("emailId").value;

  if(details = email_id){
    document.getElementById("emailErr").innerHTML = "This email is already register";
    return;
    
  }
}


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

