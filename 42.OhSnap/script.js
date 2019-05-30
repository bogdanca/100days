var button = document.getElementById("button");
var reload = document.getElementById("reload");

button.onclick = function() {myFunction()};
reload.onclick = function() {myFunction()};


function myFunction() {
  document.getElementById("modal").classList.toggle("hide");
}