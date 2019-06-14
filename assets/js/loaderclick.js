$( "#btnNext" ).on( "click", function() {
    console.log('CLICK CLICK CLICK');
    $(".loader").css('display', 'block').animate({
        opacity: 1,
    }, 1000);

    setTimeout(
        function(){ window.location =  './cosmos.html' }, 3000
    );

});

$( "#cosmosNextScreen" ).on( "click", function() {
    console.log('CLICK CLICK CLICK');
    $(".loader").css('display', 'block').animate({
        opacity: 1,
    }, 1000);

    setTimeout(
        function(){ window.location =  './earth.html' }, 3000
    );

});

$( "#btnMission2 show" ).on( "click", function() {
    console.log('CLICK CLICK CLICK');
    $(".loader").css('display', 'block').animate({
        opacity: 1,
    }, 1000);

    setTimeout(
        function(){ window.location =  './ocean-coast.html' }, 3000
    );

});