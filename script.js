function validateForm(event){
    event.preventDefault();
    regisForm = document.getElementById("regisForm")
    username = document.getElementById("username")
    email = document.getElementById("email")
    password = document.getElementById("password")
    confirmPassword = document.getElementById("confirm")
    age = document.getElementById("age")
    male = document.getElementById("male")
    female = document.getElementById("female")
    agree = document.getElementById("agree") 
    error = document.getElementById("error")

    if(username.value.length < 5){
        error.innerHTML = "Your name must be at least 5 characters!"
        alert("Your name must be at least 5 characters!")
    }
    else if(!email.value.endsWith("@gmail.com")){
        error.innerHTML = "Email must end with '@gmail.com'!"
        alert("email must end with '@gmail.com'!")
    }
    else if(!isAlphanumeric(password.value)){
        error.innerHTML = "Password must be alphanumeric!"
        alert("Password must be alphanumeric!")
    }
    else if(password.value!=confirmPassword.value){
        error.innerHTML= "Password doesn't match"
        alert("Password doesn't match")
    }
    else if(age.value < 18){
        error.innerHTML = "You must be at least 18 yo to register!"
        alert("You must be at least 18 yo to register!")
    }
    else if(!(male.checked||female.checked)){
        error.innerHTML = "gender must be picked!"
        alert("gender must be picked!")
    }
    else if(!agree.checked){
        error.innerHTML = "you must agree to the Terms and Condition"
        alert("you must agree to the Terms and Condition")
    }
    else{
        error.innerHTML = ""
        alert("Successful")
        regisForm.submit()
    }
}

function isAlphanumeric(pw){
    var num = false
    var alpha = false
    for(let i = 0; i<pw.length; i++){
        if(!isNaN(pw[i])){
            num = true
        }
        else{
            alpha = true
        }
        if (num && alpha){
            return true
        }
    }
    return false
}