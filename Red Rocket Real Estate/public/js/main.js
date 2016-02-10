var J = jQuery.noConflict();
J(document).ready(function($){
	
	
	
	
	
	
	
	
	
	
	
	// Select
	if ($('SELECT').length > 0) {
		$('select').selectbox();
	}	
	
	// RadioBox
	$('#content .sidebar .radio-area INPUT').css({position: 'absolute', left: '-10000px'});
	InitRadioBox('.radio-area');
	$('.radio-area').find('INPUT').change(function(){
		InitRadioBox('.radio-area');
	});
	function InitRadioBox(parent_class){
		$(parent_class).find('INPUT').each(function(){
			if ($(this).attr("checked")) {
				$(this).parent().children('label').addClass('checked');
			} else {
				$(this).parent().children('label').removeClass('checked');
			}
		});
	}
	
	//Carousel
	if( $('#carousel').length > 0 ) {
		$('.scrollable').scrollable({vertical: true, mousewheel: true, circular: true});
		
		
		$(".scrollable UL img").click(function() {
		// see if same thumb is being clicked
		if ($(this).hasClass("active")) { return; }
	 
		// calclulate large image's URL based on the thumbnail URL (flickr specific)
		var url = $(this).attr("src").replace("_t", "");
	 
		// get handle to element that wraps the image and make it semi-transparent
		var wrap = $(".image-gallery").fadeTo("medium", 0.5);
	 
		// the large image from www.flickr.com
		var img = new Image();
	 
	
		// call this function after it's loaded
		img.onload = function() {
	 
			// make wrapper fully visible
			wrap.fadeTo("fast", 1);
	 
			// change the image
			wrap.find("img").attr("src", url);
	 
		};
	 
		// begin loading the image from www.flickr.com
		img.src = url;
	 
		// activate item
		$(".scrollable UL IMG").removeClass("active");
		$(this).addClass("active");
	 
	// when page loads simulate a "click" on the first image
	}).filter(":first").click();
		
	} 
	
	// Rotator
	if( $('#rotator').length > 0 ) {
		 $(".nav").tabs(".images > LI", {
	 
	    // enable "cross-fading" effect
	    effect: 'fade',
	    fadeOutSpeed: "slow",
	 
	    // start from the beginning after the last tab
	    rotate: true
	 
	    }).slideshow({autoplay: true, interval: 3000});
	
	}
	
	if( $('#rotator').length > 0 ) {
		 $(".nav").tabs(".images > LI", {
	 
	    // enable "cross-fading" effect
	    effect: 'fade',
	    fadeOutSpeed: "slow",
	 
	    // start from the beginning after the last tab
	    rotate: true
	 
	    }).slideshow({autoplay: true, interval: 3000});
	
	}
	if( $('#testimonials-rotator').length > 0 ) {
		 $(".navigation").tabs(".images-area > LI", {
	 
	    // enable "cross-fading" effect
	    effect: 'fade',
	    fadeOutSpeed: "slow",
	 
	    // start from the beginning after the last tab
	    rotate: true
	 
	    }).slideshow({autoplay: true, interval: 3000});
	
	}
	
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
	
	
});




