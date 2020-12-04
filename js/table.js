// check and get user key
let userKey = localStorage.getItem("CURRENTUSER");
if (userKey == "null") {
    window.location.href = "index.html"
}
let allUsers = JSON.parse(localStorage.getItem("USERS"));
let theUser;
for (i = 0; i < allUsers.length; i++) {
    if (allUsers[i].key == userKey) {
        theUser = allUsers[i];
    }
}

//get user data from localStorage
let allUserData = JSON.parse(localStorage.getItem("DATASTORAGE"));
let thisUserData = [];
const currentWeek = getWeekNumber(new Date());
for (i = 0; i < allUserData.length; i++) {
    if (allUserData[i].key == userKey) {
        if (allUserData[i].week != currentWeek) {
            allUserData.splice(i, 1);
        }
        thisUserData.push(allUserData[i]);
    }
}

localStorage.setItem("DATASTORAGE", JSON.stringify(allUserData));

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

// store data in arrays
let hrArray = [],
    bpArray = [],
    actArray = [],
    calInArray = [],
    calOutArray = [],
    dateArray = [];
for (i = 0; i < thisUserData.length; i++) {
    dateArray.push(thisUserData[i].date);
    hrArray.push(parseInt(thisUserData[i].hr));
    bpArray.push(parseInt(thisUserData[i].bp));
    actArray.push(parseInt(thisUserData[i].act));
    calInArray.push(parseInt(thisUserData[i].calIn));
    calOutArray.push(parseInt(thisUserData[i].calOut));
}

//display data base on the input date
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


var table = document.getElementById("table-summary");

//get max values from the table then color them
let hrMax = hrArray.indexOf(Math.max(...hrArray));
table.rows[1].cells[hrMax + 1].style.color = 'red';
let bpMax = bpArray.indexOf(Math.max(...bpArray));
table.rows[2].cells[bpMax + 1].style.color = 'red';
let actMax = actArray.indexOf(Math.max(...actArray));
table.rows[3].cells[actMax + 1].style.color = 'red';
let inMax = calInArray.indexOf(Math.max(...calInArray));
table.rows[4].cells[inMax + 1].style.color = 'red';
let outMax = calOutArray.indexOf(Math.max(...calOutArray));
table.rows[5].cells[outMax + 1].style.color = 'red';

//get min values from the table then color them 
let hrMin = hrArray.indexOf(Math.min(...hrArray));
table.rows[1].cells[hrMin + 1].style.color = 'goldenrod';
let bpMin = bpArray.indexOf(Math.min(...bpArray));
table.rows[2].cells[bpMin + 1].style.color = 'goldenrod';
let actMin = actArray.indexOf(Math.min(...actArray));
table.rows[3].cells[actMin + 1].style.color = 'goldenrod';
let inMin = calInArray.indexOf(Math.min(...calInArray));
table.rows[4].cells[inMin + 1].style.color = 'goldenrod';
let outMin = calOutArray.indexOf(Math.min(...calOutArray));
table.rows[5].cells[outMin + 1].style.color = 'goldenrod';