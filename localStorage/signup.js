function submitForm() {
  // let arr = "";
  if (localStorage.getItem("allUserDetails", "{}")) {
    var myObj = {
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirm-password").value,
    };
    // arr += myObj;
    // let newObj = JSON.parse(myObj);
    // console.log(newObj);
    // localStorage.setItem("allUserDetails", JSON.stringify(arr));
  }
}
