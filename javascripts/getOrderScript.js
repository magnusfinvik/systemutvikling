
$(function (){
    var url = "https://morilddata.azurewebsites.net/_api/database/orders"
    var $OrderId = $('#OrderId');

    $('#tutorial').on('click', function(){
        alert('Add ";" between searchwords to search among multiple tags (No space)')
    });

    $('#getOrder').on('click', function(){
        var order = {
            OrderId: $OrderId.val(),
        };

        var input = order.OrderId;
        var inputSplit = input.split(";")
        $('table').find("tr:not(:first)").remove();

        var func = function (json, order) {

            for(var h = 0; h < inputSplit.length; h++){
                var search = inputSplit[h];

                var tr;
                for (var i = 0; i < json.length; i++) {
                    var headline = json[i].Headline;
                    var priorityNum = json[i].PriorityNumber;
                    var desc = json[i].Description;
                    var orderID = json[i].OrderId;
                    var company = json[i].CompanyName;
                    var contact = json[i].ContactPerson;

                    var date = new Date(json[i].Deadline);

                    date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
                    tr = $('<tr/>');
                    tr.append("<td>" + headline + "</td>");
                    tr.append("<td>" + priorityNum + "</td>");
                    tr.append("<td>" + date + "</td>");
                    tr.append("<td>" + desc + "</td>");
                    tr.append("<td>" + orderID + "</td>");
                    tr.append("<td>" + company + "</td>");
                    tr.append("<td>" + contact + "</td>");

                    //PriorityNumber and CompanyName suppressed because they're not working properly
                    //at the moment.
                    //|| json[i].PriorityNumber == null
                    //|| json[i].CompanyName == null
                    if(json[i].Headline == null
                        || date == null || json[i].Description == null
                        || json[i].OrderId == null
                        || json[i].ContactPerson == null){
                            console.log("Skipping object with null value.")
                        } else {
                            headlineLower = headline.toLowerCase();
                            descLower = desc.toLowerCase();
                            //companyLower = company.toLowerCase();
                            contactLower = contact.toLowerCase();

                            if(headlineLower.indexOf(search) > -1){
                                $('table').append(tr);
                                //} else if(priorityNum == search){
                                //    $('table').append(tr);
                            } else if(date.indexOf(search) > -1){
                                $('table').append(tr);
                            } else if(descLower.indexOf(search) > -1){
                                $('table').append(tr);
                            } else if(orderID == search){
                                $('table').append(tr);
                                //} else if(companyLower.indexOf(search) > -1){
                                //    $('table').append(tr);
                            } else if(contactLower.indexOf(search) > -1){
                                $('table').append(tr);
                            }
                        }
                    }
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

                var div = document.getElementById("resultsNumber");
                var res = table.rows.length - 1;
                div.textContent = "Found " + res + " results."

            }

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
    });
