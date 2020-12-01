const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (typeof localStorage.getItem("USERS") == undefined) {
        loginErrorMsg.style.opacity = 1;
        return;
    } else {
        let totalUsers = JSON.parse(localStorage.getItem("USERS"));

        let found = false;

        for (key in totalUsers) {
            if (totalUsers[key].username == username && totalUsers[key].password == password) {
                console.log("success!");
                found = true;
                localStorage.setItem("CURRENTUSER", totalUsers[key].key);
                window.location.href = "summary.html";
            }
        }

        if (!found) {
            loginErrorMsg.style.opacity = 1;
        }

    }
})

