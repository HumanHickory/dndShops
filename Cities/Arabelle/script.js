var showReal = false;


$(document).ready(function () {
    $('body').prepend(BuildHeader());
    $("#thanksForInput").hide();


    ToggleRealGloomy(showReal);

    anime.timeline({ loop: false })
        .add({
            targets: '.ml2 .letter',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70 * i
        });


    $('.carousel').carousel({
        pause: "hover",
        interval: 10000,
    });

});

function ToggleRealGloomy(showReal){
    if(!showReal){
        $(".real").hide();
        $(".gloomy").show();
    } else {
        $(".real").show();
        $(".gloomy").hide();
    }
}

