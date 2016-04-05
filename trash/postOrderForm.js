
function handleFormOrder(arr) {
    var order = {
        CompanyName : arr['CompanyName'].value,
        Headline : arr['headline'].value,
        PriorityNumber : arr['PriorityNumber'],
        ContactPerson : arr['contactPerson'].value,
        Deadline : arr['datepicker'].value,
        Description : arr['description'].value
    }
    alert(order);
    ajaxPost("https://morilddata.azurewebsites.net/_api/database/orders", "", "YWRtaW46MjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzM=", order);

}
