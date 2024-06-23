const weapper=document.querySelector('.wrapper');

function login() {
  // change page on buttonclick
  window.location.href = "registration.html";
}
// Add event listener for the close button
document.getElementById("closeButton").addEventListener("click", function() {
  window.location.href = "start.html"; // Replace with the URL of the page you want to open
});