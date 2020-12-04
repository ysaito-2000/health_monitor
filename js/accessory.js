const btn = document.querySelector (".btn-toggle");
const currentTheme = localStorage.getItem ("theme");
if (currentTheme == "light") {
  document.body.classList.add ("light-theme");
}
let theme = "light";
if (document.body.classList.contains ("light-theme")){
  theme = "dark";
}
localStorage.setItem("theme", theme);

function myFunction() {
  var element = document.body;
  element.classList.toggle("light-theme");
}

function openSideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    
}

function closeSideMenu() {
    document.getElementById("side-menu").style.width = "0px";
    
}

