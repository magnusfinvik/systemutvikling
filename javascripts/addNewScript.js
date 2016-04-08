

$(function (){
	var urlGetCompany = "https://morilddata.azurewebsites.net/_api/database/customers"
	var urlPostOrder = "https://morilddata.azurewebsites.net/_api/database/orders"
	var authentication = sessionStorage.authentication;
	var orders = ('#newProjectForm');
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
		var companies = $('#CompanyName');

		var companyList = [];

		for(var i = 0; i < json.length; i++){
			var isNew = true;
			for (var j = 0; j < companyList.length; j++){
				if(json[i].CompanyName == companyList[j]){
					isNew = false;
				}
			}
			if(isNew){
			companies.append('<option>' + json[i].CompanyName + '</option>');
			companyList[i] = json[i].CompanyName;
		}
		}
	}

function addOrder(order) {
	orders.append('<li> Headline:' + order.Headline +  'Company: '+ order.CompanyName +  ' CompanyId: ' + order.CompanyId + '  PriorityNumber: ' + order.PriorityNumber
									+ ' Deadline: '	+  order.Deadline + ' ContactPerson: ' + order.ContactPerson + 'Description' + order.Description +  '</li>');
}

// this bit adds the order to the database through post method.
$('#add').on('click', function(){
	var priority;
	var priorityNumber = $("#PriorityNumber").val();
	var companyName = $("#CompanyName").val();
	var deadline = $("#datepicker").val();
	var contactPerson = $("#contactPerson").val();
	var description = $("#description").val();
	var headline =$("#headline").val();

	var order = {
		Headline: headline,
		CompanyName: companyName,
		PriorityNumber: priorityNumber,
		Deadline: deadline,
		ContactPerson: contactPerson,
		Description: description,
	};
	$.ajax({
		url : urlPostOrder,
		type : 'post',
		datatype : 'json',
		data: order,
		beforeSend : function(xhr){
			beforeSend(xhr, authentication);
		},
		fail : failFunction
	}).done(function(data){
			alert(data);
	});
});

	$.ajax({
		url : urlGetCompany,
		type : 'GET',
		datatype : 'json',
		beforeSend : function(xhr){
			beforeSend(xhr, authentication);
		},
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
