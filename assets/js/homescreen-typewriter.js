$( document ).ready(function() {
    var i = 0;
    var j = 0;
    var k = 0;
    var txt1 = 'Journal de bord du Capitaine';
    var txt2 = 'JOUR 1 DU PROJET ELMUS';
    var txt3 = 'Ma mission pour rétablir la planète dénommée “Terre” peut enfin débuter. La mission est simple : déposer les organismes JarJar et Weasley dans les différents points stratégiques de la planète. Jarjar s’occupera de remettre en place l’écosystème terrestre et Weasley l’écosystème marin. La réussite du projet Elmus dépend à présent de moi.';
    var speed = 30;

    function typeWriter1() {
        if (i < txt1.length) {
            document.getElementById("title1").innerHTML += txt1.charAt(i);
            i++;
            setTimeout(typeWriter1, 30);
        }
    }
    function typeWriter2() {
        if (j < txt2.length) {
            document.getElementById("title2").innerHTML += txt2.charAt(j);
            j++;
            setTimeout(typeWriter2, 30);
        }
    }
    function typeWriter3() {
        if (k < txt3.length) {
            document.getElementById("title3").innerHTML += txt3.charAt(k);
            k++;
            setTimeout(typeWriter3, speed);
        }
    }

    $( "#goPlay" ).on( "click", function() {
        console.log( $( this ).text() );
        $( "#gradientPurple, .figure-smoke, .cloud-figure, .text-content, .spaceship-figure, .next-btn" ).addClass( "animated" );
        $( ".main-title, .btn-cta" ).addClass( "fadeOut" );

        setTimeout(
            function(){ typeWriter1(); }, 3000
        );

        setTimeout(
            function(){ typeWriter2(); }, 4200
        );

        setTimeout(
            function(){ typeWriter3(); }, 5300
        );
    });
});