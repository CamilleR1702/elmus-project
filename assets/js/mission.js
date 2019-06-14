
$(function() {
  $( ".go" )
    .on('click', function() {
      if (($('.start .go').attr('data-start') === '1'))  {
          // TODO: enter your code...
          window.location = "earth-1";
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