	$(document).ready(function(){
		$('.auto-hint').focus(function(){
			if ($(this).attr('value') == $(this).attr('title')) $(this).attr('value', '');
		});
		$('.auto-hint').blur(function(){
			if ($(this).attr('value') == '') $(this).attr('value', $(this).attr('title'));
		});
		
	///////////////////////////////////////////////////////////
	
		$('body').bgStretcher({
			images: ['public/images/bg/body-bg.jpg'],
			imageWidth: 1708, 
			imageHeight: 800 
		});
		
	//////////////////////////////////////////////////////////	
	
		$('#news UL').cycle({ 
			timeout:     3000, 
			pager:      '#control', 
			pagerEvent: 'mouseover', 
			fastOnEvent: true,
			cleartypeNoBg: true
		});
	///////////////////////////////////////////////////////	
	
		$('#wine').click(function (){
			$('.wine').slideToggle(600);
		});
			
	/////////////////////////////////////////////////////	
	
		$("#left").toggle( 
			function() { 
	            $(".border").animate({
					'right' : '0'
				}, 1000);
	        }, 
	        function() { 
	            $(".border").animate({
					'right' : '-271'
				}, 1000); 
	        } 
	    );	
		
	//////////////////////////////////////////////////////////////	
	
		var f = true;
		var archive = $("#archive");
		var news = $("#news-page");
		var archiveLink = $("#archive-link");
		var newsLink = $("#news-link");
		
		archiveLink.click(function (){
			if (f) {
				f = false;
				archive.css('z-index', '10');
				news.css('z-index', '0');
				archiveLink.addClass("active");	
				newsLink.removeClass("active");	
				archive.animate({
					'left' : '0'
				}, 2000);
				setTimeout(function() { 
						news.animate({
						'left' : '-860'
					}, 10);
					f = true;
				}, 2000);
			}
		});
		
		newsLink.click(function (){
			if (f) {
				f = false;
				news.css('z-index', '10');
				archive.css('z-index', '0');
				newsLink.addClass("active");	
				archiveLink.removeClass("active");	
				news.animate({
						'left' : '0'
				}, 2000);
				setTimeout(function() { 
						archive.animate({
						'left' : '-860'
					}, 10);	
					f = true;
				}, 2000);
			}
		});
		
	////////////////////////////////////////////////////////////	
		
		var redLink = $('#red-link');
		var whiteLink = $("#white-link");
		var awardedLink = $("#awarded-link");
		var red = $("#red");
		var white = $("#white");
		var awarded = $("#awarded");
		var sidebarLink = $("#left A");
		var redWine = $("#red-wine");
		var whiteWine = $("#white-wine");
		var awardedWine = $("#awarded-wine");
		
		redLink.click(function (){
			if (f) {
				f = false;
				redLink.addClass("active");	
				whiteLink.removeClass("active");	
				awardedLink.removeClass("active");
				red.css('z-index', '10');
				white.css('z-index', '0');
				awarded.css('z-index', '0');
				sidebarLink.html('OTHER REDS<em>&nbsp;</em>');
				redWine.css('display', 'block');
				whiteWine.css('display', 'none');
				awardedWine.css('display', 'none');
				
				red.animate({
					'left' : '0'
				}, 2000);
				
				setTimeout(function() { 
						white.animate({
						'left' : '-800'
					}, 10);	
				}, 2000);		
				
				setTimeout(function() { 
						awarded.animate({
						'left' : '-800'
					}, 10);	
					f = true;
				}, 2000);	
			}
		});
		
		whiteLink.click(function (){
			if (f) {
				f = false;
				whiteLink.addClass("active");	
				redLink.removeClass("active");	
				awardedLink.removeClass("active");
				white.css('z-index', '10');
				red.css('z-index', '0');
				awarded.css('z-index', '0');
				sidebarLink.html('OTHER WHITE<em>&nbsp;</em>');
				redWine.css('display', 'none');
				whiteWine.css('display', 'block');
				awardedWine.css('display', 'none');
			
				white.animate({
					'left' : '0'
				}, 2000);
				
				setTimeout(function() { 
						red.animate({
						'left' : '-800'
					}, 10);	
				}, 2000);		
				
				setTimeout(function() { 
						awarded.animate({
						'left' : '-800'
					}, 10);	
					f = true;
				}, 2000);	
			}	
		});
		
		awardedLink.click(function (){
			if (f) {
				f = false;
				awardedLink.addClass("active");	
				whiteLink.removeClass("active");	
				redLink.removeClass("active");
				awarded.css('z-index', '10');
				white.css('z-index', '0');
				red.css('z-index', '0');
				sidebarLink.html('OTHER AWARDED<em>&nbsp;</em>');
				redWine.css('display', 'none');
				whiteWine.css('display', 'none');
				awardedWine.css('display', 'block');
			
				awarded.animate({
					'left' : '0'
				}, 2000);
				
				setTimeout(function() { 
						red.animate({
						'left' : '-800'
					}, 10);	
				}, 2000);		
			
				setTimeout(function() { 
						white.animate({
						'left' : '-800'
					}, 10);	
					f = true;
				}, 2000);
			}		
		});
	/////////////////////////////////////////////////////////////////
			function newStyle () {
				$('.main-menu UL LI').css({'font-size' : '9px', 'margin-right' : '2px'});
				$('.main-menu').css('margin-top', '25px');
				$('.main-menu UL LI A').css({'padding-top' : '15px', 'padding-bottom' : '15px'});
				$('.sub-menu').css('padding-top', '15px'); 
				$('.main-menu UL LI UL A').css({'padding-top' : '5px', 'padding-bottom' : '5px', 'padding-right': '10px', 'padding-left': '10px'})
				$('#content .main-content').css('margin-left', '14%');
				$('#footer .news').css('margin-right', '1%');
			}
			
			function oldStyle () {
				$('.main-menu UL LI').css({'font-size' : '14px', 'margin-right' : '10px'});
				$('.main-menu').css('margin-top', '30px');
				$('.main-menu UL LI A').css({'padding-top' : '10px', 'padding-bottom' : '10px'});
				$('.sub-menu').css('padding-top', '18px'); 
				$('.main-menu UL LI UL A').css({'padding-top' : '5px', 'padding-bottom' : '5px', 'padding-right': '10px', 'padding-left': '10px', 'font-size' : '12px'})
				$('#content .main-content').css({'margin-left' : 'auto', 'margin-right' : 'auto'});
				$('#footer .news').css('margin-right', '21%');
			}
			
			
			$(function() {
				if($(window).width()<1260) {
					newStyle();
				}
			}); 
			
			$(window).resize(function () { 
				if($(window).width()<1260) {
				newStyle();
				}
				else {
				oldStyle();
				}
			}); 
			 
	
});
		
		
		
		
		
		
		

	



