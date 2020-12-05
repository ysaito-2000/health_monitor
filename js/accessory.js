const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == null) {
  localStorage.setItem("theme", "light");
}

if (currentTheme == "light") {
  document.body.classList.add("light-theme");
}



function myFunction() {
  var element = document.body;
  element.classList.toggle("light-theme");

  if (currentTheme == "dark") {
    document.body.classList.add("light-theme");
  }

  var theme = "dark";

  if (document.body.classList.contains("light-theme")) {
    theme = "light";
  }

  localStorage.setItem("theme", theme);
}

function openSideMenu() {
  document.getElementById("side-menu").style.width = "250px";
}

function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0px";
}

function logoutUser() {
  localStorage.setItem("CURRENTUSER", "null");
}
