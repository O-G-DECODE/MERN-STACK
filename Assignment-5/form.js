function Error(){
    let namefield = $('#name').val()
    let adressField = $('#adress').val()
    let EmailField = $('#email').val()
    let PhoneField = $('#phone').val()
    let Warning = "Form Submitted";

    if (namefield == "" ){
         alert("Please enter your name")
    } else if (adressField == "") {

        alert("Please enter your Address")
    }
      else if (EmailField == "") {
       alert("Please enter your Email")
    }
     else if (PhoneField == "") {
         alert("enter your Phone Number")
    }
    else{
        $('#Form')[0].submit();  
        alert("Form submited")
}
}
