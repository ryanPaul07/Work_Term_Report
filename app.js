// $(document).ready(function() {
    
// });

$(document).ready(function() {
    $('#Title').css('display', 'none');
    $('#Title').fadeIn(2000);
    // $('#future_goals').click(function() {
    //     $(this).css({'background-color': 'red'});
    //     alert('this works');
    // });
    // works
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottomOfWindow > bottomOfObject ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
            
        }); 
    
    });
    
});



