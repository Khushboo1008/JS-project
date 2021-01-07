function myFunc() {
  let username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  let password = document.getElementById("password").value;
  localStorage.setItem("password", password);
}
