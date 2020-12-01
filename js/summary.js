// Find User Key
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

// Find User Data

let allUserData = JSON.parse(localStorage.getItem("DATASTORAGE"));

let thisUserData = [];

for (i = 0; i < allUserData.length; i++) {
    if (allUserData[i].key == userKey) {
        thisUserData.push(allUserData[i]);
    }
}

// Find Current Day & Current Day's Data

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

// Find Trend Line

let xArray = [], hrArray = [], bpArray = [], actArray = [], calInArray = [], calOutArray = [];

for (i = 0; i < thisUserData.length; i++) {
    xArray.push(i);
    hrArray.push(parseInt(thisUserData[i].hr));
    bpArray.push(parseInt(thisUserData[i].bp));
    actArray.push(parseInt(thisUserData[i].act));
    calInArray.push(parseInt(thisUserData[i].calIn));
    calOutArray.push(parseInt(thisUserData[i].calOut));
}

let slopes = [linearRegression(hrArray, xArray), 
    linearRegression(bpArray, xArray),
    linearRegression(actArray, xArray),
    linearRegression(calInArray, xArray),
    linearRegression(calOutArray, xArray)];

let weeklyTrend = document.getElementsByClassName("weekly-trend");


function linearRegression(y,x){
    var lr = {};
    var n = y.length;
    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_xx = 0;
    var sum_yy = 0;

    for (var i = 0; i < y.length; i++) {

        sum_x += x[i];
        sum_y += y[i];
        sum_xy += (x[i]*y[i]);
        sum_xx += (x[i]*x[i]);
        sum_yy += (y[i]*y[i]);
    } 

    lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
    // lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
    // lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);

    return lr.slope;
}


var updateAll = (e => {
    document.getElementById("age").innerHTML = theUser.age;
    document.getElementById("gender").innerHTML = theUser.gender;
    document.getElementById("weight").innerHTML = theUser.weight;
    document.getElementById("height").innerHTML = theUser.height;

    for (i = 0; i < weeklyTrend.length; i++) {
        if (slopes[i] > 0) {
            weeklyTrend[i].innerHTML = "<img src='img/uparrow.png' style='width:42px;height:42px;'>";
        } else if (slopes[i] < 0) {
            weeklyTrend[i].innerHTML = "<img src='img/downarrow.png' style='width:42px;height:42px;'>";
        } else {
            weeklyTrend[i].innerHTML = "<img src='img/even.png' style='width:42px;height:42px;'>";
        }
    }


    if (!(Object.prototype.toString.call(todayDate) === "[object String]")) {
        document.getElementById("t-hr").innerHTML = todayDate.hr;
        document.getElementById("t-bp").innerHTML = todayDate.bp;
        document.getElementById("t-act").innerHTML = todayDate.act;
        document.getElementById("t-cal-in").innerHTML = todayDate.calIn;
        document.getElementById("t-cal-out").innerHTML = todayDate.calOut;
    }
});

updateAll();
