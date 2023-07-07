document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;

    var user = {
        username: newUsername,
        password: newPassword
    };
    localStorage.setItem("user", JSON.stringify(user));

    console.log("Sign-up successful");
    window.location.href = "home.html";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var storedUser = localStorage.getItem("user");
    if (storedUser) {
        var user = JSON.parse(storedUser);
        if (username === user.username && password === user.password) {
            console.log("Login successful");
            window.location.href = "home.html";
        } else {
            console.log("Invalid username or password");
        }
    } else {
        console.log("No user details found");
    }
});

document.getElementById("logout-btn").addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.removeItem("user");

    console.log("Logged out");
    window.location.href = "login.html";
});

window.addEventListener("DOMContentLoaded", function() {
    var storedUser = localStorage.getItem("user");
    if (storedUser) {
        console.log("User already logged in");
        window.location.href = "home.html";
    }
});

function signIn() {
    let auth = "https://accounts.google.com/o/oauth2/v2/auth";
    let form = document.createElement('form')
    form.setAttribute('method', 'GET')
    form.setAttribute('action', auth)

    let parms = {
        "client_id": "",
        "redrect_uri": "",
        "response_type": "token",
        "scope": "https://www.ggogleapis.com/auth/userinfo.profile",
        "include_granted_scope": 'true',
        'state': 'pass-through-value'
    }


}