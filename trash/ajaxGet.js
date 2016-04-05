function ajaxGet(ctrURL , key, authentication){
    var getUrl = ctrURL + key;
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

function postGetResponse () {
    open("displayProjects.html","_self");
}

function beforeSend(xhr, auth){
    xhr.setRequestHeader('Authorization', 'Basic ' + auth);
}

function failFunction(xhr) {
    alert('Failed to download. error:');
}
