$(document).ready(function () {
    $('body').prepend(BuildMiniHeader());

    var textWrapper = document.querySelector('.ml16');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: false})
      .add({
        targets: '.ml16 .letter',
        translateY: [-100,0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
      });


      $('.carousel').carousel({
        pause: "hover",
        interval: 10000,

    })

});
