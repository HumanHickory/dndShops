
var count = 1;
$(document).ready(function () {
    itemArray = [82, 84, 85, 87, 88, 90, 91];

    $.each(itemArray, function(){
        getItem(this);
    });
});


function getItem(ItemId) {
    $.ajax({
        url: baseUrl + "Item/" + ItemId,
        type: 'GET',
        success: function (item) {
            var html = ItemFactory(item);

            $('#needfulThings').append(html);
        },
        error: function (request, error) {
            console.log("Failed to retrieve item " + ItemId);

        }
    });
}



function ItemFactory(item) {

    switch (count) {
        case 1:
            divColor = "primary";
            break;
        case 2:
            divColor = "secondary";
            break;
        case 3:
            divColor = "tertiary"
            break;
        case 4:
            divColor = "quaternary"
            break;
    }

    var attunement = "";

    if(item.requiresAttunement){
        attunement = "Attunement required, ";
    }

    var html = '<div class="'+divColor+' curved my-1">';
    html += '<h4>' + item.name + ' <span class="currency">' + item.price + 'gp</span></h4>';
    html += '<small><i>' + item.rarityName + ', ' + attunement + item.weight + 'lbs</i></small>';
    html += '<p>' + item.description + '</p>';
    html += '</div>';

    count = count < 3 ? count + 1 : 1;


    return html;
}

