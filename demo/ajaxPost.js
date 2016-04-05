function ajaxPost(ctrURL, dataToSend){
  var authentication = sessionStorage.user;
  $.ajax({
    url : ctrURL,
    type : 'post',
    datatype : 'json',
    data: dataToSend,
    beforeSend : function(xhr){
      beforeSend(xhr, authentication);
    },
    success : postResponse,
    fail : failFunction
  }).done(function(data){
      alert(data);
  });
}

function postResponse () {
  // legg til en måte å si ifra at det er lagt til eller ikke
  alert("success");
}

function beforeSend(xhr, auth){
    xhr.setRequestHeader('Authorization', 'Basic ' + auth);
}

function failFunction(xhr) {
  alert('Failed to upload data. error:');
}
