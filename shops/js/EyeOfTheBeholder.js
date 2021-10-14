$(document).ready(function () {

    var city = getUrlParameter('city');

    if (city == "LastHarbor") {
        $('body').prepend(BuildMiniHeader());

    } else {
        $('body').prepend(BuildHeader());
    }

    if (city == "Abydos") {
        Abydos();
    } else if (city == "LastHarbor") {
        LastHarbor();
    }


});

function Abydos() {
    getSpell(4, "75gp");
    getItem(74, "540gp");
}


function LastHarbor() {
    getSpell(3, "75gp");
    getItem(76, "510gp");
    getItem(78, "5,217gp");

}

function getSpell(spellId, cost) {
    $.ajax({
        url: baseUrl + "Spell/" + spellId,
        type: 'GET',
        success: function (spell) {
            var html = CreateSpellScrollItem(spell, cost);
            console.log(spell);

            $('#uniqueItems').append(html);
        },
        error: function (request, error) {
            alert("Failed to retrieve spell.");
        }
    });

};

function getItem(ItemId, cost) {
    $.ajax({
        url: baseUrl + "Item/" + ItemId,
        type: 'GET',
        success: function (item) {
            var html = CreateItem(item, cost);
            
            $('#uniqueItems').append(html);
        },
        error: function (request, error) {
            alert("Failed to retrieve item " + ItemId );

        }
    });
}

function CreateItem(item, cost) {


    var html = '<div class="card z-depth-0 bordered">';
    html += '<div class="card-header" id="heading' + item.id + '">';
    html += '<h5 class="mb-0">';
    html += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse' + item.id + '" aria-expanded="true" aria-controls="collapse' + item.id + '">';
    html += item.name + '<span class="spellSubtext"> ' + item.rarityName + ' Magic Item';
    html += '</span><span class="blue"> ' + cost + '</span>';
    html += '</button></h5></div>';

    html += '<div id="collapse' + item.id + '" class="collapse" aria-labelledby="heading' + item.id + '" data-parent="#uniqueItems">';
    html += '<div class="card-body">';
    html += item.description + "<br><br> <b>Weight:</b> "  + item.weight + "lbs";
    html += '</div></div></div>';

    return html;
}

function CreateSpellScrollItem(spell, cost) {

    var components = "";

    if (spell.isMaterial) {
        components += "M "
    }
    if (spell.isSomatic) {
        components += "S "
    }
    if (spell.isVerbal) {
        components += "V "
    }
    if (components == "") {
        components = "-";
    }

    var classes = "";

    $.each(spell.classes, function (i, value) {
        classes += value.className + " ";
    });

    var html = '<div class="card z-depth-0 bordered">';
    html += '<div class="card-header" id="heading' + spell.id + '">';
    html += '<h5 class="mb-0">';
    html += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse' + spell.id + '" aria-expanded="true" aria-controls="collapse' + spell.id + '">';
    html += spell.name + '<span class="spellSubtext"> ' + spell.levelName + ' Level Spell Scroll';
    html += '</span><span class="blue"> ' + cost + '</span>';
    html += '</button></h5></div>';

    html += '<div id="collapse' + spell.id + '" class="collapse" aria-labelledby="heading' + spell.id + '" data-parent="#uniqueItems">';
    html += '<div class="card-body">';
    html += '<b>Components:</b> ' + components + ' <br>';
    html += '<b>Range: </b>' + spell.range + '<br>';
    html += '<b>Ritual: </b>' + spell.isRitual + '<br>';
    html += ' <b>Concentration: </b> ' + spell.isConcentration + ' <br>';
    html += '<b>Classes: </b> ' + classes + ' <br><br>';
    html += spell.description + "</br></br>";
    html += '<a href="' + spell.dnDBeyondLink + '" class="plain" target="_blank">Read More</a>';
    html += '</div></div></div>';

    return html;
}