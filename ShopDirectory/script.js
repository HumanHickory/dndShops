var CityName = "";


$(document).ready(function () {
    $('body').prepend(BuildHeader());

    CityName = getUrlParameter('city');
    $('#intro').text("Welcome to " + CityName);


    
    if(getRoot() == "https://www.avyngaard.shop/"){
       // $("#abydos").hide();
        $("#arabelle").hide();
        $("#arynsport").hide();
        $("#burterran").hide();
        $("#lastHarbor").hide();
        $("#oysterIslands").hide();
        $("#sandstone").hide();
        $("#sonridge").hide();
        //$("#rivvenastorp").hide();
       // $("#swallowsSong").hide();
    } 

    if (CityName == "Abydos") {
        Abydos();
    } else if (CityName == "Arynsport") {
        Arynsport();
    } else if (CityName =="Sonridge"){
        Sonridge();
    }else if (CityName =="Arabelle"){
        Arabelle();
    }
});

function EpicFlail() {
    window.location.href = "../shops/EpicFlail/EpicFlail.html?city=" + CityName;
}

function ThroinsGauntlet() {
    window.location.href = "../shops/RicochetArmaments/Ricochet.html?city=" + CityName;
}

function GnomeDepot() {
    window.location.href = "../shops/GnomeDepot/GnomeDepot.html?city=" + CityName;
}

function VictoriousSecret() {
    window.location.href = "../shops/VictoriousSecret/VictoriousSecret.html?city=" + CityName;
}

function FiveFingers() {
    window.location.href = "../shops/FiveFingers/FiveFinger's.html?city=" + CityName;
}

function BachInAMinuet() {
    window.location.href = "../shops/BachInAMinuet/BachInAMinuet.html?city=" + CityName;
}

function EyeOfTheBeholder() {
    window.location.href = "../shops/EyeOfTheBeholder/EyeOfTheBeholder.html?city=" + CityName;
}

function Zimzam() {
    window.location.href = "../shops/Zimzam/Zimzam.html?city=" + CityName;
}
function BitsAndPieces() {
    window.location.href = "../shops/BitsAndPieces/BitsAndPieces.html?city=" + CityName;
}


function Abydos() {
    $("#GnomeDepot").hide();
    $("#VictoriousSecret").hide();
    $("#BachInAMinuet").hide();
    $("#Zimzam").hide();
}

function Arynsport(){
    $("#EyeOfTheBeholder").hide();
    $("#BitsAndPieces").hide();
}

function Arabelle(){
    $("#Zimzam").hide();
    $("#BitsAndPieces").hide();

}

function Sandstone(){
    $("#Zimzam").hide();
    $("#BitsAndPieces").hide();

}

function Sonridge(){
    $("#EyeOfTheBeholder").hide();
    $("#Zimzam").hide();

}