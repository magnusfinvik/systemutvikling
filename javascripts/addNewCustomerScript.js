function validateForm() {
    var company = document.forms["formAddNewCustomer"]["CompanyName"].value;
    var contactPerson = document.forms["formAddNewCustomer"]["ContactPerson"].value;
    var phoneNumber = document.forms["formAddNewCustomer"]["PhoneNumber"].value;
    var email = document.forms["formAddNewCustomer"]["Email"].value;
    var adress = document.forms["formAddNewCustomer"]["Adress"].value;


    // companyname check!!!
    if (company == null || company == "") {
        alert("Companyname must be filled out");
        return false;
    }
    // contactperson check!!!
    else if (contactPerson == null || contactPerson == "") {
            alert("You must add a contactperson");
        return false;
    }

    // phonenumber check!!!
    else if (phoneNumber == null || phoneNumber == "") {
        alert("Description must be filled out");
        return false;
    }

    else if (phoneNumber.length != 8){
        alert("phonenumber must be 8 digits");
        return false;
    }
}
