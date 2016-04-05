
function handleFormOrder(arr) {
  var order = {
    CompanyName : arr['CompanyName'].value,

  }
  ajaxPost("https://morilddata.azurewebsites.net/_api/database/orders", "", "YWRtaW46MjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzM=", order);

}
