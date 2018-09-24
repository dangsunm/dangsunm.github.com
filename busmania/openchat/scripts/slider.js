$(function(){
$('.faderandom > :gt(0)').hide();
setInterval(function(){
  var rand = Math.floor(Math.random() * ($('.faderandom').children().length-1));
  $('.faderandom > :first-child').appendTo('.faderandom').fadeOut();
  $('.faderandom > *').eq(rand).prependTo('.faderandom').fadeIn();
}, 3000);
});
