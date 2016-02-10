$(document).ready(function(){
	
    $('.auto-hint').focus(function(){
		if ($(this).attr('value') == $(this).attr('title')) $(this).attr('value', '');
	});
	$('.auto-hint').blur(function(){
		if ($(this).attr('value') == '') $(this).attr('value', $(this).attr('title'));
	});
	
	
});




