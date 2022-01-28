let details = [];
function getValueFromLocal(){
  // get localstorage
  const getLocalStorage =  localStorage.getItem("DETAIL");
  const detailsInArray = JSON.parse(getLocalStorage);
  // for replacing value
  if(detailsInArray != null){
    details = detailsInArray;
  }
}
function submitHandler(event) {
  event.preventDefault();
  //1. get values from user
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
  //2. password validation
  if (password != confirmPassword) {
  document.getElementById("errorMsg").innerHTML = "This is invalid";
  return;
  }
  //3. email existing validation
  let myError = error(emailId);
  console.log(myError);
  if(myError){
    alert("Already registered");
    return;
  }
  //4. set values in localstorage
  details.push(values);
  const detailsInString = JSON.stringify(details);
  localStorage.setItem("DETAIL", detailsInString); 
  alert("Successfully Registered")
  window.location.href="./../index.html"
  }
  getValueFromLocal();

function error(myParameter){
  console.group("error");
  //1. get value from localStorage
  let getItemForEmail = localStorage.getItem("DETAIL");
  let registerEmail = JSON.parse(getItemForEmail);
  //2. Condition when localStorage is null
  let lengthOfRegisterEmail = registerEmail != null ? registerEmail.length : 0; 
  let isExist;
  //3. validation

  //4. get user input emailId from localStorage
  if(registerEmail != null) {
    for (let i = 0; i < lengthOfRegisterEmail; i++) {
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
  