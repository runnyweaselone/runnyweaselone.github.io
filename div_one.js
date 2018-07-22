

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
  