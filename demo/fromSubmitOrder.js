$('#orderForm').submit(function ev() {
  ev.preventDefault();
  if(validateForm()){
    var order = $('orderForm').serialize();
    ajaxPost("https://localhost:58031/_api/database/orders", "", "YWRtaW46MjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzM=",order);
  }
}
});
