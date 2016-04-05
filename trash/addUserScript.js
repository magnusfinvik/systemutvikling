
<script type='text/javascript' src="http://code.jquery.com/jquery-1.12.1.js"/>
<link href="https://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js">

$(document).ready(function (){
    var url = "https://morilddata.azurewebsites.net/_api/database/users";

    var func = function (json){
        var tr;
        for(var i = 0; i < json.length; i++){
            email = users.getName() + "/" + users.getPhone() + "/" + users.getEmail();
            var desc = json[i].Description;
            tr = $('<tr/>');
            tr.append("<td>" + json[i].Name + ("</td>");
            tr.append("<td>" + json[i].Phone + ("</td>");
            tr.append("<td>" + json[i].Email + ("</td>");
            $('table').append(tr);
        }
    };
    $.get(url).then(func);
});
