$(document).ready(function(){

    // click on login button in the login page
    $('#btn-submit-login').click(async function(){
        var username = $($('input[name=username]')[0]).val()
        var password = $($('input[type=password]')[0]).val()
        var result = await API_Login(username, password);
        if(result.success) {
            window.localStorage.setItem("token",result.token);
            window.location.href = "/dashborad.html";
        } else {
            var errorField = $($('#error-field')[0])
            errorField.text(result.message);
            errorField.show();
        }
    });

    // click on register button in the register page
    $('#btn-refister').click(async function(){
        var fName = $($('input[name=first-name]')[0]).val()
        var lName = $($('input[name=last-name]')[0]).val()
        var username = $($('input[name=username]')[0]).val()
        var email = $($('input[type=email]')[0]).val()
        var password = $($('input[name=password]')[0]).val()
        var confirmation = $($('input[name=confirmation]')[0]).val();
        if(password!=confirmation) {
            var errorField = $($('#error-field')[0])
            errorField.text("Please check the confirmation");
            errorField.show();
            return;
        }
        var result = await API_Register(username, email, password, fName, lName);
        if(result.success) {
            window.location.href = "/dashborad.html";
        } else {
            var errorField = $($('#error-field')[0])
            errorField.text(result.message);
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


async function API_Login(username, password) {
    let data = {
        username: username,
        password: password
    }
    let result = await fetch("http://localhost:5000/user", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
    return await result.json();
}


function API_Register(username, email, password, firstName, lastName) {
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