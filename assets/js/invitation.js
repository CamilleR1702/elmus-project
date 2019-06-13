$(function() {
  var event = ".service-1";
  $( ".service-title" )
    .on('mouseenter click', function() {
      eventNumber = $(this).data("service");
      eventName = ".service-";
      event = eventName + eventNumber;
      if ($(event).not($('.move'))) {
        $( event ).addClass('move');
      }
      if ($( "div:not("+event+")" ).hasClass('move')) {
        $( "div:not("+event+")" ).removeClass('move');
      }
    });
});
