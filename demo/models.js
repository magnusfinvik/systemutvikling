function orderModelToJson (companyId, companyName, headline, priorityNumber, contactPerson, person, dateCreated, deadline, description){
  var order = {
    CompanyId : companyId,
    CompanyName : companyName,
    Headline : headline,
    PriorityNumber : priorityNumber,
    ContactPerson : contactPerson,
    Person : person,
    DateCreated : dateCreated,
    Dealine : deadline,
    Description : description
  }
  return order;
}

function userModelToJson (username, password, email, phoneNumber){
  var user = {
    username: username,
    password: password,
    email:email,
    phone_number: phoneNumber
  }
  return user;
}

function customerModelToJson (companyName, phoneNumber, email, adress, contactPerson){
  var customer = {
    CompanyName : companyName,
    PhoneNumber : phoneNumber,
    Email : email,
    Adress : adress,
    ContactPerson : contactPerson
  }
  return customer;
}
