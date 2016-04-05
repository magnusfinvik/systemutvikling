$(function (){

	var $orders = $('#orders');
	var $CompanyName = $('#CompanyName');
	var $CompanyId = $('#CompanyId');
	var $OrderId = $('#OrderId');
	var $PriorityNumber = $('#PriorityNumber');
	var $DateCreated = $('#DateCreated');
	var $Deadline = $('#Deadline');
	var $ContactPerson = $('#ContactPerson');
	var $Description = $('#Description');


	function addOrder(order) {
		$orders.append('<li> Company: '+ order.CompanyName +  ' CompanyId: ' + order.CompanyId + '  PriorityNumber: ' + order.PriorityNumber + ' Deadline: ' +  order.Deadline + ' ContactPerson: ' + order.ContactPerson + 'Description:' + order.Description +  '</li>');
	}

	// this bit adds the project to database
	$('#add').on('click', function(){
		alert('Order was saved to database');

			var order = {
				CompanyName: $CompanyName.val(),
				CompanyId: $CompanyId.val(),
				PriorityNumber: $PriorityNumber.val(),
				Deadline: $Deadline.val(),
				ContactPerson: $ContactPerson.val(),
				Description: $Description.val(),
			};

			$.ajax({
				type:'POST',
				url:'https://morilddata.azurewebsites.net/_api/database/orders',
				data: json,
				success: function(order){
					 addOrder(newOrder);
				},
				error: function() {
					alert('error saving');
				}
			});
		});
});
