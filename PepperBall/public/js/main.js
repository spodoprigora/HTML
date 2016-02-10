jQuery(document).ready(function($){

	/*  Slideshow  */
	
	$('#slideshow').cycle({ 
		timeout:     	4000, 
		pager:      	'#control', 
		pagerEvent: 	'mouseover', 
		fastOnEvent: 	true,
		cleartypeNoBg: 	true
	});

	$('#rotator UL').cycle({ 
		timeout:     	4000, 
		pager:      	'#control', 
		pagerEvent: 	'mouseover', 
		fastOnEvent: 	true,
		cleartypeNoBg: 	true,
		next:   		'#next', 
		prev:   		'#prev'
	});
	
	$("a.popup").fancybox({
		minWidth:  600,
		minHeight: 601
	});
});
