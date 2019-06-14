$(function() {
  var event = ".mission-1";
  $( ".mission" )
    .on('mouseenter click', function() {
      eventNumber = $(this).data("mission");
      eventName = ".mission-";
      event = eventName + eventNumber;
      if ($(event).not($('.show'))) {
        $( event ).addClass('show');
        $( "#cadran-milieu" ).addClass('start');
        $( ".go" ).attr('data-start', eventNumber);
      }

      if ($( ":not("+event+")" ).hasClass('show')) {
        $( ":not("+event+")" ).removeClass('show');
      }
    });
});

$( window ).on( "load", function() {
	$(".loader").delay( 1500 ).fadeOut("10000");
});
