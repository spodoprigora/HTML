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
 	

	
	
	/* Tabs*/
 	$('#tabs ul li a').click(function(){
		var showCont = $(this).attr('href');
		$('#tabs ul li').removeClass('active');
		$(this).parent().addClass('active');
		$('.detail').hide();
		$(showCont).show();
		select();
		$('INPUT.datepicker').datepicker();
		return false;
	}); 
	
	$('A.next').click(function(){
		var showCont = $(this).attr('href');
		$('#tabs ul li.active').next().addClass('active');
		$('#tabs ul li.active').prev().removeClass('active');	
		$('.detail').hide();
		$(showCont).show();
		select();
		$('INPUT.datepicker').datepicker();	
		return false;
	
	})
	
	$('.input-file INPUT[type="file"]').change(function(){
		$('#fileInputText').val($(this).val());
	})
	$('.input-file INPUT[type="file"]').change(function(){
		$('#file-template-upload').val($(this).val());
	})	
		
    $('INPUT.datepicker').datepicker();
	
	select();
	
});
	
function select(){
	if ($('SELECT').length > 0) {
		$('select').selectbox();
	}
}		
		
		
		

	



