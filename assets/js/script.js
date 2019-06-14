// Fonction qui fait bouger Elmus
function elmus() {
  $('#elmus').addClass('active');
  setTimeout(function(){
    $('#elmus').removeClass('active');
  }, 1000);
}

// Gestion aléatoire du temps
(function elmusRand() {
  elmusTiming = Math.ceil(Math.random() * 5) * 1000;
  setTimeout(function(){
    elmus();
    elmusRand();
  }, elmusTiming);
}());

setInterval(function(){
  $('#eye').addClass('active');
  setTimeout(function(){
    $('#eye').removeClass('active');
  }, 1000);
}, 3000);


// SWIM
setTimeout(function(){
  $('#elmusSwim').addClass('active-swim');
}, 1000);

// STOP SWIM
setTimeout(function(){
  $('#elmusSwim').removeClass('active-swim');
  $('#elmusSwim').addClass('stop-swim');
}, 24000);

// DIRECTION VOLCANO
setTimeout(function(){
  $('#elmusSwim').addClass('active-swim-volcano');
}, 25000);

setTimeout(function(){
  $('#elmusSwim').removeClass('active-swim-volcano');
  $('#elmusSwim').addClass('stop-swim-volcano');
}, 26000);

// ELMUS SIDE
setTimeout(function(){
  $('#elmusSide').addClass('active');
  $('#elmusSwim').addClass('none');
}, 27000);

//BACKGROUND ANIMATION OCEAN
setInterval(function(){
  $('#ocean').addClass('active');
  $('#oceanBlack').addClass('active');
}, 1);

// VOLCANO
setInterval(function(){
  $('#bubble').addClass('active');
  $('#seeds').removeClass('active');
}, 30000);


// BACTERIUM
setInterval(function(){
  $('#bubble').removeClass('active');
  $('#seeds').removeClass('active');
  $('#bacterium').addClass('active');
}, 35000);

setInterval(function(){
  $('#bubble').removeClass('active');
  $('#seeds').removeClass('active');
  $('#bacterium').addClass('infinite');
  $('.btn-cockpit').css('display','block');
}, 36000);


// SEED
setInterval(function(){
  $('#seeds').addClass('active');
}, 28000);
