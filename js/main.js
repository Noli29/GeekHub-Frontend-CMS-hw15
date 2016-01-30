$(document).ready(function(){
    $("#slowscroll li a").click(function () {
        elementClick = jQuery(this).attr("href");
        destination = jQuery(elementClick).offset().top=120;
        if(jQuery.browser.chrome){
            jQuery("body").animate({
                scrollTop: destination }, 1100 );
        } else {
            jQuery("html").animate({
                scrollTop: destination }, 1100 );
        }
        return false;
    });
});