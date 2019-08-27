//Image slideshow part
var myIndex = 0;
var myIndex2 =0;

carousel();
carousel2();
carousel3();




function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 4 seconds
}

function carousel2() {
    var i;
    var x = document.getElementsByClassName("qimg");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel2, 3000); // Change image every 4 seconds
  }

  function carousel3() {
    var i;
    var x = document.getElementsByClassName("aimg");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2-1].style.display = "block";  
    setTimeout(carousel3, 6000); // Change image every 4 seconds
  }


//end of slideshow js