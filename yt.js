var menuIcon = document.querySelector(".nav-left i");
var sidebar = document.querySelector("sidebar");

menuIcon.onclick = function(){
    sidebar.classList.toggle("large-sidebar");
}