$(document).ready(function () {

    var city = getUrlParameter('city');

    if (city == "LastHarbor") {
        $('body').prepend(BuildMiniHeader());

    } else {
        $('body').prepend(BuildHeader());
    }

    if(city == "Abydos"){
        Abydos();
    }


});

function Abydos(){
    getSpell(4);
    getSpell(3);



}

function getSpell(spellId){
    $.ajax({
        url: baseUrl + "Spell/" + spellId,
        type: 'GET',
        success: function (spell) {
            var html = CreateSpellScrollItem(spell, "20gp");

            $('#uniqueItems').append(html);
        },
        error: function (request, error) {
            alert("Failed to retrieve spell");

        }
    });

};

function ItemHeader(idNumber, dndBeyondLink, itemName, minorDefinition, cost) {

    var html = '<div class="accordion black pb-3" id="accordion' + idNumber + '">'
    html += '<div class="card z-depth-0 bordered">';
    html += '<div class="card-header" id="headingOne' + idNumber + '">';
    html += '<h5 class="mb-0">';
    html += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse' + idNumber + '" aria-expanded="true" aria-controls="collapse' + idNumber + '">';
    html += '<a href="' + dndBeyondLink + '" class="plain" target="_blank">' + itemName + '</a> <span class="spellSubtext"> ' + minorDefinition + '';
    html += '</span><span class="blue">' + cost + '</span>';
    html += '</button></h5></div>';

    return html;
}

function CreateSpellScrollItem(spell, cost) {

    var components = "";
    
    if(spell.isMaterial){
        components += "M "
    }
    if(spell.isSomatic){
        components += "S "
    }
    if(spell.isVerbal){
        components += "V "
    }
    if(components == ""){
        components = "-";
    }

    var classes = "";

    $.each(spell.classes, function(i, value){
        classes += value.className + " ";
    });

    var html = '<div class="card z-depth-0 bordered">';
    html += '<div class="card-header" id="heading' +  spell.id + '">';
    html += '<h5 class="mb-0">';
    html += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse' +  spell.id + '" aria-expanded="true" aria-controls="collapse' + spell.id + '">';
    html += '<a href="' + spell.dnDBeyondLink + '" class="plain" target="_blank">' + spell.name + '</a> <span class="spellSubtext"> ' + spell.levelName + ' Level Spell Scroll';
    html += '</span><span class="blue"> ' + cost + '</span>';
    html += '</button></h5></div>';

    html += '<div id="collapse' +  spell.id + '" class="collapse" aria-labelledby="heading' + spell.id + '" data-parent="#uniqueItems">';
    html += '<div class="card-body">';
    html += '<b>Components:</b> ' + components + ' <br>';
    html += '<b>Range: </b>' + spell.range + '<br>';
    html += '<b>Ritual: </b>' + spell.isRitual + '<br>';
    html += ' <b>Concentration: </b> ' + spell.isConcentration + ' <br>';
    html += '<b>Classes: </b> ' + classes + ' <br>';
    html += spell.description;
    html += '</div></div></div>';

    return html;
}