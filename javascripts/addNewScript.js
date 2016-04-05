

$(function (){
	var url = "https://morilddata.azurewebsites.net/_api/database/orders"
	var authentication = sessionStorage.authentication;
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

//this function adds company names to the dropdown list
	var func = function(json){
		var companies = ('#CompanyName');
		var option;
		for(var i = 0; i < json.length; i++){
			option = $('</option>');
			option.append('<option>' + json[i].CompanyName + '</option>');
			$('CompanyName').append(option);
		}
	}

function addOrder(order) {
	orders.append('<li> Headline:' + order.Headline +  'Company: '+ order.CompanyName +  ' CompanyId: ' + order.CompanyId + '  PriorityNumber: ' + order.PriorityNumber
									+ ' Deadline: '	+  order.Deadline + ' ContactPerson: ' + order.ContactPerson + 'Description' + order.Description +  '</li>');
}

// this bit adds the order to the database through post method.
$('#add').on('click', function(){
	var priority;
	var radioValue = $("input[name='optradio']:checked").val();
	var companyName = $("#CompanyName").val();

	var order = {
		CompanyName: companyName,
		PriorityNumber: radioValue,
		Deadline: Deadline.val,
		ContactPerson: ContactPerson.val,
		Description: Description.val,
	};
	$.ajax({
		url : url,
		type : 'post',
		datatype : 'json',
		data: order,
		beforeSend : function(xhr){
			beforeSend(xhr, authentication);
		},
		success : alert("funker det"),
		fail : failFunction
	}).done(function(data){
			alert(data);
	});
});

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
			alert(body + "   "+ response);
		}

		function beforeSend(xhr, auth){
				xhr.setRequestHeader('Authorization', 'Basic ' + auth);
		}

		function failFunction(xhr) {
			alert('Failed to download. error:');
		}

});
