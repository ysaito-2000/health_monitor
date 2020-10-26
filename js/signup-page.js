const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();

    let userInfo = {
        username: document.getElementById("username-field").value,
        password: document.getElementById("password-field").value,
        password2: document.getElementById("password2-field").value,
        question: document.getElementById("question-select").value,
        answer: document.getElementById("answer-field").value
    }

    for (const [key, value] of Object.entries(userInfo)) {
        console.log(`${key}: ${value}`);
    }
})
