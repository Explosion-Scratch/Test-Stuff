function myFunction() {
  var x = document.getElementById("notice");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}