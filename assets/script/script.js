$(document).ready(function(){

    // click on login button in the login page
    $('#btn-submit-login').click(async function(){
        var email = $($('input[type=email]')[0]).val()
        var password = $($('input[type=password]')[0]).val()
        var result = await API_Login(email, password);
        if(result.success) {
            window.location.href = "/dashborad.html";
        } else {
            var errorField = $($('#error-field')[0])
            errorField.text(result.error);
            errorField.show();
        }
    });

    // click on register button in the register page
    $('#btn-refister').click(async function(){
        var fName = $($('input[name=first-name]')[0]).val()
        var lName = $($('input[name=last-name]')[0]).val()
        var email = $($('input[type=email]')[0]).val()
        var password = $($('input[name=password]')[0]).val()
        var confirmation = $($('input[name=confirmation]')[0]).val();
        if(password!=confirmation) {
            var errorField = $($('#error-field')[0])
            errorField.text("Please check the confirmation");
            errorField.show();
            return;
        }
        var result = await API_Register(email, password, fName, lName);
        if(result.success) {
            window.location.href = "/dashborad.html";
        } else {
            var errorField = $($('#error-field')[0])
            errorField.text(result.error);
            errorField.show();
        }
    });


    // click on reset button in the reset page
    $('#btn-submit-reset').click(async function(){
        var email = $($('input[type=email]')[0]).val()
        API_RequestReset(email);
        var errorField = $($('#error-field')[0])
        errorField.text("You will get the reset link in your email box if we will find it in our database");
        errorField.show();
    });




















});


function API_Login(email, password) {
    return {
        success: false,
        error: "Invalid credentials"
    }
}


function API_Register(email, password, firstName, lastName) {
    return {
        success: false,
        error: "This email ("+email+") aleady exisit in out database"
    }
    // return {
    //     success: true,
    //     token: "usher7med@gmail.com"
    // }
}


function API_RequestReset(email) {

}