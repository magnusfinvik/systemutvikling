function validateForm() {
    var headline = document.forms["formAddNew"]["Headline"].value;
    var contactPerson = document.forms["formAddNew"]["ContactPerson"].value;
    var description = document.forms["formAddNew"]["Description"].value;


    // companyname check!!!
    if (headline == null || headline == "") {
        alert("Companyname must be filled out");
        return false;
    }
    // contactperson check!!!
    else if (contactPerson == null || contactPerson == "") {
            alert("You must add a contactperson");
        return false;
    }

    // description check!!!
    else if (description == null || description == "") {
        alert("Description must be filled out");
        return false;
    }
    return true;
}
