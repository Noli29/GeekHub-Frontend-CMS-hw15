var allowScroll = true;

function allowScrolling(){
    allowScroll = true;
}


function to(element){
    if(allowScroll) {
        allowScroll = false;
        $("html, body").animate({
            scrollTop: $("#" + element).offset().top - 60 // -60 пікселів відступу від верху
        }, 500);
        setTimeout(allowScrolling,500);
    }
    return false;
}

