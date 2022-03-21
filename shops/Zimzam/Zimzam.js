var isPrimary = true;
$(document).ready(function () {

    var city = getUrlParameter('city');
    $('body').prepend(BuildHeader());

    if (city == "Arynsport") {
        Arynsport();
    } else if (city == "Rivvenastorp"){
        Rivvenastorp();
    }




    function Arynsport() {

        var itemName1 = "Wind Up Lantern"
        var itemPrice1 = "10gp";
        var itemDesc1 = "Need everlasting light? Don't want to deal with annoying and dangerous fire? Try the wind up lantern! Simply wind the crank for 1 minute and get 1 hour of light! Warning: once wound the lantern cannot be turned off unless broken."

        var itemName2 = "Clockwork Box with Lever";
        var itemPrice2 = "5gp";
        var itemDesc2 = "Box with lever provides hours of entertainment. Simply flip the switch on the top to activate it, and the box will automatically switch it back off! What could this be good for? Your guess is as good as mine! 20% discount storewide for anyone who can come up with a good use for this."

        var itemName3 = "Wind Up Octopus";
        var itemPrice3 = "15gp";
        var itemDesc3 = "A tiny octopus that fits in your hand, they seemingly come to life when wound up. They will walk across the ground, they can swim, catch small fish, and even spray a very small amount of ink. The wind up function lasts 1 minute."

        var html = CreateItemBlock(itemName1, itemPrice1, itemDesc1);
        html += CreateItemBlock(itemName2, itemPrice2,itemDesc2);
        html += CreateItemBlock(itemName3,itemPrice3,itemDesc3);

        $('#items').html(html);

    }

    function Rivvenastorp() {
        var itemName1 = "Wind Up Lantern"
        var itemPrice1 = "10gp";
        var itemDesc1 = "Need everlasting light? Don't want to deal with annoying and dangerous fire? Try the wind up lantern! Simply wind the crank for 1 minute and get 1 hour of light! Warning: once wound the lantern cannot be turned off unless broken. (2lbs)"

        var itemName2 = "Clockwork Box with Lever";
        var itemPrice2 = "5gp";
        var itemDesc2 = "Box with lever provides hours of entertainment. Simply flip the switch on the top to activate it, and the box will automatically switch it back off! What could this be good for? Your guess is as good as mine! 20% discount storewide for anyone who can come up with a good use for this."

        var itemName3 = "Wind Up Octopus";
        var itemPrice3 = "15gp";
        var itemDesc3 = "A tiny octopus that fits in your hand, they seemingly come to life when wound up. They will walk across the ground, they can swim, catch small fish, and even spray a very small amount of ink. The wind up function lasts 1 minute."


        var itemName4 = "Clockwork Healer Bee";
        var itemPrice4 = "25gp";
        var itemDesc4 = "A clockwork bee that can be loaded with 2 doses of any healing potion. When wound up, it will deliver the healing potion up to 60ft away. Warning: it does sting to inject potion. Comes pre-filled"

        var itemName5 = "Automatic Dart Shooter";
        var itemPrice5 = "50gp";
        var itemDesc5 = "A wind up device. The user may fill the device with 1 to 50 darts. Once wound, the user has 1 minute to get out of the way. Then, the device will begin shooting darts in every circle, shooting up to 3 darts each round in one direction and then changing directions. It will shoot all the darts it is loaded with and cannot be stopped unless broken, frozen, etc. (5lbs)";

        var itemName6 = "Clockwork Spider with remote control";
        var itemPrice6 = "30gp";
        var itemDesc6 = "A wind up spider that will function for 5 minutes and can be controlled with a remote control. It will record sound for those 5 minutes. The recording can be listened to as many times as desired, but will be recorded over the next time the spider is used.";

        var itemName7 = "Watch";
        var itemPrice7 = "2gp";
        var itemDesc7 = "Keeps track of time, but looks way cooler than other watches.";

        var itemName8 = "Clockwork Bird";
        var itemPrice8 = "75gp";
        var itemDesc8 = "A one of a kind bird, it is capable of flying great distances with letters, recording sound up to 1 hour and playing it back, functioning as an alarm, and taking basic commands such as 'fetch' and 'siren' and 'deliver to' and 'run'. Bird winds itself while flying, so it will not stop working unless broken or not used in a long time. Rewinding takes 30 minutes.";

        var itemName9 = "Crystal Ball of Mockery:  Infused Clockwork";
        var itemPrice9 = "50gp";
        var itemDesc9 = "A small clockwork ball with a crystal cover to make it look like a crystal ball. When held with 2 hands, the ball will begin unleash a string of insults laced with subtle enchantments. The holder must make a wisdom saving throw of DC 13 or take 1d4 psychic damage and ahve disadvantage on their next attack roll within 1 minute. (1lb)";

        var itemName10 = "Music Box:  Infused Clockwork";
        var itemPrice10 = "50gp";
        var itemDesc10 = "A small box that, when wound up and opened, will have a ballerina spinning in a circle while music plays. The music is enchanted with the sleep spell. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren’t affected by this spell. ";


        var itemName11 = "Presto:  Infused Clockwork";
        var itemPrice11 = "75gp";
        var itemDesc11 = "A tiny wizard infused with Prestidigitation. He can hold up to 3 prestidigiation effects, each with a seperate trigger.";


        var html = CreateItemBlock(itemName1, itemPrice1, itemDesc1);
        html += CreateItemBlock(itemName2, itemPrice2,itemDesc2);
        html += CreateItemBlock(itemName3,itemPrice3,itemDesc3);
        html += CreateItemBlock(itemName4,itemPrice4,itemDesc4);
        html += CreateItemBlock(itemName5,itemPrice5,itemDesc5);
        html += CreateItemBlock(itemName6,itemPrice6,itemDesc6);
        html += CreateItemBlock(itemName7,itemPrice7,itemDesc7);
        html += CreateItemBlock(itemName8,itemPrice8,itemDesc8);
        html += CreateItemBlock(itemName9,itemPrice9,itemDesc9);
        html += CreateItemBlock(itemName10,itemPrice10,itemDesc10);
        html += CreateItemBlock(itemName11,itemPrice11,itemDesc11);

        $('#items').html(html);
    }



    function CreateItemBlock(itemName, itemPrice, itemDesc) {
        var html = "";

        if (isPrimary) {
            html += '<div class="primary p-3">';
        } else {
            html += '<div class="main p-3">';
        }

        html += '<h3>' + itemName + '<span class="gold"> ' + itemPrice + '</span></h3>';
        html += '<p>' + itemDesc + '</p></div>';

        isPrimary = !isPrimary;

        return html;

    }

});