function getAuhtentication() {
  sessionStorage.setItem("user", "adrian");
  if(sessionStorage.user === "undefined"){
    alert("user is not logged inn");
  }else{
    return sessionStorage.user;
  }
}
