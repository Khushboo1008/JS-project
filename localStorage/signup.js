function submitForm() {
  let username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  let password = document.getElementById("password").value;
  localStorage.setItem("password", password);
  let confirmPassword = document.getElementById("confirm-password").value;
  localStorage.setItem("confirm-password", confirmPassword);
  let email = document.getElementById("email").value;
  localStorage.setItem("email", email);
}
