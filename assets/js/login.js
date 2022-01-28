let detailList =[];
let loggedUser = [];

function onPageLoad() {
  console.group("onPageLoad");
  const userDetailsInArray = JSON.parse(localStorage.getItem("DETAIL"));
  // for replacing value 
  if(userDetailsInArray !== null) {
    detailList = userDetailsInArray;
  }
  console.groupEnd("onPageLoad");
}
onPageLoad();  

function loggedInUserDetails() {
  console.group("loggedInUserDetails");
  const loggedUserInArray= JSON.parse(localStorage.getItem("LoggedInUser"));
  // for replacing value
  if(loggedUserInArray !== null) {
    loggedUser = loggedUserInArray;   
  }
  console.groupEnd("loggedInUserDetails");
}
loggedInUserDetails();

function submitHandler(event){
  event.preventDefault();
  console.group("submitHandler");
  //1. get input from user
  let userEmail = document.getElementById("emailId").value;
  let Cpassword = document.getElementById("password").value;
  //2. validation

  //3. for checking if the already register
  let functionName = myFunction(userEmail,Cpassword);
  if(functionName){
    loggedUser.push(userEmail);
    //4. set the values in localStorage
    const LoggedUserInString = JSON.stringify(loggedUser);
    localStorage.setItem("LoggedInUser", LoggedUserInString); 
    alert("Success");
    window.location.href="./../pages/sellArts.html"
  }
  else{
    document.getElementById("emailErr").innerText = "Invalid user details";
    return;
  }
  console.groupEnd("submitHandler");    
}
function myFunction(inputEmail,inputPassword) {
  console.group("myFunction");
  // Email and password whether its register
  const registerDetails = JSON.parse(localStorage.getItem("DETAIL"));
  let isExist;
  let lengthOfRegisterDetails = registerDetails.length;
  //get email id and password from the localStorage
  for(let i=0; i < lengthOfRegisterDetails; i++) {
    const userDetail = registerDetails[i];
    const email = userDetail.EmailId;
    const passWord = userDetail.Password;
    //condition for email & password validation
    if(inputEmail === email && inputPassword === passWord){
      isExist =true;
      break;
    }
    else{
      isExist = false;
    }
  }
  console.groupEnd("myFunction");
  console.log(isExist);
  return isExist;
}
