
$(document).ready(function () {

    var url = "https://morilddata.azurewebsites.net/_api/database/customers"

    var func = function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].CompanyName + "</td>");
            tr.append("<td>" + json[i].CompanyId + "</td>");
            tr.append("<td>" + json[i].ContactPerson + "</td>");
            tr.append("<td>" + json[i].PhoneNumber + "</td>");
            tr.append("<td>" + json[i].Email + "</td>");
            tr.append("<td>" + json[i].Adress + "</td>");
            $('table').append(tr);
        }

        var table = document.getElementById("customers");
        if (table != null) {
            for (var i = 1; i < table.rows.length; i++) {
                table.rows[i].onclick = function () {
                    getItem(this);
                };
            }
        }

        function getItem(request) {
            sessionStorage.setItem("companyName", request.cells[0].innerHTML);
            sessionStorage.setItem("companyId", request.cells[1].innerHTML);
            sessionStorage.setItem("contactPerson", request.cells[2].innerHTML);
            sessionStorage.setItem("phoneNumber", request.cells[3].innerHTML);
            sessionStorage.setItem("email", request.cells[4].innerHTML);
            sessionStorage.setItem("adress", request.cells[5].innerHTML);
            open("showSelectedCustomer.html","_self");
        }
    };

    var authentication = sessionStorage.authentication;
    $.ajax({
      url : url,
      type : 'GET',
      datatype : 'json',
      beforeSend : function(xhr){
        beforeSend(xhr, authentication);
      },
      success : response,
      fail : failFunction
    }).done(func);
    function response (err, response, body) {
      return response;
    }

    function beforeSend(xhr, auth){
        xhr.setRequestHeader('Authorization', 'Basic ' + auth);
    }

    function failFunction(xhr) {
      alert('Failed to download. error:');
    }
});
