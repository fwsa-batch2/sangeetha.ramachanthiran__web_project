function loggedInUserDetails() {

    console.group("loggedInUserDetails");
  
    const loggedUserInArray= JSON.parse(localStorage.getItem("LoggedInUser"));
    
  
    if(loggedUserInArray == null){
      alert("Please login")
       
    }
    console.groupEnd("loggedInUserDetails");
  }