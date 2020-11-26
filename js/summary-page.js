let userKey = localStorage.getItem("CURRENTUSER");

if (userKey == "null") {
    window.location.href = "signup-page.html";
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

let todayNumDate = (new Date()).getDay();
let todayDate;

switch(todayNumDate) {
    case 0: todayDate = "sun"; break;
    case 1: todayDate = "mon"; break;
    case 2: todayDate = "tues"; break;
    case 3: todayDate = "wed"; break;
    case 4: todayDate = "thurs"; break;
    case 5: todayDate = "fri"; break;
    default: todayDate = "sat";
}

for (i = 0; i < thisUserData.length; i++) {
    if (thisUserData[i].date == todayDate) {
        todayDate = thisUserData[i];
    }
}

var updateAll = (e => {
    document.getElementById("age").innerHTML = theUser.age;
    document.getElementById("gender").innerHTML = theUser.gender;
    document.getElementById("weight").innerHTML = theUser.weight;
    document.getElementById("height").innerHTML = theUser.height;

  
    if (!(Object.prototype.toString.call(todayDate) === "[object String]")) {
        document.getElementById("t-hr").innerHTML = todayDate.hr;
        document.getElementById("t-bp").innerHTML = todayDate.bp;
        document.getElementById("t-act").innerHTML = todayDate.act;
        document.getElementById("t-cal-in").innerHTML = todayDate.calIn;
        document.getElementById("t-cal-out").innerHTML = todayDate.calOut;
    }
});

updateAll();
