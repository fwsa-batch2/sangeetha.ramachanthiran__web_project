let detailList =[];

function onPageLoad(){
    const userDetailsInArray= JSON.parse(localStorage.getItem("Detail"));
    // console.log(userDetailsInArray);

    if(userDetailsInArray !== null){
        detailList = userDetailsInArray;
       
    }

    
console.log(detailList);
}
onPageLoad();  



function submitHandler(){
    event.preventDefault();
    
    let userEmail = document.getElementById("emailId").value;
    console.log(userEmail);
    let Cpassword = document.getElementById("password").value;
    console.log(Cpassword);
    

  let functionName = myFunction(userEmail,Cpassword);
  console.log(functionName);
  if(functionName){
    alert("Success");
    
    
    window.location.href="./../index.html"

  }
  else{
    // alert("Invalid")
    document.getElementById("emailErr").innerText = "Invalid user details";
    return;
  }
   

    
}
 
console.log("hello");





function myFunction(inputEmail,inputPassword){
  const registerDetails = JSON.parse(localStorage.getItem("Detail"));
  let isExist = false;



for (i=0; i<registerDetails.length; i++){
    const userDetail = registerDetails[i];
    const email = userDetail.EmailId;
    const passWord = userDetail.Password;
  if(inputEmail === email && inputPassword === passWord){
   isExist =true;
   
   break;
  
  }
  else{
    isExist = false;
  }
  
  }
  console.log(isExist);
  return isExist;
  
}


