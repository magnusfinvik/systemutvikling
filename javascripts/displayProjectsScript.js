

$(document).ready(function () {


    var url = "https://morilddata.azurewebsites.net/_api/database/orders"

        var func = function (json) {
        //alert(sessionStorage.getItem("user"))

        var tr;
        for (var i = 0; i < json.length; i++) {
            var date = new Date(json[i].Deadline);
            date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
            var desc =  json[i].Description;
            tr = $('<tr/>');
            tr.append("<td>" + json[i].Headline + "</td>");
            tr.append("<td>" + json[i].PriorityNumber + "</td>");
            tr.append("<td>" + date + "</td>");
            tr.append("<td>" + desc + "</td>");
            tr.append("<td>" + json[i].OrderId + "</td>");
            tr.append("<td>" + json[i].CompanyName + "</td>");
            tr.append("<td>" + json[i].ContactPerson + "</td>");
            $('table').append(tr);
        }

        var table = document.getElementById("orders");
        if (table != null) {
            for (var i = 1; i < table.rows.length; i++) {
                table.rows[i].onclick = function () {
                    getItem(this);
                };
            }
        }

        function getItem(request) {
            sessionStorage.setItem("title", request.cells[0].innerHTML);
            sessionStorage.setItem("priority", request.cells[1].innerHTML);
            sessionStorage.setItem("date", request.cells[2].innerHTML);
            sessionStorage.setItem("desc", request.cells[3].innerHTML);
            sessionStorage.setItem("id", request.cells[4].innerHTML);
            sessionStorage.setItem("company", request.cells[5].innerHTML);
            sessionStorage.setItem("contact", request.cells[6].innerHTML);
            open("showSelectedOrder.html","_self");
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
