function submitForm() {
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  if (password.length < 8 || confirmPassword.length < 8) {
    window.alert("Password should contain more than 8 characters.");
  }
  if (password != confirmPassword) {
    window.alert("Password didn't match");
  }
  if (name.length == 0 || email.length == 0 || username.length == 0) {
    window.alert("Please fill all details.");
  }
  if (!email.includes("@")) window.alert("Invalid email");
  if (email[email.length - 1] == "@") window.alert("Invalid email");
  addNewUser(name, username, email, password, confirmPassword);
}

function addNewUser(name, username, email, password, confirmPassword) {
  let allSignupDetails = JSON.parse(
    localStorage.getItem("allSignupDetails") || "[]"
  );

  let currentSignup = {
    name: name,
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  allSignupDetails.push(currentSignup);
  localStorage.setItem("allSignupDetails", JSON.stringify(allSignupDetails));
}
