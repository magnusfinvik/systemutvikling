$(function(){
  sessionStorage.clear();
  var usernameBox = $('#username');
  var passwordBox = $('#password');

  $('#loginButton').on('click', function(){
    var status = document.getElementById("status")

    var username = usernameBox.val()
    var password = passwordBox.val()
    var passhash = CryptoJS.MD5(password).toString();
    var passhash2 = btoa(username+":"+passhash)

    ajaxLogin(username, passhash2);

  });

});
