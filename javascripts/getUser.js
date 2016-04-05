var user = sessionStorage.getItem("user")
var userBox = document.getElementById("userBox")
userBox.textContent = '  '+ "Logged in as " + user;
