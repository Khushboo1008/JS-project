var person = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("greet").innerText = "Hello " + person.username;
let loginCheck = JSON.parse(localStorage.getItem("allSignupDetails"));
function logout() {
  localStorage.setItem("currentUser", "");
  window.location.href = "login.html";
}

function del() {
  for (let i = 0; i < loginCheck.length; i++) {
    if (
      loginCheck[i].username == person.username &&
      loginCheck[i].password == person.password
    ) {
      loginCheck.splice(i, 1);
      console.log(loginCheck);
      localStorage.setItem("allSignupDetails", JSON.stringify(loginCheck));
    }
    window.location.href = "signup.html";
  }
}
