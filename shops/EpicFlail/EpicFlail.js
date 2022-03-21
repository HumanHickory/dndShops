$(document).ready(function(){

    $('body').prepend(BuildMiniHeader());

    $(function () {
        var city = getUrlParameter('city');
        if (city == "Sonridge") {
            Default();
        }else if (city == "Oclul") {
            Oclul();
        } else if (city == "Inburn") {
            Inburn();
        }else if (city == "Arynsport") {
            Arynsport();
        }else if (city == "Abydos") {
            Abydos();
        } else if (city == "Burterran") {
            Burterran();
        }else {
            DefaultExclusives();
        }
    });
});

function Sonridge() {
//Not using this one right now because of the magical items. Change the call method back to sonridge when you fix this. 

    var img1 = '<img src="../../img/epicFlail/Sonridge/HammerOfThunder.png" />';
    img1 += '<h5>Hammer of Thunder</h5>';

    var text1 = '<h5>Warhammer</h5>';
    text1 += "<b>Damage:</b> 1d8 Bludgeoning <br>";
    text1 += "<b>Features:</b> Versatile(1d10) <br>";
    text1 += "<b>Special:</b> If wielder is hit with lightning or thunder damage, the warhammer will absorb it and deal 1d4 lightning damage per user level (up to 6d4) on next hit.<br>";
    text1 += "<b><span class='gold'> 100gp</span></b>";

    $("#img1").html(img1);
    $("#weaponDesc1").html(text1);

    var img2 = '<img src="../../img/epicFlail/Sonridge/UnderdarkSword.png" />';
    img2 += '<h5>Drow Long Sword</h5>';

    var text2 = '<h5>Longsword</h5>';
    text2 += '<b>Damage:</b> 1d8 Slashing <br>';
    text2 += '<b>Features:</b> Versatile(1d10) <br>';
    text2 += '<b>Notes:</b> +1 to damage. Rare/expensive in most parts of the world. +2 to charisma checks towards those who are friendly to drow. -2 to charisma checks';
    text2 += 'towards enemies of the drow.';
    text2 += '<b><span class="gold"> 15gp</span></b>';

    $("#img2").html(img2);
    $("#weaponDesc2").html(text2);


    var img3 = '<img src="https://via.placeholder.com/500x500.png?text=Invisible" />';
    img3 += '<h5>Dagger of Invisibility</h5>';

    var text3 = '<h5>Dagger</h5>';
    text3 += '<b>Damage:</b> 1d4 Piercing <br>';
    text3 += '<b>Features:</b> Completely invisible, but can be felt or magically identified. <br>';
    text3 += '<b><span class="gold"> 20gp</span></b>';

    $("#img3").html(img3);
    $("#weaponDesc3").html(text3);
}

function Oclul() {

    var img1 = '<img src="../../img/epicFlail/Oclul/Gythka.png" />';
    img1 += '<h5>Thri-Kreen Gythka</h5>';

    var text1 = '<h5>Gythka</h5>';
    text1 += "<b>Damage:</b> 1d8 Slashing <br>";
    text1 += "<b>Features:</b> Heavy <br>";
    text1 += "<b>Special:</b> The material is dasl, made from thri-kreen venom and sand. The shaft may be bone or wood."
    text1 += " You may use a bonus action to deal another 1d4 slashing, or 1d8 with double weapon master feat.</br>";
    text1 += "<b><span class='gold'> 400gp</span></b>";

    $("#img1").html(img1);
    $("#weaponDesc1").html(text1);

    var img2 = '<img src="../../img/epicFlail/Oclul/TortoiseBlade.png" />';
    img2 += '<h5>Tortoise Blade</h5>';

    var text2 = '<h5>Dagger</h5>';
    text2 += '<b>Damage:</b> 1d6 Slashing <br>';
    text2 += '<b>Features:</b> Light, Special <br>';
    text2 += '<b>Notes:</b> A tortoise blade over a footlong dagger. When not attacking, can be used defensively and adds +1 to AC.';
    text2 += '<b><span class="gold"> 300gp</span></b>';

    $("#img2").html(img2);
    $("#weaponDesc2").html(text2);

}

function Inburn() {

    var img1 = '<img src="../../img/epicFlail/Inburn/Claws.png" />';
    img1 += '<h5>Swamp Claws</h5>';

    var text1 = '<h5>Swamp Claws</h5>';
    text1 += "<b>Damage:</b> 1d4 Slashing + 1d4 Poison <br>";
    text1 += "<b>Features:</b> Light, Finese <br>";
    text1 += "<b>Special:</b> Very fast claws. Will crit on 19 or 20 </br>";
    text1 += "<b><span class='gold'> 30gp</span></b>";

    $("#img1").html(img1);
    $("#weaponDesc1").html(text1);

    var img2 = '<img src="../../img/epicFlail/Inburn/TrollsClub.png" />';
    img2 += "<h5>Swamp King's Club</h5>";

    var text2 = '<h5>Warhammer</h5>';
    text2 += '<b>Damage:</b> 1d12 Bludgeoning <br>';
    text2 += '<b>Features:</b> Heavy <br>';
    text2 += '<b>Notes:</b> On crit, will also do 1d10 piercing damage.';
    text2 += '<b><span class="gold"> 50gp</span></b>';

    $("#img2").html(img2);
    $("#weaponDesc2").html(text2);

}

function Abydos() {

    var img1 = '<img src="../../img/epicFlail/abydos/ramCrossbow.png" />';
    img1 += '<h5>Desert Crossbow</h5>';

    var text1 = '<h5>Heavy Crossbow</h5>';
    text1 += "<b>Damage:</b> 1d10 Piercing <br>";
    text1 += "<b>Features:</b> Ammunition (100/400), Heavy, Two-handed <br>";
    text1 += "<b>Special:</b>There is a 1d6 (on 6) chance this weapon will do an additional 1d10 damage. </br>";
    text1 += "<b><span class='gold'> 75gp</span></b>";

    $("#img1").html(img1);
    $("#weaponDesc1").html(text1);

    var img2 = '<img src="../../img/epicFlail/abydos/shadowGlass.png" />';
    img2 += "<h5>Shadow Glass Dagger</h5>";

    var text2 = '<h5>Dagger</h5>';
    text2 += '<b>Damage:</b> 1d4 piercing <br>';
    text2 += '<b>Features:</b> Thrown(20/60), Light <br>';
    text2 += '<b>Notes:</b> Does an additional 1d8 damage to undead';
    text2 += '<b><span class="gold"> 6gp</span></b>';

    $("#img2").html(img2);
    $("#weaponDesc2").html(text2);

}


function DefaultExclusives() {

    var img1 = '<img src="../../img/epicFlail/greatClub.png" />';
    img1 += '<h5>Great Club</h5>';

    var text1 = '<h5>Great Club</h5>';
    text1 += "<b>Damage:</b> 1d8 Bludgeoning <br>";
    text1 += "<b>Features:</b> Two-handed <br>";
    text1 += "<b><span class='gold'> 2sp</span></b>";

    $("#img1").html(img1);
    $("#weaponDesc1").html(text1);

    var img2 = '<img src="../../img/epicFlail/handAxe.png" />';
    img2 += '<h5>Handaxe</h5>';

    var text2 = '<h5>Handaxe</h5>';
    text2 += '<b>Damage:</b> 1d6 Slashing <br>';
    text2 += '<b>Features:</b> Light, Thrown (20/60) <br>';
    text2 += '<b><span class="gold"> 5gp</span></b>';

    $("#img2").html(img2);
    $("#weaponDesc2").html(text2);


    var img3 = '<img src="../../img/epicFlail/Javelin.png" />';
    img3 += '<h5>Javelin</h5>';

    var text3 = '<h5>Javelin</h5>';
    text3 += '<b>Damage:</b> 1d6 Piercing <br>';
    text3 += '<b>Features:</b> Thrown(30/120) <br>';
    text3 += '<b><span class="gold"> 5sp</span></b>';

    $("#img3").html(img3);
    $("#weaponDesc3").html(text3);
}

function Arynsport() {

    var img1 = '<img src="../../img/epicFlail/Arynsport/SerratedDagger.png" />';
    img1 += '<h5>Serrated Dagger</h5>';

    var text1 = '<h5>Dagger</h5>';
    text1 += "<b>Damage:</b> 1d4 Piercing <br>";
    text1 += "<b>Features:</b> Light, Throw(20/60) <br>";
    text1 += "<b>Special:</b> If impaled by dagger, take 1d4 damage on exit of dagger or spend 1 hour removing dagger carefully </br>";
    text1 += "<b><span class='gold'> 4gp</span></b>";

    $("#img1").html(img1);
    $("#weaponDesc1").html(text1);

    var img2 = '<img src="../../img/epicFlail/net.png" />';
    img2 += "<h5>Lucky Net</h5>";

    var text2 = '<h5>Net</h5>';
    text2 += '<b>Damage:</b> - <br>';
    text2 += '<b>Features:</b> Special, Thrown (5/15) <br>';
    text2 += '<b>Notes:</b> Reroll on failure once per rest, must take new roll.';
    text2 += '<b><span class="gold"> 50gp</span></b>';

    $("#img2").html(img2);
    $("#weaponDesc2").html(text2);

}


function Burterran() {

    var img1 = '<img src="../../img/epicFlail/Burterran/FireAxe.png" />';
    img1 += '<h5>Volcanic Axe</h5>';

    var text1 = '<h5>Great Axe</h5>';
    text1 += "<b>Damage:</b> 1d12 Slashing <br>";
    text1 += "<b>Features:</b> Heavy, Two-handed <br>";
    text1 += "<b>Special:</b> On hit, the target must make DC 15 (Dex) save or catch fire. 1d4 fire damage per turn. Target may use an action to extingish flame. </br>";
    text1 +="<b>Attunement Required</b></br>";
    text1 += "<b><span class='gold'> 50gp</span></b>";

    $("#img1").html(img1);
    $("#weaponDesc1").html(text1);

    var img2 = '<img src="../../img/epicFlail/Burterran/WildfireScyth.png" />';
    img2 += "<h5>Wildfire Scythe</h5>";

    var text2 = '<h5>Scythe</h5>';
    text2 += '<b>Damage:</b> 1d10 slashing <br>';
    text2 += '<b>Features:</b> Heavy, Two-Handed, Reach <br>';
    text2 += '<b>Special:</b> On hit, 1d12 chance (1d10 druids). Hits enemies within 20ft radius. DC12 Dex. On fail, take 2d6 fire damage. Half on success. </br>';
    text2 += "<b>Attunement Required</b></br>";
    text2 += '<b><span class="gold"> 50gp</span></b>';

    $("#img2").html(img2);
    $("#weaponDesc2").html(text2);

}
