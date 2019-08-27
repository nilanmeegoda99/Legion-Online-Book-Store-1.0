// JavaScript Document
function validateForm() {
  var x = document.forms["adminFrm"]["uName"].value;
  var y = document.forms["adminFrm"]["passw"].value;
  if (x == "") {
    alert("Enter User name");
    return false;
  }
  if (y == "") {
    alert("Enter password ");
    return false;
  }
}