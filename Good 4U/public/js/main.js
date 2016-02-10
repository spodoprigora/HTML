$(document).ready(function(){
	// Rotator
	if( $('#rotator').length > 0 ) {
		$('.box ul').tabs('#rotator LI', {
			effect: 'fade',
			fadeOutSpeed: "slow",
			rotate: true
		}).slideshow({
			interval: 6000,
			autoplay: true,	
			clickable: false		
		});
	} 
	
	$('.box A').hover(function(){
		$(this).children().children('img').stop(true,true).animate({top: '-10px'},500);
	}, function() {
		$(this).children().children('img').stop(true,true).animate({top: '0px'},300);
	});
	
	$('#figure').hover(function(){
		$('.figure-img').removeClass('imp');
		start();
		 
		
	 }, function(){
	 	pause_hover();
	 });
	 
	 
    $('.auto-hint').focus(function(){
		if ($(this).attr('value') == $(this).attr('title')) $(this).attr('value', '');
	});
	$('.auto-hint').blur(function(){
		if ($(this).attr('value') == '') $(this).attr('value', $(this).attr('title'));
	});
});


function start(){	
	
	  $('.figure-img').animate({'top':'-10px'},'700',
         function() {
		 		
               $('.figure-img').animate({'top':'0px'},'400',
                  function(){
                    
					start(); 
					
                  });                                           
      });
	 
}




function pause_hover() {
	$('.figure-img').addClass('imp');
}