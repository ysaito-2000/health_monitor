let userKey = localStorage.getItem("CURRENTUSER");
if (userKey == "null") {
    window.location.href = "signup-page.html"
}
let allUsers = JSON.parse(localStorage.getItem("USERS"));
let theUser;
for (i = 0; i < allUsers.length; i++) {
    if (allUsers[i].key == userKey) {
        theUser = allUsers[i];
    }
}
let allUserData = JSON.parse(localStorage.getItem("DATASTORAGE"));
let thisUserData = [];
for (i = 0; i < allUserData.length; i++) {
    if (allUserData[i].key == userKey) {
        thisUserData.push(allUserData[i]);
    }
}
let hrArray = [], bpArray = [], actArray = [], calInArray = [], calOutArray = [], dateArray = [];
for (i = 0; i < thisUserData.length; i++) {
    dateArray.push(thisUserData[i].date);
    hrArray.push(parseInt(thisUserData[i].hr));
    bpArray.push(parseInt(thisUserData[i].bp));
    actArray.push(parseInt(thisUserData[i].act));
    calInArray.push(parseInt(thisUserData[i].calIn));
    calOutArray.push(parseInt(thisUserData[i].calOut));
}
for (i = 0; i < dateArray.length; i++) {
    if (dateArray[i] === "sun") {
        document.getElementById("hr1").innerHTML = hrArray[i];
        document.getElementById("bp1").innerHTML = bpArray[i];
        document.getElementById("act1").innerHTML = actArray[i];
        document.getElementById("calIn1").innerHTML = calInArray[i];
        document.getElementById("calOut1").innerHTML = calOutArray[i];
    }
    if (dateArray[i] === "mon") {
        document.getElementById("hr2").innerHTML = hrArray[i];
        document.getElementById("bp2").innerHTML = bpArray[i];
        document.getElementById("act2").innerHTML = actArray[i];
        document.getElementById("calIn2").innerHTML = calInArray[i];
        document.getElementById("calOut2").innerHTML = calOutArray[i];
    }
    if (dateArray[i] === "tues") {
        document.getElementById("hr3").innerHTML = hrArray[i];
        document.getElementById("bp3").innerHTML = bpArray[i];
        document.getElementById("act3").innerHTML = actArray[i];
        document.getElementById("calIn3").innerHTML = calInArray[i];
        document.getElementById("calOut3").innerHTML = calOutArray[i];
    }
    if (dateArray[i] === "wed") {
        document.getElementById("hr4").innerHTML = hrArray[i];
        document.getElementById("bp4").innerHTML = bpArray[i];
        document.getElementById("act4").innerHTML = actArray[i];
        document.getElementById("calIn4").innerHTML = calInArray[i];
        document.getElementById("calOut4").innerHTML = calOutArray[i];
    }
    if (dateArray[i] === "thurs") {
        document.getElementById("hr5").innerHTML = hrArray[i];
        document.getElementById("bp5").innerHTML = bpArray[i];
        document.getElementById("act5").innerHTML = actArray[i];
        document.getElementById("calIn5").innerHTML = calInArray[i];
        document.getElementById("calOut5").innerHTML = calOutArray[i];
    }
    if (dateArray[i] === "fri") {
        document.getElementById("hr6").innerHTML = hrArray[i];
        document.getElementById("bp6").innerHTML = bpArray[i];
        document.getElementById("act6").innerHTML = actArray[i];
        document.getElementById("calIn6").innerHTML = calInArray[i];
        document.getElementById("calOut6").innerHTML = calOutArray[i];
    }
    if (dateArray[i] === "sat") {
        document.getElementById("hr7").innerHTML = hrArray[i];
        document.getElementById("bp7").innerHTML = bpArray[i];
        document.getElementById("act7").innerHTML = actArray[i];
        document.getElementById("calIn7").innerHTML = calInArray[i];
        document.getElementById("calOut7").innerHTML = calOutArray[i];
    }
}

