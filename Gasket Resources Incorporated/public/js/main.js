$(document).ready(function(){
	
	if ($('#rotator').length>0) {
	$('#rotator').cycle({ 
		fx:     'fade', 
		speed:  1000, 
		timeout: 3000
	});
	}
	
	if ($('SELECT').length > 0) {
		$('select').selectbox();
	}	
		
});





