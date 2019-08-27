  

var myIndex2 =0;

carousel();


function carousel() {
    var i;
    var x = document.getElementsByClassName("laddimg");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 3 seconds
  }
