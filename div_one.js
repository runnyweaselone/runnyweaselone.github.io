

$(window).scroll(function() {

    if ($(this).scrollTop()>500)
     {
       
        $('.menubutton').fadeIn();
        $('.menubutton').addClass("sticky");
       
     }
    else if($(this).scrollTop()<=500)
     {
        
      $('.menubutton').fadeOut();
     

     }
 })
 $(document).ready(function() {
    $('.menubutton').hide();
    
  })
  var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
   
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}
function rm(){
    if(window.innerWidth<=576){
       

        $("#particles-js").remove();
    
        
       
        
    }
    
}
$(document).ready(rm);
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}