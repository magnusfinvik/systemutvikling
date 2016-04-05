function ajaxLogin(username, authentication){
  sessionStorage.setItem("authentication", authentication);
  sessionStorage.setItem("user", username);
  var loginUrl = "https://morilddata.azurewebsites.net/_api/database/orders";
  $.ajax({
    url : loginUrl,
    type : 'GET',
    datatype : 'json',
    beforeSend : function(xhr){
      beforeSend(xhr, authentication);
    },

    //legg til mere fornuftig tilbakemelding til brukeren.
    statusCode: {
      401:function(){
        var status = document.getElementById("status");
        status.textContent = 'ERROR: Wrong username and/or password.'
      }
    },
    success :  successfulLogin,
    fail : failFunction
  }).done(function(data){
      //alert(data);
  });
}

function successfulLogin () {
  open("displayProjects.html","_self");
}

function beforeSend(xhr, auth){
    xhr.setRequestHeader('Authorization', 'Basic ' + auth);
}

function failFunction(xhr) {
  alert('Failed to download. error:');
}
