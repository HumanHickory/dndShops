   function Sonridge() {

            var img1 = '<img src="../img/epicFlail/Sonridge/HammerOfThunder.png" />';
            img1 += '<h5>Hammer of Thunder</h5>';

            var text1 = '<h5>Warhammer</h5>';
            text1 += "<b>Damage:</b> 1d8 Bludgeoning <br>";
            text1 += "<b>Features:</b> Versatile(1d10) <br>";
            text1 += "<b>Special:</b> If wielder is hit with lightning or thunder damage, the warhammer will absorb it and deal 1d4 lightning damage per user level (up to 6d4) on next hit.<br>";
            text1 += "<b><span class='gold'> 100gp</span></b>";

            $("#img1").html(img1);
            $("#weaponDesc1").html(text1);

            var img2 = '<img src="../img/epicFlail/Sonridge/UnderdarkSword.png" />';
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

            var img1 = '<img src="../img/epicFlail/Oclul/Gythka.png" />';
            img1 += '<h5>Thri-Kreen Gythka</h5>';

            var text1 = '<h5>Gythka</h5>';
            text1 += "<b>Damage:</b> 1d8 Slashing <br>";
            text1 += "<b>Features:</b> Heavy <br>";
            text1 += "<b>Special:</b> The material is dasl, made from thri-kreen venom and sand. The shaft may be bone or wood."
            text1 += " You may use a bonus action to deal another 1d4 slashing, or 1d8 with double weapon master feat.</br>";
            text1 += "<b><span class='gold'> 400gp</span></b>";

            $("#img1").html(img1);
            $("#weaponDesc1").html(text1);

            var img2 = '<img src="../img/epicFlail/Oclul/TortoiseBlade.png" />';
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

            var img1 = '<img src="../img/epicFlail/Inburn/Claws.png" />';
            img1 += '<h5>Swamp Claws</h5>';

            var text1 = '<h5>Swamp Claws</h5>';
            text1 += "<b>Damage:</b> 1d4 Slashing + 1d4 Poison <br>";
            text1 += "<b>Features:</b> Light, Finese <br>";
            text1 += "<b>Special:</b> Very fast claws. Will crit on 19 or 20 </br>";
            text1 += "<b><span class='gold'> 30gp</span></b>";

            $("#img1").html(img1);
            $("#weaponDesc1").html(text1);

            var img2 = '<img src="../img/epicFlail/Inburn/TrollsClub.png" />';
            img2 += "<h5>Swamp King's Club</h5>";

            var text2 = '<h5>Warhammer</h5>';
            text2 += '<b>Damage:</b> 1d12 Bludgeoning <br>';
            text2 += '<b>Features:</b> Heavy <br>';
            text2 += '<b>Notes:</b> On crit, will also do 1d10 piercing damage.';
            text2 += '<b><span class="gold"> 50gp</span></b>';

            $("#img2").html(img2);
            $("#weaponDesc2").html(text2);
         
        }

        function DefaultExclusives() {

            var img1 = '<img src="../img/epicFlail/greatClub.png" />';
            img1 += '<h5>Great Club</h5>';

            var text1 = '<h5>Great Club</h5>';
            text1 += "<b>Damage:</b> 1d8 Bludgeoning <br>";
            text1 += "<b>Features:</b> Two-handed <br>";
            text1 += "<b><span class='gold'> 2sp</span></b>";

            $("#img1").html(img1);
            $("#weaponDesc1").html(text1);

            var img2 = '<img src="../img/epicFlail/handAxe.png" />';
            img2 += '<h5>Handaxe</h5>';

            var text2 = '<h5>Handaxe</h5>';
            text2 += '<b>Damage:</b> 1d6 Slashing <br>';
            text2 += '<b>Features:</b> Light, Thrown (20/60) <br>';
            text2 += '<b><span class="gold"> 5gp</span></b>';

            $("#img2").html(img2);
            $("#weaponDesc2").html(text2);


            var img3 = '<img src="../img/epicFlail/Javelin.png" />';
            img3 += '<h5>Javelin</h5>';

            var text3 = '<h5>Javelin</h5>';
            text3 += '<b>Damage:</b> 1d6 Piercing <br>';
            text3 += '<b>Features:</b> Thrown(30/120) <br>';
            text3 += '<b><span class="gold"> 5sp</span></b>';

            $("#img3").html(img3);
            $("#weaponDesc3").html(text3);
        }
