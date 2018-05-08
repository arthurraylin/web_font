$( document ).ready(function() {


var $bar = $(".bar");


// $('.letter .e').each(function(){
// 	$(this)css('background', 'red');
// });

 $('.start_fixed').click(function(){
 	$('.start_fixed').css("display", "none");

 	$(".sentence1 .squareV-1").addClass("squareV-1-active");
 	$(".sentence1 .squareV-2").addClass("squareV-2-active");
  	$(".sentence1 .squareI-1").addClass("squareI-1-active");
 	$(".sentence1 .squareI-2").addClass("squareI-2-active");	
 	$(".sentence1 .squareI-3").addClass("squareI-3-active");	
  	$(".sentence1 .squareS-1").addClass("squareS-1-active");
 	$(".sentence1 .squareS-2").addClass("squareS-2-active");	
 	$(".sentence1 .squareS-3").addClass("squareS-3-active");	
 	$(".sentence1 .squareS-4").addClass("squareS-4-active");	
 	$(".sentence1 .squareS-5").addClass("squareS-5-active");
  	$(".sentence1 .squareT-1").addClass("squareT-1-active");
 	$(".sentence1 .squareT-2").addClass("squareT-2-active");	
  	$(".sentence1 .squareO-1").addClass("squareO-1-active");
  	$(".sentence1 .squareP-1").addClass("squareP-1-active");
 	$(".sentence1 .squareP-2").addClass("squareP-2-active");	
 	$(".sentence1 .squareP-3").addClass("squareP-3-active");	
 	$(".sentence1 .squareP-4").addClass("squareP-4-active");
  	$(".sentence1 .squareR-1").addClass("squareR-1-active");
 	$(".sentence1 .squareR-2").addClass("squareR-2-active");	
 	$(".sentence1 .squareR-3").addClass("squareR-3-active");	
  	$(".sentence1 .squareH-1").addClass("squareH-1-active");
 	$(".sentence1 .squareH-2").addClass("squareH-2-active");	
 	$(".sentence1 .squareH-3").addClass("squareH-3-active");	
  	$(".sentence1 .squareN-1").addClass("squareN-1-active");
 	$(".sentence1 .squareN-2").addClass("squareN-2-active");	
 	$(".sentence1 .squareN-3").addClass("squareN-3-active");	
  	$(".sentence1 .squareW-1").addClass("squareW-1-active");
 	$(".sentence1 .squareW-2").addClass("squareW-2-active");	
 	$(".sentence1 .squareW-3").addClass("squareW-3-active");	
 	$(".sentence1 .squareW-4").addClass("squareW-4-active");	
  	$(".sentence1 .squareL-1").addClass("squareL-1-active");
 	$(".sentence1 .squareL-2").addClass("squareL-2-active");	
  	$(".sentence1 .squareE-1").addClass("squareE-1-active");
 	$(".sentence1 .squareE-2").addClass("squareE-2-active");	
 	$(".sentence1 .squareE-3").addClass("squareE-3-active");	
 	$(".sentence1 .squareE-4").addClass("squareE-4-active");	
  	$(".sentence1 .squareD-1").addClass("squareD-1-active");
 	$(".sentence1 .squareD-2").addClass("squareD-2-active");	
  	$(".sentence1 .squareB-1").addClass("squareB-1-active");
 	$(".sentence1 .squareB-2").addClass("squareB-2-active");	
 	$(".sentence1 .squareB-3").addClass("squareB-3-active");	
  	$(".sentence1 .squareG-1").addClass("squareG-1-active");
 	$(".sentence1 .squareG-2").addClass("squareG-2-active");	
 	$(".sentence1 .squareG-3").addClass("squareG-3-active");	
 	$(".sentence1 .squareG-4").addClass("squareG-4-active");	
 	$(".sentence1 .squareG-5").addClass("squareG-5-active");
  	$(".sentence1 .squareA-1").addClass("squareA-1-active");
 	$(".sentence1 .squareA-2").addClass("squareA-2-active");	
 	$(".sentence1 .squareA-3").addClass("squareA-3-active");	

 	$(".sentence1 .squareV-1-fast").addClass("squareV-1-fast-active");
 	$(".sentence1 .squareV-2-fast").addClass("squareV-2-fast-active");
  	$(".sentence1 .squareI-1-fast").addClass("squareI-1-fast-active");
 	$(".sentence1 .squareI-2-fast").addClass("squareI-2-fast-active");	
 	$(".sentence1 .squareI-3-fast").addClass("squareI-3-fast-active");	
  	$(".sentence1 .squareS-1-fast").addClass("squareS-1-fast-active");
 	$(".sentence1 .squareS-2-fast").addClass("squareS-2-fast-active");	
 	$(".sentence1 .squareS-3-fast").addClass("squareS-3-fast-active");	
 	$(".sentence1 .squareS-4-fast").addClass("squareS-4-fast-active");	
 	$(".sentence1 .squareS-5-fast").addClass("squareS-5-fast-active");
  	$(".sentence1 .squareT-1-fast").addClass("squareT-1-fast-active");
 	$(".sentence1 .squareT-2-fast").addClass("squareT-2-fast-active");	
  	$(".sentence1 .squareO-1-fast").addClass("squareO-1-fast-active");
  	$(".sentence1 .squareP-1-fast").addClass("squareP-1-fast-active");
 	$(".sentence1 .squareP-2-fast").addClass("squareP-2-fast-active");	
 	$(".sentence1 .squareP-3-fast").addClass("squareP-3-fast-active");	
 	$(".sentence1 .squareP-4-fast").addClass("squareP-4-fast-active");
  	$(".sentence1 .squareR-1-fast").addClass("squareR-1-fast-active");
 	$(".sentence1 .squareR-2-fast").addClass("squareR-2-fast-active");	
 	$(".sentence1 .squareR-3-fast").addClass("squareR-3-fast-active");	
  	$(".sentence1 .squareH-1-fast").addClass("squareH-1-fast-active");
 	$(".sentence1 .squareH-2-fast").addClass("squareH-2-fast-active");	
 	$(".sentence1 .squareH-3-fast").addClass("squareH-3-fast-active");	
  	$(".sentence1 .squareN-1-fast").addClass("squareN-1-fast-active");
 	$(".sentence1 .squareN-2-fast").addClass("squareN-2-fast-active");	
 	$(".sentence1 .squareN-3-fast").addClass("squareN-3-fast-active");	
  	$(".sentence1 .squareW-1-fast").addClass("squareW-1-fast-active");
 	$(".sentence1 .squareW-2-fast").addClass("squareW-2-fast-active");	
 	$(".sentence1 .squareW-3-fast").addClass("squareW-3-fast-active");	
 	$(".sentence1 .squareW-4-fast").addClass("squareW-4-fast-active");	
  	$(".sentence1 .squareL-1-fast").addClass("squareL-1-fast-active");
 	$(".sentence1 .squareL-2-fast").addClass("squareL-2-fast-active");	
  	$(".sentence1 .squareE-1-fast").addClass("squareE-1-fast-active");
 	$(".sentence1 .squareE-2-fast").addClass("squareE-2-fast-active");	
 	$(".sentence1 .squareE-3-fast").addClass("squareE-3-fast-active");	
 	$(".sentence1 .squareE-4-fast").addClass("squareE-4-fast-active");	
  	$(".sentence1 .squareD-1-fast").addClass("squareD-1-fast-active");
 	$(".sentence1 .squareD-2-fast").addClass("squareD-2-fast-active");	
  	$(".sentence1 .squareB-1-fast").addClass("squareB-1-fast-active");
 	$(".sentence1 .squareB-2-fast").addClass("squareB-2-fast-active");	
 	$(".sentence1 .squareB-3-fast").addClass("squareB-3-fast-active");	
  	$(".sentence1 .squareG-1-fast").addClass("squareG-1-fast-active");
 	$(".sentence1 .squareG-2-fast").addClass("squareG-2-fast-active");	
 	$(".sentence1 .squareG-3-fast").addClass("squareG-3-fast-active");	
 	$(".sentence1 .squareG-4-fast").addClass("squareG-4-fast-active");	
 	$(".sentence1 .squareG-5-fast").addClass("squareG-5-fast-active");
  	$(".sentence1 .squareA-1-fast").addClass("squareA-1-fast-active");
 	$(".sentence1 .squareA-2-fast").addClass("squareA-2-fast-active");	
 	$(".sentence1 .squareA-3-fast").addClass("squareA-3-fast-active");	
 });

 $('.start_fixed').click(function(){

 	$(".sentence2 .squareV-1").addClass("squareV-1-active");
 	$(".sentence2 .squareV-2").addClass("squareV-2-active");
  	$(".sentence2 .squareI-1").addClass("squareI-1-active");
 	$(".sentence2 .squareI-2").addClass("squareI-2-active");	
 	$(".sentence2 .squareI-3").addClass("squareI-3-active");	
  	$(".sentence2 .squareS-1").addClass("squareS-1-active");
 	$(".sentence2 .squareS-2").addClass("squareS-2-active");	
 	$(".sentence2 .squareS-3").addClass("squareS-3-active");	
 	$(".sentence2 .squareS-4").addClass("squareS-4-active");	
 	$(".sentence2 .squareS-5").addClass("squareS-5-active");
  	$(".sentence2 .squareT-1").addClass("squareT-1-active");
 	$(".sentence2 .squareT-2").addClass("squareT-2-active");	
  	$(".sentence2 .squareO-1").addClass("squareO-1-active");
  	$(".sentence2 .squareP-1").addClass("squareP-1-active");
 	$(".sentence2 .squareP-2").addClass("squareP-2-active");	
 	$(".sentence2 .squareP-3").addClass("squareP-3-active");	
 	$(".sentence2 .squareP-4").addClass("squareP-4-active");
  	$(".sentence2 .squareR-1").addClass("squareR-1-active");
 	$(".sentence2 .squareR-2").addClass("squareR-2-active");	
 	$(".sentence2 .squareR-3").addClass("squareR-3-active");	
  	$(".sentence2 .squareH-1").addClass("squareH-1-active");
 	$(".sentence2 .squareH-2").addClass("squareH-2-active");	
 	$(".sentence2 .squareH-3").addClass("squareH-3-active");	
  	$(".sentence2 .squareN-1").addClass("squareN-1-active");
 	$(".sentence2 .squareN-2").addClass("squareN-2-active");	
 	$(".sentence2 .squareN-3").addClass("squareN-3-active");	
  	$(".sentence2 .squareW-1").addClass("squareW-1-active");
 	$(".sentence2 .squareW-2").addClass("squareW-2-active");	
 	$(".sentence2 .squareW-3").addClass("squareW-3-active");	
 	$(".sentence2 .squareW-4").addClass("squareW-4-active");	
  	$(".sentence2 .squareL-1").addClass("squareL-1-active");
 	$(".sentence2 .squareL-2").addClass("squareL-2-active");	
  	$(".sentence2 .squareE-1").addClass("squareE-1-active");
 	$(".sentence2 .squareE-2").addClass("squareE-2-active");	
 	$(".sentence2 .squareE-3").addClass("squareE-3-active");	
 	$(".sentence2 .squareE-4").addClass("squareE-4-active");	
  	$(".sentence2 .squareD-1").addClass("squareD-1-active");
 	$(".sentence2 .squareD-2").addClass("squareD-2-active");	
  	$(".sentence2 .squareB-1").addClass("squareB-1-active");
 	$(".sentence2 .squareB-2").addClass("squareB-2-active");	
 	$(".sentence2 .squareB-3").addClass("squareB-3-active");	
  	$(".sentence2 .squareG-1").addClass("squareG-1-active");
 	$(".sentence2 .squareG-2").addClass("squareG-2-active");	
 	$(".sentence2 .squareG-3").addClass("squareG-3-active");	
 	$(".sentence2 .squareG-4").addClass("squareG-4-active");	
 	$(".sentence2 .squareG-5").addClass("squareG-5-active");
  	$(".sentence2 .squareA-1").addClass("squareA-1-active");
 	$(".sentence2 .squareA-2").addClass("squareA-2-active");	
 	$(".sentence2 .squareA-3").addClass("squareA-3-active");	

 	$(".sentence2 .squareV-1-fast").addClass("squareV-1-fast-active");
 	$(".sentence2 .squareV-2-fast").addClass("squareV-2-fast-active");
  	$(".sentence2 .squareI-1-fast").addClass("squareI-1-fast-active");
 	$(".sentence2 .squareI-2-fast").addClass("squareI-2-fast-active");	
 	$(".sentence2 .squareI-3-fast").addClass("squareI-3-fast-active");	
  	$(".sentence2 .squareS-1-fast").addClass("squareS-1-fast-active");
 	$(".sentence2 .squareS-2-fast").addClass("squareS-2-fast-active");	
 	$(".sentence2 .squareS-3-fast").addClass("squareS-3-fast-active");	
 	$(".sentence2 .squareS-4-fast").addClass("squareS-4-fast-active");	
 	$(".sentence2 .squareS-5-fast").addClass("squareS-5-fast-active");
  	$(".sentence2 .squareT-1-fast").addClass("squareT-1-fast-active");
 	$(".sentence2 .squareT-2-fast").addClass("squareT-2-fast-active");	
  	$(".sentence2 .squareO-1-fast").addClass("squareO-1-fast-active");
  	$(".sentence2 .squareP-1-fast").addClass("squareP-1-fast-active");
 	$(".sentence2 .squareP-2-fast").addClass("squareP-2-fast-active");	
 	$(".sentence2 .squareP-3-fast").addClass("squareP-3-fast-active");	
 	$(".sentence2 .squareP-4-fast").addClass("squareP-4-fast-active");
  	$(".sentence2 .squareR-1-fast").addClass("squareR-1-fast-active");
 	$(".sentence2 .squareR-2-fast").addClass("squareR-2-fast-active");	
 	$(".sentence2 .squareR-3-fast").addClass("squareR-3-fast-active");	
  	$(".sentence2 .squareH-1-fast").addClass("squareH-1-fast-active");
 	$(".sentence2 .squareH-2-fast").addClass("squareH-2-fast-active");	
 	$(".sentence2 .squareH-3-fast").addClass("squareH-3-fast-active");	
  	$(".sentence2 .squareN-1-fast").addClass("squareN-1-fast-active");
 	$(".sentence2 .squareN-2-fast").addClass("squareN-2-fast-active");	
 	$(".sentence2 .squareN-3-fast").addClass("squareN-3-fast-active");	
  	$(".sentence2 .squareW-1-fast").addClass("squareW-1-fast-active");
 	$(".sentence2 .squareW-2-fast").addClass("squareW-2-fast-active");	
 	$(".sentence2 .squareW-3-fast").addClass("squareW-3-fast-active");	
 	$(".sentence2 .squareW-4-fast").addClass("squareW-4-fast-active");	
  	$(".sentence2 .squareL-1-fast").addClass("squareL-1-fast-active");
 	$(".sentence2 .squareL-2-fast").addClass("squareL-2-fast-active");	
  	$(".sentence2 .squareE-1-fast").addClass("squareE-1-fast-active");
 	$(".sentence2 .squareE-2-fast").addClass("squareE-2-fast-active");	
 	$(".sentence2 .squareE-3-fast").addClass("squareE-3-fast-active");	
 	$(".sentence2 .squareE-4-fast").addClass("squareE-4-fast-active");	
  	$(".sentence2 .squareD-1-fast").addClass("squareD-1-fast-active");
 	$(".sentence2 .squareD-2-fast").addClass("squareD-2-fast-active");	
  	$(".sentence2 .squareB-1-fast").addClass("squareB-1-fast-active");
 	$(".sentence2 .squareB-2-fast").addClass("squareB-2-fast-active");	
 	$(".sentence2 .squareB-3-fast").addClass("squareB-3-fast-active");	
  	$(".sentence2 .squareG-1-fast").addClass("squareG-1-fast-active");
 	$(".sentence2 .squareG-2-fast").addClass("squareG-2-fast-active");	
 	$(".sentence2 .squareG-3-fast").addClass("squareG-3-fast-active");	
 	$(".sentence2 .squareG-4-fast").addClass("squareG-4-fast-active");	
 	$(".sentence2 .squareG-5-fast").addClass("squareG-5-fast-active");
  	$(".sentence2 .squareA-1-fast").addClass("squareA-1-fast-active");
 	$(".sentence2 .squareA-2-fast").addClass("squareA-2-fast-active");	
 	$(".sentence2 .squareA-3-fast").addClass("squareA-3-fast-active");	
 });

 $('.start_fixed').click(function(){

 	$(".sentence3 .squareV-1").addClass("squareV-1-active");
 	$(".sentence3 .squareV-2").addClass("squareV-2-active");
  	$(".sentence3 .squareI-1").addClass("squareI-1-active");
 	$(".sentence3 .squareI-2").addClass("squareI-2-active");	
 	$(".sentence3 .squareI-3").addClass("squareI-3-active");	
  	$(".sentence3 .squareS-1").addClass("squareS-1-active");
 	$(".sentence3 .squareS-2").addClass("squareS-2-active");	
 	$(".sentence3 .squareS-3").addClass("squareS-3-active");	
 	$(".sentence3 .squareS-4").addClass("squareS-4-active");	
 	$(".sentence3 .squareS-5").addClass("squareS-5-active");
  	$(".sentence3 .squareT-1").addClass("squareT-1-active");
 	$(".sentence3 .squareT-2").addClass("squareT-2-active");	
  	$(".sentence3 .squareO-1").addClass("squareO-1-active");
  	$(".sentence3 .squareP-1").addClass("squareP-1-active");
 	$(".sentence3 .squareP-2").addClass("squareP-2-active");	
 	$(".sentence3 .squareP-3").addClass("squareP-3-active");	
 	$(".sentence3 .squareP-4").addClass("squareP-4-active");
  	$(".sentence3 .squareR-1").addClass("squareR-1-active");
 	$(".sentence3 .squareR-2").addClass("squareR-2-active");	
 	$(".sentence3 .squareR-3").addClass("squareR-3-active");	
  	$(".sentence3 .squareH-1").addClass("squareH-1-active");
 	$(".sentence3 .squareH-2").addClass("squareH-2-active");	
 	$(".sentence3 .squareH-3").addClass("squareH-3-active");	
  	$(".sentence3 .squareN-1").addClass("squareN-1-active");
 	$(".sentence3 .squareN-2").addClass("squareN-2-active");	
 	$(".sentence3 .squareN-3").addClass("squareN-3-active");	
  	$(".sentence3 .squareW-1").addClass("squareW-1-active");
 	$(".sentence3 .squareW-2").addClass("squareW-2-active");	
 	$(".sentence3 .squareW-3").addClass("squareW-3-active");	
 	$(".sentence3 .squareW-4").addClass("squareW-4-active");	
  	$(".sentence3 .squareL-1").addClass("squareL-1-active");
 	$(".sentence3 .squareL-2").addClass("squareL-2-active");	
  	$(".sentence3 .squareE-1").addClass("squareE-1-active");
 	$(".sentence3 .squareE-2").addClass("squareE-2-active");	
 	$(".sentence3 .squareE-3").addClass("squareE-3-active");	
 	$(".sentence3 .squareE-4").addClass("squareE-4-active");	
  	$(".sentence3 .squareD-1").addClass("squareD-1-active");
 	$(".sentence3 .squareD-2").addClass("squareD-2-active");	
  	$(".sentence3 .squareB-1").addClass("squareB-1-active");
 	$(".sentence3 .squareB-2").addClass("squareB-2-active");	
 	$(".sentence3 .squareB-3").addClass("squareB-3-active");	
  	$(".sentence3 .squareG-1").addClass("squareG-1-active");
 	$(".sentence3 .squareG-2").addClass("squareG-2-active");	
 	$(".sentence3 .squareG-3").addClass("squareG-3-active");	
 	$(".sentence3 .squareG-4").addClass("squareG-4-active");	
 	$(".sentence3 .squareG-5").addClass("squareG-5-active");
  	$(".sentence3 .squareA-1").addClass("squareA-1-active");
 	$(".sentence3 .squareA-2").addClass("squareA-2-active");	
 	$(".sentence3 .squareA-3").addClass("squareA-3-active");	

 	$(".sentence3 .squareV-1-fast").addClass("squareV-1-fast-active");
 	$(".sentence3 .squareV-2-fast").addClass("squareV-2-fast-active");
  	$(".sentence3 .squareI-1-fast").addClass("squareI-1-fast-active");
 	$(".sentence3 .squareI-2-fast").addClass("squareI-2-fast-active");	
 	$(".sentence3 .squareI-3-fast").addClass("squareI-3-fast-active");	
  	$(".sentence3 .squareS-1-fast").addClass("squareS-1-fast-active");
 	$(".sentence3 .squareS-2-fast").addClass("squareS-2-fast-active");	
 	$(".sentence3 .squareS-3-fast").addClass("squareS-3-fast-active");	
 	$(".sentence3 .squareS-4-fast").addClass("squareS-4-fast-active");	
 	$(".sentence3 .squareS-5-fast").addClass("squareS-5-fast-active");
  	$(".sentence3 .squareT-1-fast").addClass("squareT-1-fast-active");
 	$(".sentence3 .squareT-2-fast").addClass("squareT-2-fast-active");	
  	$(".sentence3 .squareO-1-fast").addClass("squareO-1-fast-active");
  	$(".sentence3 .squareP-1-fast").addClass("squareP-1-fast-active");
 	$(".sentence3 .squareP-2-fast").addClass("squareP-2-fast-active");	
 	$(".sentence3 .squareP-3-fast").addClass("squareP-3-fast-active");	
 	$(".sentence3 .squareP-4-fast").addClass("squareP-4-fast-active");
  	$(".sentence3 .squareR-1-fast").addClass("squareR-1-fast-active");
 	$(".sentence3 .squareR-2-fast").addClass("squareR-2-fast-active");	
 	$(".sentence3 .squareR-3-fast").addClass("squareR-3-fast-active");	
  	$(".sentence3 .squareH-1-fast").addClass("squareH-1-fast-active");
 	$(".sentence3 .squareH-2-fast").addClass("squareH-2-fast-active");	
 	$(".sentence3 .squareH-3-fast").addClass("squareH-3-fast-active");	
  	$(".sentence3 .squareN-1-fast").addClass("squareN-1-fast-active");
 	$(".sentence3 .squareN-2-fast").addClass("squareN-2-fast-active");	
 	$(".sentence3 .squareN-3-fast").addClass("squareN-3-fast-active");	
  	$(".sentence3 .squareW-1-fast").addClass("squareW-1-fast-active");
 	$(".sentence3 .squareW-2-fast").addClass("squareW-2-fast-active");	
 	$(".sentence3 .squareW-3-fast").addClass("squareW-3-fast-active");	
 	$(".sentence3 .squareW-4-fast").addClass("squareW-4-fast-active");	
  	$(".sentence3 .squareL-1-fast").addClass("squareL-1-fast-active");
 	$(".sentence3 .squareL-2-fast").addClass("squareL-2-fast-active");	
  	$(".sentence3 .squareE-1-fast").addClass("squareE-1-fast-active");
 	$(".sentence3 .squareE-2-fast").addClass("squareE-2-fast-active");	
 	$(".sentence3 .squareE-3-fast").addClass("squareE-3-fast-active");	
 	$(".sentence3 .squareE-4-fast").addClass("squareE-4-fast-active");	
  	$(".sentence3 .squareD-1-fast").addClass("squareD-1-fast-active");
 	$(".sentence3 .squareD-2-fast").addClass("squareD-2-fast-active");	
  	$(".sentence3 .squareB-1-fast").addClass("squareB-1-fast-active");
 	$(".sentence3 .squareB-2-fast").addClass("squareB-2-fast-active");	
 	$(".sentence3 .squareB-3-fast").addClass("squareB-3-fast-active");	
  	$(".sentence3 .squareG-1-fast").addClass("squareG-1-fast-active");
 	$(".sentence3 .squareG-2-fast").addClass("squareG-2-fast-active");	
 	$(".sentence3 .squareG-3-fast").addClass("squareG-3-fast-active");	
 	$(".sentence3 .squareG-4-fast").addClass("squareG-4-fast-active");	
 	$(".sentence3 .squareG-5-fast").addClass("squareG-5-fast-active");
  	$(".sentence3 .squareA-1-fast").addClass("squareA-1-fast-active");
 	$(".sentence3 .squareA-2-fast").addClass("squareA-2-fast-active");	
 	$(".sentence3 .squareA-3-fast").addClass("squareA-3-fast-active");	

  	$(".sentence3 .squareL-1-rainbow").addClass("squareL-1-rainbow-active");
 	$(".sentence3 .squareL-2-rainbow").addClass("squareL-2-rainbow-active");
  	$(".sentence3 .squareO-1-rainbow").addClass("squareO-1-rainbow-active");
   	$(".sentence3 .squareV-1-rainbow").addClass("squareV-1-rainbow-active");
 	$(".sentence3 .squareV-2-rainbow").addClass("squareV-2-rainbow-active");
  	$(".sentence3 .squareE-1-rainbow").addClass("squareE-1-rainbow-active");
 	$(".sentence3 .squareE-2-rainbow").addClass("squareE-2-rainbow-active");	
 	$(".sentence3 .squareE-3-rainbow").addClass("squareE-3-rainbow-active");	
 	$(".sentence3 .squareE-4-rainbow").addClass("squareE-4-rainbow-active");	
 });


 $('.start_fixed').click(function(){

 	$(".sentence4 .squareV-1").addClass("squareV-1-active");
 	$(".sentence4 .squareV-2").addClass("squareV-2-active");
  	$(".sentence4 .squareI-1").addClass("squareI-1-active");
 	$(".sentence4 .squareI-2").addClass("squareI-2-active");	
 	$(".sentence4 .squareI-3").addClass("squareI-3-active");	
  	$(".sentence4 .squareS-1").addClass("squareS-1-active");
 	$(".sentence4 .squareS-2").addClass("squareS-2-active");	
 	$(".sentence4 .squareS-3").addClass("squareS-3-active");	
 	$(".sentence4 .squareS-4").addClass("squareS-4-active");	
 	$(".sentence4 .squareS-5").addClass("squareS-5-active");
  	$(".sentence4 .squareT-1").addClass("squareT-1-active");
 	$(".sentence4 .squareT-2").addClass("squareT-2-active");	
  	$(".sentence4 .squareO-1").addClass("squareO-1-active");
  	$(".sentence4 .squareP-1").addClass("squareP-1-active");
 	$(".sentence4 .squareP-2").addClass("squareP-2-active");	
 	$(".sentence4 .squareP-3").addClass("squareP-3-active");	
 	$(".sentence4 .squareP-4").addClass("squareP-4-active");
  	$(".sentence4 .squareR-1").addClass("squareR-1-active");
 	$(".sentence4 .squareR-2").addClass("squareR-2-active");	
 	$(".sentence4 .squareR-3").addClass("squareR-3-active");	
  	$(".sentence4 .squareH-1").addClass("squareH-1-active");
 	$(".sentence4 .squareH-2").addClass("squareH-2-active");	
 	$(".sentence4 .squareH-3").addClass("squareH-3-active");	
  	$(".sentence4 .squareN-1").addClass("squareN-1-active");
 	$(".sentence4 .squareN-2").addClass("squareN-2-active");	
 	$(".sentence4 .squareN-3").addClass("squareN-3-active");	
  	$(".sentence4 .squareW-1").addClass("squareW-1-active");
 	$(".sentence4 .squareW-2").addClass("squareW-2-active");	
 	$(".sentence4 .squareW-3").addClass("squareW-3-active");	
 	$(".sentence4 .squareW-4").addClass("squareW-4-active");	
  	$(".sentence4 .squareL-1").addClass("squareL-1-active");
 	$(".sentence4 .squareL-2").addClass("squareL-2-active");	
  	$(".sentence4 .squareE-1").addClass("squareE-1-active");
 	$(".sentence4 .squareE-2").addClass("squareE-2-active");	
 	$(".sentence4 .squareE-3").addClass("squareE-3-active");	
 	$(".sentence4 .squareE-4").addClass("squareE-4-active");	
  	$(".sentence4 .squareD-1").addClass("squareD-1-active");
 	$(".sentence4 .squareD-2").addClass("squareD-2-active");	
  	$(".sentence4 .squareB-1").addClass("squareB-1-active");
 	$(".sentence4 .squareB-2").addClass("squareB-2-active");	
 	$(".sentence4 .squareB-3").addClass("squareB-3-active");	
  	$(".sentence4 .squareG-1").addClass("squareG-1-active");
 	$(".sentence4 .squareG-2").addClass("squareG-2-active");	
 	$(".sentence4 .squareG-3").addClass("squareG-3-active");	
 	$(".sentence4 .squareG-4").addClass("squareG-4-active");	
 	$(".sentence4 .squareG-5").addClass("squareG-5-active");
  	$(".sentence4 .squareA-1").addClass("squareA-1-active");
 	$(".sentence4 .squareA-2").addClass("squareA-2-active");	
 	$(".sentence4 .squareA-3").addClass("squareA-3-active");

 	$(".sentence4 .squareV-1-fast").addClass("squareV-1-fast-active");
 	$(".sentence4 .squareV-2-fast").addClass("squareV-2-fast-active");
  	$(".sentence4 .squareI-1-fast").addClass("squareI-1-fast-active");
 	$(".sentence4 .squareI-2-fast").addClass("squareI-2-fast-active");	
 	$(".sentence4 .squareI-3-fast").addClass("squareI-3-fast-active");	
  	$(".sentence4 .squareS-1-fast").addClass("squareS-1-fast-active");
 	$(".sentence4 .squareS-2-fast").addClass("squareS-2-fast-active");	
 	$(".sentence4 .squareS-3-fast").addClass("squareS-3-fast-active");	
 	$(".sentence4 .squareS-4-fast").addClass("squareS-4-fast-active");	
 	$(".sentence4 .squareS-5-fast").addClass("squareS-5-fast-active");
  	$(".sentence4 .squareT-1-fast").addClass("squareT-1-fast-active");
 	$(".sentence4 .squareT-2-fast").addClass("squareT-2-fast-active");	
  	$(".sentence4 .squareO-1-fast").addClass("squareO-1-fast-active");
  	$(".sentence4 .squareP-1-fast").addClass("squareP-1-fast-active");
 	$(".sentence4 .squareP-2-fast").addClass("squareP-2-fast-active");	
 	$(".sentence4 .squareP-3-fast").addClass("squareP-3-fast-active");	
 	$(".sentence4 .squareP-4-fast").addClass("squareP-4-fast-active");
  	$(".sentence4 .squareR-1-fast").addClass("squareR-1-fast-active");
 	$(".sentence4 .squareR-2-fast").addClass("squareR-2-fast-active");	
 	$(".sentence4 .squareR-3-fast").addClass("squareR-3-fast-active");	
  	$(".sentence4 .squareH-1-fast").addClass("squareH-1-fast-active");
 	$(".sentence4 .squareH-2-fast").addClass("squareH-2-fast-active");	
 	$(".sentence4 .squareH-3-fast").addClass("squareH-3-fast-active");	
  	$(".sentence4 .squareN-1-fast").addClass("squareN-1-fast-active");
 	$(".sentence4 .squareN-2-fast").addClass("squareN-2-fast-active");	
 	$(".sentence4 .squareN-3-fast").addClass("squareN-3-fast-active");	
  	$(".sentence4 .squareW-1-fast").addClass("squareW-1-fast-active");
 	$(".sentence4 .squareW-2-fast").addClass("squareW-2-fast-active");	
 	$(".sentence4 .squareW-3-fast").addClass("squareW-3-fast-active");	
 	$(".sentence4 .squareW-4-fast").addClass("squareW-4-fast-active");	
  	$(".sentence4 .squareL-1-fast").addClass("squareL-1-fast-active");
 	$(".sentence4 .squareL-2-fast").addClass("squareL-2-fast-active");	
  	$(".sentence4 .squareE-1-fast").addClass("squareE-1-fast-active");
 	$(".sentence4 .squareE-2-fast").addClass("squareE-2-fast-active");	
 	$(".sentence4 .squareE-3-fast").addClass("squareE-3-fast-active");	
 	$(".sentence4 .squareE-4-fast").addClass("squareE-4-fast-active");	
  	$(".sentence4 .squareD-1-fast").addClass("squareD-1-fast-active");
 	$(".sentence4 .squareD-2-fast").addClass("squareD-2-fast-active");	
  	$(".sentence4 .squareB-1-fast").addClass("squareB-1-fast-active");
 	$(".sentence4 .squareB-2-fast").addClass("squareB-2-fast-active");	
 	$(".sentence4 .squareB-3-fast").addClass("squareB-3-fast-active");	
  	$(".sentence4 .squareG-1-fast").addClass("squareG-1-fast-active");
 	$(".sentence4 .squareG-2-fast").addClass("squareG-2-fast-active");	
 	$(".sentence4 .squareG-3-fast").addClass("squareG-3-fast-active");	
 	$(".sentence4 .squareG-4-fast").addClass("squareG-4-fast-active");	
 	$(".sentence4 .squareG-5-fast").addClass("squareG-5-fast-active");
  	$(".sentence4 .squareA-1-fast").addClass("squareA-1-fast-active");
 	$(".sentence4 .squareA-2-fast").addClass("squareA-2-fast-active");	
 	$(".sentence4 .squareA-3-fast").addClass("squareA-3-fast-active");		
 });


// this is the Start button trigger

 $('.start_fixed').click(function(){

 	$(".sentence-seperation1").css("cursor","progress");

 	$(".line1 .bar").css("opacity","1");
 	$(".line1 .bar").addClass("bar_active");
 	// $(".line1 .start_button").html("processing...");


 });

 $('.start_fixed').click(function(){

 	$(".sentence-seperation2").css("cursor","progress");

 	$(".line2 .bar").css("opacity","1");
 	$(".line2 .bar").addClass("bar_active");
 	// $(".line2 .start_button").html("processing...");


 });

 $('.start_fixed').click(function(){

 	$(".sentence-seperation3").css("cursor","progress");

 	$(".line3 .bar").css("opacity","1");
 	$(".line3 .bar").addClass("bar_active");
 	// $(".line3 .start_button").html("processing...");

 });

 $('.start_fixed').click(function(){

 	$(".sentence-seperation4").css("cursor","progress");

 	$(".line4 .bar").css("opacity","1");
 	$(".line4 .bar").addClass("bar_active");
 	// $(".line4 .start_button").html("processing...");


 });



});