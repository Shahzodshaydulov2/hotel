let menu = document.getElementById("menu");
let sideBar = document.getElementById('side');
let closeBtn = document.getElementById('close');


menu.addEventListener("click", function(){
  sideBar.style.width = '220px';
})


closeBtn.addEventListener('click', function() {
  sideBar.style.width = '0';
})
