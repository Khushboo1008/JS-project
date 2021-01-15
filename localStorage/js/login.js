function myFunc() {
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  addNewObject(username, password);
}
function addNewObject(username, password) {
  let allUserDetails = JSON.parse(
    localStorage.getItem("allUserDetails") || "[]"
  );

  let currentUser = {
    username: username,
    password: password,
  };

  let loginCheck = JSON.parse(localStorage.getItem("allSignupDetails"));
  for (let i = 0; i < loginCheck.length; i++) {
    if (
      loginCheck[i].username == currentUser.username &&
      loginCheck[i].password == currentUser.password
    ) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      window.location.href = "dashboard.html";
      break;
    }
  }
}
