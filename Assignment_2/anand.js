function error() {
    let namefield = document.getElementById('cname').value;
    let EmailField = document.getElementById('email').value;
    let Subject = document.getElementById('subject').value;
    let description = document.getElementById('description').value;

    if(namefield == "") {
        document.getElementById('errorname').innerHTML = "Please enter the name";
    } 
    else if(EmailField == ""){
        document.getElementById('erroremail').innerHTML = "Please enter the email"
    }
    else if(Subject ==""){
       document.getElementById('errorsubject').innerHTML = "Please enter the subject"
    }
    else if (description == ""){
        document.getElementById('errordescription').innerHTML = "Please enter the description"
    }

    else{
        document.getElementById('form').submit();
    }
}
