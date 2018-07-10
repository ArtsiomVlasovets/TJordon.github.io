$(function() {

	// Custom JS
	/*
	$("input, select, textarea").jqBootstrapValidation();
	*/
	$("input,select,textarea").jqBootstrapValidation(); 

	$('#loginId').click(function(){
		$('#reg-block').hide(0, function() {
			$('#login-block').show();
		});
	});

	$('#createId').click(function(){
		$('#login-block').hide(0, function() {
			$('#reg-block').show();
		});
	});

	$('.popup .close_window, .overlay').click(function (){
		$('.popup, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
	});
	$('#open_window').click(function (e){
		$('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
		e.preventDefault();
	});

	$('.popup-credit .close_window_credit, .overlay').click(function (){
		$('.popup-credit, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
	});
	$('ul li:nth-child(3)').click(function (e){
		$('.popup-credit, .overlay').css({'opacity': 1, 'visibility': 'visible'});
		e.preventDefault();
	});

	$('.popup-contactUs .close_window_contactUs, .overlay').click(function (){
		$('.popup-contactUs, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
	});
	$('#contactUs, ul li:nth-child(2)').click(function (e){
		$('.popup-contactUs, .overlay').css({'opacity': 1, 'visibility': 'visible'});
		e.preventDefault();
	});

	setInterval(function() {
		var pos = $('.pos-f-t');
		var faq = $('#togle-faq-class');

		if(($(window).width()) < 990){
			pos.removeClass('display-none');
			faq.addClass('display-none');
		}
		else if(($(window).width()) > 990){
			faq.removeClass('display-none');
			pos.addClass('display-none');
		}
	}, 100);


});
