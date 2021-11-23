function getInfo() {
    var yourname = document.getElementById("yourname").value;
    var yemail = document.getElementById("yemail").value;
    var sject = document.getElementById("sject").value;
    var message = document.getElementById("message").value;

    // check yourname
    if (yourname == "" || yourname.length > 100) {
        document.getElementById("errorname").innerHTML = "Please fill out your name.";
        if (yourname.length > 100) { document.getElementById("errorname").innerHTML = "your name should not exceed 100 characters." }
    } else {
        document.getElementById("errorname").innerHTML = "";
    }

    // check email  
    if (yemail == "" || yemail.length > 100) {
        document.getElementById("erroremail").innerHTML = "Please fill out your name.";
        if (yemail.length > 100) { document.getElementById("erroremail").innerHTML = "Your email should not exceed 100 characters."; }
    } else {
        document.getElementById("erroremail").innerHTML = "";
    }

    // check subject
    if (sject == "" || sject.length < 50 || sject.length > 250) {
        document.getElementById("errorsubject").innerHTML = "Please fill out the subject.";
        if (sject.length < 50) { document.getElementById("errorsubject").innerHTML = "Subject should not shorter than 50 characters."; }
        if (sject.length > 250) { document.getElementById("errorsubject").innerHTML = "Subject should not exceed 250 characters."; }
    } else {
        document.getElementById("errorsubject").innerHTML = "";
    }

    // check message
    if (message == "" || message.length > 500) {
        document.getElementById("errormess").innerHTML = "Please fill out the message.";
        if (message.length > 500) { document.getElementById("errormess").innerHTML = "Message should not exceed 500 characters."; }
    } else {
        document.getElementById("errormess").innerHTML = "";
    }

}