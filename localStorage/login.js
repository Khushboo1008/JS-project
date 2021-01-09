
function myFunc() {
  // var Obj={
  //   username: document.getElementById("username").value,
  //   password: document.getElementById("password").value,
  // }
  // localStorage.setItem('allUserDetails', JSON.stringify(Obj));
  // https://www.c-sharpcorner.com/blogs/store-multiple-values-in-localstorage-apin-in-html-5




  username= document.getElementById("username").value;
  password= document.getElementById("password").value;

  addNewObject(username,password);
}
function addNewObject(username, password){
  let allUserDetails = JSON.parse(localStorage.getItem("allUserDetails") || "[]");
    
  let show = {
    user: username,
    pass: password,
  };
  allUserDetails.push(show);
  // showList = showList.concat(JSON.parse(localStorage.getItem("showList") || "[]"));
  console.log(allUserDetails);
  localStorage.setItem("allUserDetails", JSON.stringify(allUserDetails));
}
