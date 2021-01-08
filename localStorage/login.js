function myFunc() {
  var myObj={
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  }
  localStorage.setItem('allUserDetails', JSON.stringify(myObj));
}
