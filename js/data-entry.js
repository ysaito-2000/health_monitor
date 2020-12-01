const dataForm = document.getElementsByClassName("numericField");
const submitButton = document.getElementById("data-submit");
let currentUser = localStorage.getItem("CURRENTUSER");

if (currentUser == "null") {
    window.location.href = "signup-page.html";
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    for (i = 0; i < dataForm.length; i++) {
        if (dataForm[i].value == "") {
            alert("There is an empty field");
            return;
        } 
    }

    let thisUserInfo = {
        key: currentUser,
        date: document.getElementById("date").value,
        hr: document.getElementById("HR").value,
        bp: document.getElementById("BP").value,
        act: document.getElementById("Act").value,
        calIn: document.getElementById("In").value,
        calOut: document.getElementById("Out").value
    }

    let allUserInfo = JSON.parse(localStorage.getItem("DATASTORAGE"));

    if (allUserInfo == null) {
        allUserInfo = [thisUserInfo];
        localStorage.setItem("DATASTORAGE", JSON.stringify(allUserInfo));
    } else {
    
        for (i = 0; i < allUserInfo.length; i++) {
            if (allUserInfo[i].date == thisUserInfo.date) {
                allUserInfo[i] = thisUserInfo;
                localStorage.setItem("DATASTORAGE", JSON.stringify(allUserInfo));
                return;
            }
        }

        allUserInfo[allUserInfo.length] = thisUserInfo;
        localStorage.setItem("DATASTORAGE", JSON.stringify(allUserInfo));
    }
})