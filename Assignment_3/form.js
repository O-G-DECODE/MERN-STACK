function Error(){
    let namefield = document.getElementById('name').value;
    let adressField = document.getElementById('adress').value;
    let EmailField = document.getElementById('email').value;
    let PhoneField = document.getElementById('phone').value;

    if (namefield == "" ){
         alert("Please enter your name")
    } else if (adressField == "") {
        alert("Please enter your Adress")
    }
      else if (EmailField == "") {
        document.getElementById('ErrorEmail').innerHTML = "Please enter your Email";
    }
     else if (PhoneField == "") {
        document.getElementById('ErrorPhone').innerHTML = "enter your Phone Number";
    }
    else{
        document.getElementById('Form').sumbmit();
    }
}