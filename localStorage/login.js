function myFunc() {
  let c = document.getElementById("username").value;
  localStorage.setItem("username", c);
  let p = document.getElementById("password").value;
  localStorage.setItem("password", p);
}
