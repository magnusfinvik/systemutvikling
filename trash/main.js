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
		$orders.append('<li> Company: '+ order.CompanyName +  ' OrderId: ' + order.OrderId + ',  PriorityNumber: ' + order.PriorityNumber + ' Deadline: ' +  order.Deadline + ' ContactPerson: ' + order.ContactPerson + '</li>');
	}

	$.ajax({
		type: 'GET',
		url:'https://morildata.azurewebsites.net/_api/database/orders',
		success: function(orders){
			$.each(orders, function(i, order){
				addOrder(order);
			});
		},
		error:function(){
			alert('error loading');
		}
	});

	$('#add').on('click', function(){

		var order = {
			CompanyName: $CompanyName.val(),
			OrderId: $OrderId.val(),
			PriorityNumber: $PriorityNumber.val(),
			Deadline: $Deadline.val(),
			ContactPerson: $ContactPerson.val(),
		};

		$.ajax({
			type:'POST',
			url:'https://morildata.azurewebsites.net/_api/database/orders',
			data: order,
			success: function(newOrder){
				addOrder(newOrder);
			},
			error: function() {
				alert('error saving');
			}
		});
	});
});
