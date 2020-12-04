const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();


    // Grabs values from radio/gender choices
    var ele = document.getElementsByClassName("gender-option");
    let choice;

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            choice = ele[i].value;
        }
    }

    // NOTE: Later generate unique key for each profile but for now use KEYONE

    // Grabs other values and puts into userInfo object
    let userInfo = {
        username: document.getElementById("username-field").value,
        password: document.getElementById("password-field").value,
        password2: document.getElementById("password2-field").value,
        gender: choice,
        age: document.getElementById("age").value,
        weight: document.getElementById("weight").value,
        height: document.getElementById("height").value,
        question: document.getElementById("question-select").value,
        answer: document.getElementById("answer-field").value,

        key: "KEY"
    }

    // Checks if any of the fields are blank
    let valuesLog = Object.values(userInfo);

    let emptyField = false;

    for (let i = 0; i < valuesLog.length; i++) {
        if (valuesLog[i] == "" || valuesLog[i] == undefined) {
            emptyField = true;
        }
    }

    if (emptyField) {
        alert("You have left a field blank");
        location.reload();
        return;
    }


    // Checks if the passwords match

    // NOTE: can add other checks if username is already in use
    // check if age, weight, and height are bizzare
    // also, we can merge the error checking/alerts into one method/class

    if (userInfo.password != userInfo.password2) {
        alert("Passwords do not match");
        return;
    }

    // Assume this is first user, will add more code to handle an already existing user base

    let totalUsers = JSON.parse(localStorage.getItem("USERS"));

    if (totalUsers == null || totalUsers == undefined) {
        totalUsers = [];
    }

    userInfo.key = userInfo.key + (totalUsers.length + 1);
    totalUsers.push(userInfo);

    localStorage.setItem("USERS", JSON.stringify(totalUsers));


    localStorage.setItem("CURRENTUSER", userInfo.key);

    window.location.href = "summary.html";
})
