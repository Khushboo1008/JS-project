function submitForm() {
  let name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  let username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  let email = document.getElementById("email").value;
  localStorage.setItem("email", email);
  let password = document.getElementById("password").value;
  localStorage.setItem("password", password);
  let confirmPassword = document.getElementById("confirm-password").value;
  localStorage.setItem("confirm-password", confirmPassword);
}
