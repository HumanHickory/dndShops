

$(document).ready(function () {

    var city = getUrlParameter('city');
    $('body').prepend(BuildHeader());


   if(city == "Sonridge"){ 
    Sonridge();
   }

});

function Sonridge() {
    var mountHtml = WarHorse();
    mountHtml += RidingHorse();
    mountHtml += DraftHorse();
    mountHtml += Donkey();
    mountHtml += Pony();
    mountHtml += Mastiff(false);

    $('#mounts').html(mountHtml);

    var petStory = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var petHtml = CreatePets("mastiff.jpg", "Carl", petStory, "20gp");

    $('#pets').html(petHtml);
}

function Arynsport(){
    
    $("#storeName").text("A Load of Ship");
}


function CreateMounts(imageName, mountName, cost, speed, capacity) {
    var html = '<div class="col-lg-4">';

    html += '<img src="../img/stables/' + imageName + '" width="100%">';
    html += '<h5 class="mt-3">' + mountName + '</h5>';
    html += '<p><b>Cost: </b>' + cost + '</p>';
    html += '<p><b>Speed: </b>' + speed + ' </p>';
    html += '<p><b>Capacity: </b>' + capacity + '</p></div>';

    return html;
}

function CreatePets(imageName, petsName, story, cost){
    var html = '<div class="col-lg-6">';
    html += '<img src="../img/stables/' + imageName + '" width="100%">';
    html += '</div><div class="col-lg-6 primary">';
    html += ' <h2 class="text-center mt-3 secondary-text"><b>' + petsName +'</b></h2>';
    html += '<p>' + story +'</p>';
    html += '<p class="secondary-text"><b>' + cost +'</b></p>';
    html += '</div>';

    return html;
}

function WarHorse() {
    var image = "warHorse.jpg";
    var text = "War Horse";
    var cost = "400gp";
    var capacity = "540 lb.";
    var speed = "60ft";
    return CreateMounts(image, text, cost, speed, capacity);
}

function RidingHorse(){
    var image = "ridingHorse.jpeg";
    var text = "Riding Horse";
    var cost = "75gp";
    var capacity = "480 lb.";
    var speed = "60ft";
    return CreateMounts(image, text, cost, speed, capacity);
}


function DraftHorse(){
    var image = "drafthorse.jpg";
    var text = "Draft Horse";
    var cost = "50gp";
    var capacity = "540 lb.";
    var speed = "40ft";
    return CreateMounts(image, text, cost, speed, capacity);
}

function Pony(){
    var image = "pony.jpg";
    var text = "Pony";
    var cost = "30gp";
    var capacity = "225 lb.";
    var speed = "40ft";
    return CreateMounts(image, text, cost, speed, capacity);
}

function Donkey(){
    var image = "mule.jpg";
    var text = "Donkey/Mule";
    var cost = "8gp";
    var capacity = "420 lb.";
    var speed = "40ft";
    return CreateMounts(image, text, cost, speed, capacity);
}

function Mastiff(isTibetan){

    if(!isTibetan){
        var image = "mastiff.jpg";
        var text = "Mastiff";
    } else {
        var image = "tibetanMastiff.jpg";
        var text = "Tibetan Mastiff";
    }

    var cost = "25gp";
    var capacity = "195 lb.";
    var speed = "40ft";
    return CreateMounts(image, text, cost, speed, capacity);
}

function Camel(){
    var image = "camel.jpg";
    var text = "Camel";
    var cost = "50gp";
    var capacity = "480 lb.";
    var speed = "40ft";
    return CreateMounts(image, text, cost, speed, capacity);
}

function Elephant(){
    var image = "elephant.jpg";
    var text = "Elephant";
    var cost = "200gp";
    var capacity = "1,320 lb.";
    var speed = "40ft";
    return CreateMounts(image, text, cost, speed, capacity);
}