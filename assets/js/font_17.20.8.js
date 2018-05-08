$( document ).ready(function() {


var $bar = $(".bar");
var $C_pink = $ (".C_pink");


// $('.letter .e').each(function(){
// 	$(this)css('background', 'red');
// });

 $('.touch').click(function(){

 	$C_rainbow.removeClass('hide');
 	$C_pink.removeClass('hide');

 	$C_rainbow.addClass('C_rainbow_activate');
 	$C_pink.addClass('C_pink_activate');


 	setTimeout(function(){ 
 	
 	  $(".touch").html('The Gems');

	  }, 23000);

 	setTimeout(function(){ 
 	
 	  $(".touch2").removeClass('hide');

	  }, 26000);

 });








});