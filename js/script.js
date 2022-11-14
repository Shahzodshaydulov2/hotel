let menu = document.getElementById("menu");
menu.addEventListener("click", open);
let sideBar = document.getElementsByClassName("side-bar") 
function open() {
  sideBar.style.display = "block";
}
