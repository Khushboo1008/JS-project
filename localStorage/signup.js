function submitForm() {
  var myObj={
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    name: document.getElementById("name").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirm-password").value,
  }
  localStorage.setItem('allUserDetails', JSON.stringify(myObj));
}
