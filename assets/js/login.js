let detailList =[];
let loggedUser = [];
function onPageLoad(){
  console.group("onPageLoad")
    const userDetailsInArray = JSON.parse(localStorage.getItem("Detail"));
   

    if(userDetailsInArray !== null){
        detailList = userDetailsInArray;
       
    }

console.groupEnd("onPageLoad")    
console.log(detailList);
}
onPageLoad();  

function loggedInUserDetails() {

  console.group("loggedInUserDetails");

  const loggedUserInArray= JSON.parse(localStorage.getItem("LoggedInUser"));
  

  if(loggedUserInArray !== null){
    loggedUser = loggedUserInArray;
     
  }
  console.groupEnd("loggedInUserDetails");
}
loggedInUserDetails();

function submitHandler(event){
    event.preventDefault();
  console.group("submitHandler");
    let userEmail = document.getElementById("emailId").value;
    console.log(userEmail);
    let Cpassword = document.getElementById("password").value;
    console.log(Cpassword);
    

  let functionName = myFunction(userEmail,Cpassword);
  console.log(functionName);
  if(functionName){
   
   loggedUser.push(userEmail);
   console.log(loggedUser);
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
 


function myFunction(inputEmail,inputPassword){
 console.group("myFunction");

  const registerDetails = JSON.parse(localStorage.getItem("Detail"));
  let isExist = false;

 let lengthOfRegisterDetails = registerDetails.length;

for (let i=0; i < lengthOfRegisterDetails; i++){
    const userDetail = registerDetails[i];
    const email = userDetail.EmailId;
    const passWord = userDetail.Password;
  if(inputEmail === email && inputPassword === passWord){
   isExist =true;
   break;
  }
  else{
    isExist;
    console.log(isExist);
  }
  }
  console.groupEnd("myFunction");
  console.log(isExist);
  return isExist;
}


