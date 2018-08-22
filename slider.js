var slideIndexs = 0;
showSlidess();

function showSlidess() {
    var is;
    var slidess = document.getElementsByClassName("mySlidess");
    
    for (is = 0; is < slidess.length; is++) {
       slidess[is].style.display = "none";  
       console.log('deadpool');
    }
    slideIndexs++;
    if (slideIndexs > slidess.length) {slideIndexs = 1}    
   
    slidess[slideIndexs-1].style.display = "block";  
    
    setTimeout(showSlidess, 4000); // Change image every 2 seconds
}