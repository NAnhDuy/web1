function getInfo() {
    var yourname = document.getElementById("yourname").value;
    var note = document.getElementById("note").value;
    var message = document.getElementById("message").value;


    var dateControl = document.getElementById("daytogo");
    // Dinh dang cua thoi gian DAYTOGO mac dinh la la yy-mm-dd nen ta co    
    var date = dateControl.value.split("-");
    var day = (date[2]);
    var month = (date[1]) - 1;
    var year = (date[0]);

    var today, someday;
    today = new Date();
    someday = new Date();
    someday.setFullYear(year, month, day);

    if (someday < today) {
        document.getElementById("errorday").innerHTML = "Please select Deliver date from today.";
    } else {
        document.getElementById("errorday").innerHTML = "";
    }




    // check yourname
    if (yourname == "" || yourname.length > 100) {
        document.getElementById("errorname").innerHTML = "Please fill out your name.";
        if (yourname.length > 100) { document.getElementById("errorname").innerHTML = "Your name should not exceed 100 characters."; }
    } else {
        document.getElementById("errorname").innerHTML = "";
    }

    // check note
    if (note == "" || note.length > 30) {
        document.getElementById("errornote").innerHTML = "Please fill out your Address.";
        if (note.length > 30) { document.getElementById("errornote").innerHTML = "Address should not exceed 30 characters."; }
    } else {
        document.getElementById("errornote").innerHTML = "";
    }


    // check message
    if (message == "" || message.length > 500) {
        document.getElementById("errormess").innerHTML = "please for resending the message.";
        if (message.length > 500) { document.getElementById("errormess").innerHTML = "message should not exceed 500 characters."; }
    } else {
        document.getElementById("errormess").innerHTML = "";
    }
}