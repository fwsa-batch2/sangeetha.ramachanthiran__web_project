function clickHandler() {
    event.preventDefault();
    let input = prompt(`Enter emailId`);

    let functionName = loggedUserDetails(input);

    
    if(functionName){
        return null;
    }
    else{
        window.location.href="./../pages/login.html"
    }

}

function loggedUserDetails(userId){
event.preventDefault();
const userDetails = JSON.parse(localStorage.getItem("LoggedInUser"));
  let isExist = false;

  


for (i=0; i<userDetails.length; i++){
    const logged = userDetails[i];
    const userEmail = logged.EmailId;
    
  if(userId === userEmail){
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