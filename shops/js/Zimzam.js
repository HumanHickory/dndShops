var isPrimary = true;
$(document).ready(function () {

    var city = getUrlParameter('city');
    $('body').prepend(BuildHeader());

    if (city == "Arynsport") {
        Arynsport();
    }




    function Arynsport() {

        var itemName1 = "Wind Up Lantern"
        var itemDesc1 = "Need everlasting light? Don't want to deal with annoying and dangerous fire? Try the wind up lantern! Simply wind the crank for 1 minute and get 1 hour of light! Warning: once wound the lantern cannot be turned off unless broken."

        var itemName2 = "Clockwork Box with Lever";
        var itemDesc2 = "Box with lever provides hours of entertainment. Simply flip the switch on the top to activate it, and the box will automatically switch it back off! What could this be good for? Your guess is as good as mine! 20% discount storewide for anyone who can come up with a good use for this."

        var itemName3 = "Wind Up Octopus";
        var itemDesc3 = "A tiny octopus that fits in your hand, they seemingly come to life when wound up. They will walk across the ground, they can swim, catch small fish, and even spray a very small amount of ink. The wind up function lasts 1 minute."

        var html = CreateItemBlock(itemName1, itemName2);
        html += CreateItemBlock(itemName2, itemDesc2);
        html += CreateItemBlock(itemName3, itemDesc3);

        $('#items').html(html);

    }

    function CreateItemBlock(itemName, itemDesc) {
        var html = "";

        if (isPrimary) {
            html += '<div class="primary p-3">';
        } else {
            html += '<div class="main p-3">';
        }

        html += '<h3>' + itemName + '</h3>';
        html += '<p>' + itemDesc + '</p></div>';

        isPrimary = !isPrimary;

        return html;

    }

});