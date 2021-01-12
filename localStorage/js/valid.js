function valid() {
  let loginCheck = JSON.parse(localStorage.getItem("allSignupDetails"));
  console.log(loginCheck[0].name);
}
