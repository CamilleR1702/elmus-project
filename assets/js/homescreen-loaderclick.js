$( "#btnNext" ).on( "click", function() {
    console.log('CLICK CLICK CLICK');
    $(".loader").css('display', 'block').animate({
        opacity: 1,
    }, 1000);



   setTimeout(
        function(){ window.location =  './earth.html' }, 3000
    );

});