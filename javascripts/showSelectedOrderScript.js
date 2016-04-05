$(function (){
    var title = sessionStorage.getItem("title");
    var priority = sessionStorage.getItem("priority");
    var date = sessionStorage.getItem("date");
    var desc = sessionStorage.getItem("desc");
    var id = sessionStorage.getItem("id");
    var company = sessionStorage.getItem("company");
    var contact = sessionStorage.getItem("contact");

    var splitDate = date.split("/");

    if(splitDate[0].length == 1) {
        splitDate[0] = "0" + splitDate[0]
    }

    if(splitDate[1].length == 1) {
        splitDate[1] = "0" + splitDate[1]
    }

    var convertedDate = splitDate.reverse().join("-");


    var orders = ('#orders');
    var CompanyName = ('#CompanyName');
    var CompanyId = ('#CompanyId');
    var OrderId = ('#OrderId');
    var Headline = ('#Headline');
    var PriorityNumber = ('#PriorityNumber');
    var DateCreated = ('#DateCreated');
    var Deadline = ('#Deadline');
    var ContactPerson = ('#ContactPerson');
    var Description = ('#Description');

    $('input[name="Headline"]').val(title)
    //$('select[name^="' + company + '"] option:selected').attr("selected", "selected")
    //$('#priorityButtons').prop("checked", true);
    $('#datepicker').val(convertedDate);
    $('input[name="ContactPerson"]').val(contact);
    $("#descBox").val(desc);

    function addOrder(order) {
        orders.append('<li> Headline:' + order.Headline +  'Company: '+ order.CompanyName +  ' CompanyId: ' + order.CompanyId + '  PriorityNumber: ' + order.PriorityNumber + ' Deadline: ' +  order.Deadline + ' ContactPerson: ' + order.ContactPerson + 'Description' + order.Description +  '</li>');
    }
    $('#add').on('click', function(){
        var priority;
        for(var i=0; i< priorityButtons.length; i++){
            if(priorityButtons[i].checked){
                priority = priorityButtons[i].value;
                break;
            }
        }
        var order = {
            CompanyName: CompanyName.val,
            PriorityNumber: priority,
            Deadline: Deadline.val,
            ContactPerson: ContactPerson.val,
            Description: Description.val,
        };
        $.put('https://morilddata.azurewebsites.net/_api/database/orders/' + id, JSON, function() {
        });
    });
});
