
function myFunction2() {
    var element = document.body;
   element.classList.toggle("dark-mode");
}
var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal2 = document.getElementById('id02');

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}