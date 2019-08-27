// JavaScript Document
// JavaScript Document
function validateForm() {
  var iID= document.forms["addItemFrm"]["iId"].value;
  var iName= document.forms["addItemFrm"]["iName"].value;
  var iqty= document.forms["addItemFrm"]["iQty"].value;
  var iprce= document.forms["addItemFrm"]["ipric"].value;
  
  if (iID == "") {
    alert("Enter book ID");
    return false;
  }
  
  if (iName == "") {
    alert("Enter Book Name ");
    return false;
  }
  

  
  if (iprce == "") {
    alert("Enter Book Price ");
    return false;
  }
  
}
function validateForm() {
        var currency = document.forms["addItemFrm"]["ipric"].value;
        var pattern = /^\d+(?:\.\d{0,2})$/ ;
        if (pattern.test(currency)) {
            alert("Currency is in valid format");
            return true;
        } 
            alert("Currency is not in valid format!Enter in 00.00 format");
            return false;

    }
	
	$('#i_file').change( function(event) {
    var tmppath = URL.createObjectURL(event.target.files[0]);
    $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));

    $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");
});