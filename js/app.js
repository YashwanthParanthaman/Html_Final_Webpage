var email = localStorage.getItem("username");
var name = "";
var phone = "";
var address = "";

userList = JSON.parse(localStorage.getItem("userList"));

function user(name, password,email, phone, address){
    this.name = name;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.address = address;
};

for(var i=0; i < userList.length; i++){
  if(email == userList[i].email){
    document.getElementById("name").value = userList[i].name;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = userList[i].phone;
    document.getElementById("address").value = userList[i].address;
    document.getElementById("password").value = userList[i].password;
  }
}

function changeDetails(){
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  address = document.getElementById("address").value;
  password = document.getElementById("password").value;
  deleteProfile();
  const newUser = new user(name, password,email, phone, address);
  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList));
}
  function changePassword(){
    document.getElementById("password").disabled = false;
    document.getElementById("confirmPassword").disabled = false;
  }

  function deleteProfile(){
    for(var i = 0; i < userList.length; i++){
      if(email == userList[i].email){
        userList.splice(i,1);
        localStorage.setItem("userList", JSON.stringify(userList));
      }
  }
}
