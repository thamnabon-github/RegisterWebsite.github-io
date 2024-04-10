let username,password;
//xhr.send('jsVariable=' + username)

const Cookies = require('js-cookie')

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"

document.getElementById("SignUp").addEventListener("click", () => {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    Agreed = document.getElementById("Agree");

    usernameInput = document.getElementById("username");
    passwordInput = document.getElementById("password");
    if (username != "") {
        if (password != "") {
            if (document.getElementById("Agree").checked) {
                //window.location.replace("Sign-Up.html")
                let newuser = {
                    "username": username,
                    "pw":   password
                }
                console.log(newuser["username"],"\n",newuser["pw"])
                alert("Signed up!")
                usernameInput.disabled = true
                passwordInput.disabled = true
                document.getElementById("SignUp").disabled = true
                Agreed.disabled = true
                usernameInput.style.cursor = "not-allowed"
                passwordInput.style.cursor = "not-allowed"
                Agreed.style.cursor = "not-allowed"
                document.getElementById("SignUp").style.cursor = "not-allowed"
                //pool.query('insert into Info (username,pw) values (?,?)',[username,password])
            } else {
                alert("You need to agree to term of Agreement")
            }
        } else {
            console.log("Password is empty")
            alert("You must enter password")
        }
    } else {
        alert("Can't leave username blank!")
    }
})


About = document.getElementById("Bar_about")
Menu = document.getElementById("Bar_menu")

About.addEventListener("click",() => {
    alert("About page is not available")
})

Menu.addEventListener("click", () => {
    console.log("Open Menu")
})

Filled_user = false
Filled_password = false
Filled_agree = false

eyeicon = document.getElementById("eyebtnicon")
ShowIcon = document.getElementById("eyeshow")
passwordSet = document.getElementById("password")

passwordSet.addEventListener('input',function(){
    if (passwordSet.value != "") {
        Filled_password = true
        ShowIcon.style.visibility = 'visible'
    } else {
        Filled_password = false
        ShowIcon.style.visibility = 'hidden'
    }
})

ShowIcon.addEventListener("click", () => {
    if (eyeicon.className == "fa fa-eye") {
        console.log("fa fa-eye")
        eyeicon.className = "fa fa-eye-slash"
        passwordSet.setAttribute("type",'text')
    } else {
        console.log("fa fa-eye-slash")
        eyeicon.className = "fa fa-eye"
        passwordSet.setAttribute("type",'password')
    }
})

Agreed = document.getElementById("Agree")

if (username == "" || password == "" || Agreed.checked) {
    console.log("Something isn't filled")
}
