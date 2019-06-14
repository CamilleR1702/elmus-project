$(function() {
  var event = ".mission-1";
  $( ".mission" )
    .on('mouseenter click', function() {
      eventNumber = $(this).data("mission");
      eventName = ".mission-";
      event = eventName + eventNumber;
      if ($(event).not($('.show'))) {
        $( "#cadran-gauche "+event+" " ).addClass('show');
        $( ".go" ).attr('data-start', eventNumber);
      }
      if ($( ":not("+event+")" ).hasClass('show')) {
        $( "#cadran-gauche :not("+event+")" ).removeClass('show');
        $( "#cadran-milieu" ).removeClass('start');
      }
      if ($("#cadran-droite "+event+"").hasClass('show')){
        $( "#cadran-milieu" ).addClass('start');
      }
    });
});

$(function() {
  $( ".go" )
    .on('click', function() {
      if (($('.start .go').attr('data-start') === '1'))  {
          // TODO: enter your code...
          window.location = "foret2";
      } else if (($('.start .go').attr('data-start') === '2'))  {
          // TODO: enter your code...
          window.location = "earth-2";
      } else if (($('.start .go').attr('data-start') === '3')) {
          // TODO: enter your code...
          console.log('Nop');
      } else {
          // do nothing
      }
    });
});
