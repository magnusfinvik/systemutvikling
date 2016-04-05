
function ajaxGet(ctrURL , key){
  var getUrl = ctrURL + key;
  var authentication = sessionStorage.user;
  $.ajax({
    url : getUrl,
    type : 'GET',
    datatype : 'json',
    beforeSend : function(xhr){
      beforeSend(xhr, authentication);
    },
    success : postGetResponse,
    fail : failFunction
  }).done(function(data){
      alert(data);
  });
}

function postGetResponse (err, response, body) {
  var statusMessage = document.querySelector('.status')
  if (err) alert(err)
  alert(body)
}

function beforeSend(xhr, auth){
    xhr.setRequestHeader('Authorization', 'Basic ' + auth);
}

function failFunction(xhr) {
  alert('Failed to download. error:');
}
