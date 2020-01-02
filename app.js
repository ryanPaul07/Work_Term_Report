$(document).ready(function() {
    navFadeIn();
    landPgFadeIn();

    /* testing accordion functionality */
    var expand = $('#testing');

    for(var i = 0; i < expand.length; i++) {
        expand[i].onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }

});


function navFadeIn() {
    $('.nav-fadeIn').css('display','none');
    $('.nav-fadeIn').fadeIn(3000);
}

function landPgFadeIn() {
    $('.landPG-fadeIn').css('display','none');
    $('.landPG-fadeIn').fadeIn(3000);
}
