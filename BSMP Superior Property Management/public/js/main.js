$(document).ready(function(){
	
    $('.auto-hint').focus(function(){
		if ($(this).attr('value') == $(this).attr('title')) $(this).attr('value', '');
	});
	$('.auto-hint').blur(function(){
		if ($(this).attr('value') == '') $(this).attr('value', $(this).attr('title'));
	});
	
	
	
	$('TEXTAREA').focus(function(){
		if ($(this).attr('value') == $(this).attr('title')) $(this).attr('value', '');
	});
	$('TEXTAREA').blur(function(){
		if ($(this).attr('value') == '') $(this).attr('value', $(this).attr('title'));
	});
	
	// Rotator
	if ($('#rotator').length>0) {
	$('#rotator').cycle({ 
		fx:     'fade', 
		speed:  1000, 
		timeout: 3000
	});
	}
	
});




