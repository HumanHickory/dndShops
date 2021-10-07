$(document).ready(function () {

    var city = getUrlParameter('city');

    if(city == "LastHarbor"){
        $('body').prepend(BuildMiniHeader());

    } else {
    $('body').prepend(BuildHeader());
    }
    

});