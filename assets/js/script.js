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
setInterval(function(){
  $('#elmusSwim').addClass('active');
  setTimeout(function(){
    $('#elmusSwim').addClass('active-swim');
  }, 1000);
}, 1);

//BACKGROUND ANIMATION OCEAN
setInterval(function(){
  $('#ocean').addClass('active');
  $('#oceanBlack').addClass('active');
}, 1);
