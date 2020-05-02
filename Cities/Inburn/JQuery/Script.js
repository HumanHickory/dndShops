
$(document).ready(function () {
    $('body').prepend(BuildHeader());

});

function BuildHeader() {

    var root = window.location.origin;

    if (root == "file://") {
        root = "file:///Z:/dndShops.com/";
    } else {
        //root = "https://www.dndshops.club/";
        root = root + "/";
    }

    var nav = "<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>";
    nav += "<a class='navbar-brand' href='" + root + "Cities/Inburn/index.html'>Inburn</a>";
    nav += "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>";
    nav += "<span class='navbar-toggler-icon'></span>";
    nav += "</button>";

    nav += "<div class='collapse navbar-collapse' id='navbarSupportedContent'>";
    nav += " <ul class='navbar-nav mr-auto'>";

    nav += "<li class='nav-item active'>";
    nav += "<a class='nav-link' href='" + root + "Cities/Inburn/index.html'>Home</a>";
    nav += " </li>";
    nav += "<li class='nav-item'>";
    nav += "<a class='nav-link' href='" + root + "Cities/Inburn/government.html'>Government</a>";
    nav += "</li>";
    nav += "<li class='nav-item'>";
    nav += "<a class='nav-link' href='" + root + "Cities/Inburn/index.html#history'>History</a>";
    nav += " </li>";
    nav += "<li class='nav-item'>";
    nav += "<a class='nav-link' href='" + root + "Cities/Inburn/News.html'>Weekly News</a>";
    nav += "</li>";
    nav += "<li class='nav-item dropdown'>";
    nav += "<a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
    nav += "Explore";
    nav += "</a>";
    nav += "<div class='dropdown-menu' aria-labelledby='navbarDropdown'>";
    nav += "<a class='dropdown-item' href='" + root + "/townIndex/Inburn.html'>Shopping</a>";
    nav += "<a class='dropdown-item' href='" + root + "shops/taverns/DragonsClaw_Inburn.html'>Eats and Drinks</a>";
    nav += "</div>";
    nav += "</li>";

    nav += "<li class='nav-item dropdown'>";
    nav += "<a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
    nav += " Guilds";
    nav += "</a>";
    nav += "<div class='dropdown-menu' aria-labelledby='navbarDropdown'>";
    nav += " <a class='dropdown-item' href='" + root + "Guilds/Inburn/TheAgency.html'>The Agency</a>";
    //nav += " <a class='dropdown-item' href='" + root + "Guilds/Inburn/GuildOfMysticArts.html'>Academy of Mystic Arts</a>";
    //nav += " <a class='dropdown-item' href='" + root + "Guilds/Inburn/CDEU.html'>The Coalition</a>";
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