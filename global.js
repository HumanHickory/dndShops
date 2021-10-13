
var baseUrl = "http://dmrensdndapi.azurewebsites.net/";
//var baseUrl = "https://localhost:44350/";

function getRoot() {
    if (window.location.origin.substring(0, 4) == "file") {
        return "file:///C:/Users/Jordan/Documents/GitHub/dndShops/";
    } else {
        return "https://www.avyngaard.shop/";
    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};




function BuildHeader() {
    var CityName = getUrlParameter('city');
    var Tavern = GetTavern(CityName);
    var root = getRoot();


    var nav = "<nav class='navbar fixed-top navbar-expand-lg navbar-dark'>";
    nav += "<a class='navbar-brand' href='" + root + "Cities/" + CityName + "/index.html?city=" + CityName + "'>" + CityName + "</a>";
    nav += "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>";
    nav += "<span class='navbar-toggler-icon'></span>";
    nav += "</button>";

    nav += "<div class='collapse navbar-collapse' id='navbarSupportedContent'>";
    nav += " <ul class='navbar-nav mr-auto'>";

    nav += "<li class='nav-item active'>";
    nav += "<a class='nav-link' href='" + root + "index.html'>Town Directory</a>";
    nav += " </li>";
    nav += "<li class='nav-item'>";
    nav += "<a class='nav-link' href='" + root + "Cities/" + CityName + "/government.html?city=" + CityName + "'>Government</a>";
    nav += "</li>";
    nav += "<li class='nav-item'>";
    nav += "<a class='nav-link' href='" + root + "Cities/" + CityName + "/index.html?city=" + CityName + "#history'>History</a>";
    nav += " </li>";
    nav += "<li class='nav-item'>";
    nav += "<a class='nav-link' href='" + root + "Cities/" + CityName + "/News.html?city=" + CityName + "'>Weekly News</a>";
    nav += "</li>";
    nav += "<li class='nav-item dropdown'>";
    nav += "<a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
    nav += "Explore";
    nav += "</a>";
    nav += "<div class='dropdown-menu' aria-labelledby='navbarDropdown'>";
    nav += "<a class='dropdown-item' href='" + root + "/townIndex/index.html?city=" + CityName + "'>Shopping</a>";
    nav += "<a class='dropdown-item' href='" + root + "shops/taverns/" + Tavern + ".html?city='" + CityName + ">Eats and Drinks</a>";
    nav += "<a class='dropdown-item' href='" + root + "Cities/" + CityName + "/index.html?city=" + CityName + "#helpWanted'>Help Wanted</a>";
    nav += "</div>";
    nav += "</li>";


    nav += "</ul>";
    nav += "</div>";

    //Right Hand Side
    nav += "<div class='collapse navbar-collapse flex-grow-1 text-right' id='myNavbar'>";
    nav += "<ul class='navbar-nav ml-auto flex-nowrap'>";
    nav += "<li class='nav-item'>";
    nav += "<a href='" + root + "index.html' class='nav-link m-2 menu-item'>Town Directory</a>";
    nav += "</li>";
    nav += "</ul>";
    nav += "</div>";

    nav += "</nav>";

    return nav;

}





function BuildMiniHeader() {
    var CityName = getUrlParameter('city');
    var FormattedName;
    if (CityName == "OysterIslands") {
        FormattedName = "The Oyster Islands";
    } else if (CityName == "LastHarbor") {
        FormattedName = "Last Harbor";
    }else if (CityName == "SwallowsSong") {
        FormattedName = "Swallow's Song";
    } else {
        FormattedName = CityName;
    }

    var root = getRoot();


    var nav = "<nav class='navbar fixed-top navbar-expand-lg navbar-dark'>";
    nav += "<a class='navbar-brand' href='" + root + "Cities/" + CityName + "/index.html?city=" + CityName + "'>" + FormattedName + "</a>";
    nav += "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>";
    nav += "<span class='navbar-toggler-icon'></span>";
    nav += "</button>";


    nav += "<div class='collapse navbar-collapse' id='navbarSupportedContent'>";
    nav += " <ul class='navbar-nav mr-auto'>";

    nav += "<li class='nav-item active'>";
    nav += "<a class='nav-link' href='" + root + "index.html'>Town Directory</a>";
    nav += "</li>";
    nav += "</ul>";
    nav += "</div>";
    //Right Hand Side
    nav += "<div class='collapse navbar-collapse flex-grow-1 text-right' id='myNavbar'>";
    nav += "<ul class='navbar-nav ml-auto flex-nowrap'>";
    nav += "<li class='nav-item'>";
    nav += "<a href='" + root + "index.html' class='nav-link m-2 menu-item'>Town Directory</a>";
    nav += "</li>";
    nav += "</ul>";
    nav += "</div>";

    nav += "</nav>";

    return nav;

}

function GetTavern(CityName) {
    if (CityName == "Abydos") {
        return "DemonsHowl_Abydos"
    } else if (CityName == "Inburn") {
        return "DragonsClaw_Inburn"
    } else if (CityName == "Sonridge") {
        return "IronRaven_Sonridge"
    } else if (CityName == "Arynsport") {
        return "TheSaltyParrot_Arynsport"
    } else if (CityName == "Oclul") {
        return "WindyHyena_Oclul";
    }
}