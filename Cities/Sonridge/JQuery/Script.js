var production = false; 

$(document).ready(function () {
    $('body').prepend(BuildHeader());

});

function BuildHeader() {

    var root = "";
    if (!production) {
        root = "file:///Z:/dndShops.com/";
    } else {
        root = "https://www.dndshops.club/";
    }

    var nav = "<nav class='navbar navbar-expand-lg navbar-light'>";
    nav += "<a class='navbar-brand' href='" + root + "Cities/Sonridge/index.html'>Sonridge City</a>";
    nav += "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>";
    nav += "<span class='navbar-toggler-icon'></span>";
    nav += "</button>";

    nav += "<div class='collapse navbar-collapse' id='navbarSupportedContent'>";
    nav += " <ul class='navbar-nav mr-auto'>";

    nav += "<li class='nav-item active'>";
    nav += "<a class='nav-link' href='" + root + "Cities/Sonridge/index.html'>Home</a>";
    nav += " </li>";
    nav += "<li class='nav-item'>";
    nav += "<a class='nav-link' href='" + root + "Cities/Sonridge/government.html'>Government</a>";
    nav += "</li>";
    nav += "<li class='nav-item'>";
    nav += "<a class='nav-link' href='" + root + "Cities/Sonridge/index.html#history'>History</a>";
    nav += " </li>";
    nav += "<li class='nav-item'>";
    nav += "<a class='nav-link' href='" + root + "Cities/Sonridge/News.html'>Weekly News</a>";
    nav += "</li>";
    nav += "<li class='nav-item dropdown'>";
    nav += "<a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
    nav += "Explore";
    nav += "</a>";
    nav += "<div class='dropdown-menu' aria-labelledby='navbarDropdown'>";
    nav += "<a class='dropdown-item' href='" + root + "/townIndex/Sonridge.html'>Shopping</a>";
    nav += "<a class='dropdown-item' href='" + root + "shops/taverns/IronRaven_Sonridge.html'>Eats and Drinks</a>";
    nav += "<a class='dropdown-item' href='#'>Brothels</a>";
    nav += "</div>";
    nav += "</li>";

    nav += "<li class='nav-item dropdown'>";
    nav += "<a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
    nav += " Guilds";
    nav += "</a>";
    nav += "<div class='dropdown-menu' aria-labelledby='navbarDropdown'>";
    nav += " <a class='dropdown-item' href='" + root + "Guilds/Sonridge/FightersGuild.html'>Knights of the Lost Age</a>";
    nav += " <a class='dropdown-item' href='" + root + "Guilds/Sonridge/GuildOfMysticArts.html'>Academy of Mystic Arts</a>";
    nav += " <a class='dropdown-item' href='" + root + "Guilds/Sonridge/CDEU.html'>The Coalition</a>";
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