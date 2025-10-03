function Error(){
    let namefield = document.getElementById('name').value;
    let adressField = document.getElementById('adress').value;
    let EmailField = document.getElementById('email').value;
    let PhoneField = document.getElementById('phone').value;
    let Warning = "Form Submitted";

    if (namefield == "" ){
         document.getElementById('Errorname').innerHTML =("Please enter your name")
    } else if (adressField == "") {

         document.getElementById('ErrorAddress').innerHTML =("Please enter your Address")
    }
      else if (EmailField == "") {
        document.getElementById('ErrorEmail').innerHTML = "Please enter your Email";
    }
     else if (PhoneField == "") {
        document.getElementById('ErrorPhone').innerHTML = "enter your Phone Number";
    }
    else{
        document.getElementById('Form').submit();
        document.getElementById('warning').value = Warning;
    }
}