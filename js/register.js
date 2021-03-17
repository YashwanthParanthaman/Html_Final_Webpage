// Name: Yashwanth Paranthaman
// Student Id: 101282474

var userList = [];
//localStorage.clear();
if ("userList" in localStorage){
  userList = JSON.parse(localStorage.getItem("userList"));
  console.log(userList);
}else{
  userList = [];
}

function user(name, password,email, phone, address){
    this.name = name;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.address = address;
};


function validateUser(){
  //e.preventDefault();
  console.log("validating the inputs");
  let name = document.forms["userinfo"]["name"].value;
  let password = document.forms["userinfo"]["password"].value;
  let confirmPassword = document.forms["userinfo"]["confirmPassword"].value;
  let email = document.forms["userinfo"]["email"].value;
  let phone = document.forms["userinfo"]["phone"].value;
  let address = document.forms["userinfo"]["address"].value;

  if(password != confirmPassword){
    console.log("Password Mismatch");
    return false;
  }
  else{
      const newUser = new user(name, password,email, phone, address);
      userList.push(newUser);
      console.log(userList);
      localStorage.setItem("userList", JSON.stringify(userList));
  }
}

function loginUser(){
  var userFound = false;
  let username = document.forms["login"]["username"].value;
  let password = document.forms["login"]["password"].value;
  console.log(username);
  console.log(password);
  for(var i = 0; i < userList.length; i++){
    if(username == userList[i].email && password == userList[i].password){
      console.log(userList[i].email);
      userFound = true;
      localStorage.setItem("username",username);
    }
  }
  console.log(userFound);
  return userFound;
}
