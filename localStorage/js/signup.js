function submitForm() {
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

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
