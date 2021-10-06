var cityName = "";


$(document).ready(function () {
    $('body').prepend(BuildHeader());

    CityName = getUrlParameter('city');
    $('#intro').text("Welcome to " + CityName);

    if (CityName == "Abydos") {
        Abydos();
    } else if (CityName == "Arynsport") {
        Arynsport();
    }
});

function EpicFlail() {
    window.location.href = "../shops/EpicFlail.html?city=" + CityName;
}

function ThroinsGauntlet() {
    window.location.href = "../shops/ThroinsGauntlet.html?city=" + CityName;
}

function GnomeDepot() {
    window.location.href = "../shops/GnomeDepot.html?city=" + CityName;
}

function VictoriousSecret() {
    window.location.href = "../shops/VictoriousSecret.html?city=" + CityName;
}

function FiveFingers() {
    window.location.href = "../shops/FiveFinger's.html?city=" + CityName;
}

function BachInAMinuet() {
    window.location.href = "../shops/BachInAMinuet.html?city=" + CityName;
}

function EyeOfTheBeholder() {
    window.location.href = "../shops/EyeOfTheBeholder.html?city=" + CityName;
}


function Abydos() {
    $("#GnomeDepot").hide();
    $("#VictoriousSecret").hide();
    $("#BachInAMinuet").hide();
}

function Arynsport(){
    $("#EyeOfTheBeholder").hide();
}