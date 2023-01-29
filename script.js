// Get the current date and display it on the page
var currentDate = new Date();
document.getElementById("current-date").innerHTML = currentDate;

// Show/hide menu on small screens
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
