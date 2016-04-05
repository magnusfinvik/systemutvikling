

    function validateForm() {
        var name = document.forms["addNewUser"]["username"].value;
        var password = document.forms["addNewUser"]["password"].value;
        var email = document.forms["addNewUser"]["email"].value;
        var phone_number = document.forms["addNewUser"]["phone_number"].value;

        // checks if there is a name filled out
        if (name == null || name == "") {
            alert("Name must be filled out");
            return false;
        }
        // password checks!!!
        else if (password == null || password == "") {
                alert("Password can't be null");
            return false;
        }
        else if(password.length < 7){
            alert("Password must be at least 7 characters");
            return false;
        }
        else if(password.search(/[a-z]/) < 0){
            alert("Your password must contain at least one lowercase letter.");
            return false;
        }

        else if(password.search(/[A-Z]/) < 0){
            alert("Your password must contain at least one uppercase letter.");
            return false;
        }

        else if(password.search(/[0-9]/) < 0){
            alert("Your password must contain at least one digit.");
            return false;
        }

        else if(password.search( /[\@\#\$\%\^\&\*\(\)\_\+\!\-]/) < 0){
            alert("Your password must contain at least one special character (@ # $ % ^ & * ( ) _ + ! -).");
            return false;
        }

        // email checks!!!
        else if (email == null || email == "") {
            alert("Email must be filled out");
            return false;
        }

        else if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) < 0){
            alert("Email is not correctly formated");
            return false;
        }

        // phonenumber checks!!!
        else if (phone_number == null || phone_number == "") {
            alert("Phone number must be filled out");
            return false;
        }

        else if (phone_number.length != 8){
            alert("phone number must be 8 digits");
            return false;
        }

    }
