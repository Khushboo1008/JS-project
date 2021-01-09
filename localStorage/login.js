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
    user: username,
    pass: password,
  };

  allUserDetails.push(currentUser);

  localStorage.setItem("allUserDetails", JSON.stringify(allUserDetails));
}
