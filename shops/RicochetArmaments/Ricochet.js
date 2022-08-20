
$(document).ready(function () {

    var city = getUrlParameter('city');
    $('body').prepend(BuildHeader());

    ;
    if (city == "Sonridge") {
        Sonridge();
    } else if (city == "Arynsport") {
        Arynsport();
    } else if (city == "Abydos") {
        Abydos();
    } else {
        DefaultExclusives();
    }

    $('.hidden').hide();


    $('.wrapper').hover(function () {
        var cardID = $(this).attr('id');
        var jqueryHiddenID = "#hidden" + cardID;
        var jqueryImgID = "#img" + cardID;

        current_h = $(jqueryImgID)[0].height;
        current_w = $(jqueryImgID)[0].width;

        $(jqueryHiddenID).show();

        $(jqueryImgID).animate({ width: (current_w * 1.1), height: (current_h * 1.1) }, 300);


    }, function () {
        var cardID = $(this).attr('id');
        var jqueryHiddenID = "#hidden" + cardID;
        var jqueryImgID = "#img" + cardID;


        $(jqueryHiddenID).hide();
        $(jqueryImgID).animate({ width: (current_w), height: (current_h) }, 300);
    });


    function createOffset(i) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return offset = -1.2 + 1.2 * 2 * i;
        } else {
            return offset = -0.625 + 0.625 * 2 * i;
        }
    }

    anime.timeline({ loop: false })
        .add({
            targets: '.ml5 .line',
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700
        }).add({
            targets: '.ml5 .line',
            duration: 600,
            easing: "easeOutExpo",
            translateY: function (e, i, l) {
                var offset = createOffset(i);
                return offset + "em";
            }
        }).add({
            targets: '.ml5 .ampersand',
            opacity: [0, 1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=600'
        }).add({
            targets: '.ml5 .letters-left',
            opacity: [0, 1],
            translateX: ["0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=300'
        }).add({
            targets: '.ml5 .letters-right',
            opacity: [0, 1],
            translateX: ["-0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=600'
        });




});


function Sonridge() {

    var content1 = '<div class="img-holder">';
    content1 += '<img src="../../img/Armor/Sonridge/DrowLeatherArmor.png"  id="img1">';
    content1 += '<div class="hidden text-center" id="hidden1">';
    content1 += '<ul>';
    content1 += '<li><b>AC:</b> 14 + Dex</li>';
    content1 += '<li>Light Armor</li>';
    content1 += '<li>Add +2 to stealth when in the dark</li><li></li></ul></div></div>';
    content1 += '<h5>Drow Armor </h5>';
    content1 += '<p> 200gp </p>';

    $("#1").html(content1);

    var content2 = '<div class="img-holder">';
    content2 += '<img src="../../img/Armor/Sonridge/AnimatedArmor.png" id="img2">';
    content2 += '<div class="hidden text-center" id="hidden2">';
    content2 += '<ul>';
    content2 += '<li><b>AC:</b> 18</li>';
    content2 += '<li>Heavy Armor</li>';
    content2 += '<li><b>Stealth Disadvantage!</b></li>';
    content2 += '<li>Strength Requirement: 15</li>';
    content2 += '<li>Careful when you remove it. It likes to wander off.</li>';
    content2 += '</ul></div></div>';
    content2 += '<h5> Full Plate</h5>';
    content2 += '<p> 1,600gp</p>';


    $("#2").html(content2);

}

function Arynsport() {
    var content1 = '<div class="img-holder">';
    content1 += '<img src="../../img/Armor/Arynsport/breastplateGirl.png"  id="img1">';
    content1 += '<div class="hidden text-center" id="hidden1">';
    content1 += '<ul>';
    content1 += '<li><b>AC:</b> 14 + Dex</li>';
    content1 += '<li>(max dex = 2)</li>';
    content1 += '<li>Light Armor</li>';
    content1 += '<li></li><li></li></ul></div></div>';
    content1 += '<h5> Arynsport Breastplate </h5>';
    content1 += '<p> 450gp </p>';

    $("#1").html(content1);

    var content2 = '<div class="img-holder">';
    content2 += '<img src="../../img/Armor/Arynsport/fullplateMan.png" id="img2">';
    content2 += '<div class="hidden text-center" id="hidden2">';
    content2 += '<ul>';
    content2 += '<li><b>AC:</b> 18</li>';
    content2 += '<li>Heavy Armor</li>';
    content2 += '<li><b>Stealth Disadvantage!</b></li>';
    content2 += '<li>Strength Requirement: 15</li>';
    content2 += '<li>Resistance to fire damage</li>';
    content2 += '</ul></div></div>';
    content2 += '<h5> Coastal Plate Armor </h5>';
    content2 += '<p> 1,600gp</p>';

    $("#2").html(content2);


    var content3 = '<div class="img-holder">';
    content3 += '<img src="../../img/Armor/Arynsport/SailorPirate.png" id="img3">';
    content3 += '<div class="hidden text-center" id="hidden3">';
    content3 += '<ul>';
    content3 += '<li><b>AC:</b> AC 11 + dex</li>';
    content3 += '<li>Light Armor</li>';
    content3 += '<li><b>Dexterity Advantage</b></li>';
    content3 += '</ul></div></div>';
    content3 += '<h5> Sailor Uniform (colors and fit customizable) </h5>';
    content3 += '<p> 10gp</p>';

    $("#3").html(content3);

}

function Abydos() {
    var content1 = '<div class="img-holder">';
    content1 += '<img src="../../img/Armor/Abydos/boneShield.png"  id="img1">';
    content1 += '<div class="hidden text-center" id="hidden1">';
    content1 += '<ul>';
    content1 += '<li><b>AC:</b> +2</li>';
    content1 += '<li>If you have more than 1 HP, when hit, your HP will not fall below 1 HP.</li>';
    content1 += '<li><b>Requires Attunement</b></li>';
    content1 += '<li></li><li></li></ul></div></div>';
    content1 += '<h5> Lifeless Shield  </h5>';
    content1 += '<p> 50gp </p>';

    $("#1").html(content1);

    var content2 = '<div class="img-holder">';
    content2 += '<img src="../../img/Armor/Abydos/dragonSkull.png" id="img2">';
    content2 += '<div class="hidden text-center" id="hidden2">';
    content2 += '<ul>';
    content2 += '<li><b>AC:</b> +2</li>';
    content2 += '<li><b>Made from stone, not actual dragon skull</b></li>';
    content2 += '<li>Strength Requirement: 15</li>';
    content2 += '<li>May use a bonus action to strike an enemy (range 5ft) doing 1d6 piercing damage </li>';
    content2 += '</ul></div></div>';
    content2 += '<h5> Dragon Shield </h5>';
    content2 += '<p> 50gp</p>';

    $("#2").html(content2);


    var content3 = '<div class="img-holder">';
    content3 += '<img src="../../img/Armor/Abydos/desertClothing.png" id="img3">';
    content3 += '<div class="hidden text-center" id="hidden3">';
    content3 += '<ul>';
    content3 += '<li><b>AC:</b> AC 11 + dex</li>';
    content3 += '<li>Light Armor</li>';
    content3 += '<li><b>Dexterity Advantage</b></li>';
    content3 += '</ul></div></div>';
    content3 += '<h5> Traditional Abydanisian Clothing </h5>';
    content3 += '<p> 2gp</p>';

    $("#3").html(content3);

}



function DefaultExclusives() {
    var content1 = '<div class="img-holder">';
    content1 += '<img src="../../img/Armor/breastplateGirl.png"  id="img1">';
    content1 += '<div class="hidden text-center" id="hidden1">';
    content1 += '<ul>';
    content1 += '<li><b>AC:</b> 14 + Dex</li>';
    content1 += '<li>(max dex = 2)</li>';
    content1 += '<li>Light Armor</li>';
    content1 += '<li></li><li></li></ul></div></div>';
    content1 += '<h5> Aryansport Breastplate </h5>';
    content1 += '<p> 450gp </p>';

    $("#1").html(content1);

    var content2 = '<div class="img-holder">';
    content2 += '<img src="../../img/Armor/fullplateMan.png" id="img2">';
    content2 += '<div class="hidden text-center" id="hidden2">';
    content2 += '<ul>';
    content2 += '<li><b>AC:</b> 18</li>';
    content2 += '<li>Heavy Armor</li>';
    content2 += '<li><b>Stealth Disadvantage!</b></li>';
    content2 += '<li>Strength Requirement: 15</li>';
    content2 += '<li>Resistance to nacrotic damage</li>';
    content2 += '</ul></div></div>';
    content2 += '<h5> Elven Plate Armor </h5>';
    content2 += '<p> 1,600gp</p>';

    $("#2").html(content2);
}