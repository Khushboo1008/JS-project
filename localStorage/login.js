function myFunc() {
  let c = document.querySelector("#username").value;
  localStorage.setItem("username", c);
  let p = document.querySelector("#password").value;
  localStorage.setItem("password", p);
}
