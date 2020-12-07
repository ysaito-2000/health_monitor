const dataForm = document.getElementsByClassName("numericField");
const submitButton = document.getElementById("data-submit");
let currentUser = localStorage.getItem("CURRENTUSER");

if (currentUser == "null") {
    window.location.href = "index.html";
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    for (i = 0; i < dataForm.length; i++) {
        if (dataForm[i].value == "") {
            alert("There is an empty field");
            return;
        }
    }

    function getWeekNumber(d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    }


    // set accepted max - min value for data entry.
    let combinedBp = "";

    let bpInfo = document.getElementsByClassName("BP");

    if ((bpInfo[0].value > 180) || (bpInfo[0].value < 80) || (bpInfo[1].value < 60) || (bpInfo[1].value > 120)) {
        alert("Entered unrealistic blood pressure. If information was accurate, please contact a doctor immediately.");
        return;
    }

    combinedBp = bpInfo[0].value + "/" + bpInfo[1].value;

    let hrInfo = document.getElementById("HR").value;
    if ((hrInfo < 40) || (hrInfo > 150)) {
        alert("Entered unrealistic heart rate. If information was accurate, please contact a doctor immediately.");
        return;
    }

    let actInfo = document.getElementById("Act").value;
    if ((actInfo < 0) || (actInfo > 24)) {
        alert("Activity hour should be from 0 - 24.");
        return;
    }

    let calInInfo = document.getElementById("In").value;
    if ((calInInfo < 0 || calInInfo > 5000)) {
        alert("Entered unrealistic calories intake. If information was accurate, please contact a doctor immediately.");
        return;
    }

    let calOutInfo = document.getElementById("Out").value;
    if ((calOutInfo < 0 || calOutInfo > 5000)) {
        alert("Entered unrealistic calories outtake. If information was accurate, please contact a doctor immediately.");
        return;
    }

    // collect and store data
    let thisUserInfo = {
        key: currentUser,
        week: getWeekNumber(new Date()),
        date: document.getElementById("date").value,
        hr: document.getElementById("HR").value,
        bp: combinedBp,
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
            if (allUserInfo[i].date == thisUserInfo.date && allUserInfo[i].key == thisUserInfo.key) {
                allUserInfo[i] = thisUserInfo;
                localStorage.setItem("DATASTORAGE", JSON.stringify(allUserInfo));
                return;
            }
        }

        allUserInfo[allUserInfo.length] = thisUserInfo;
        localStorage.setItem("DATASTORAGE", JSON.stringify(allUserInfo));
    }

    location.reload();
})