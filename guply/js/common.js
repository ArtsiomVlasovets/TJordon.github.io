$(function() {

	// Custom JS
	/*
	$("input, select, textarea").jqBootstrapValidation();
	*/
	$("input,select,textarea").jqBootstrapValidation(); 

	$('#loginId').click(function(){
  $('#reg-block').hide(350, function() {
    $('#login-block').show();
  });
});

	$('#createId').click(function(){
  $('#login-block').hide(350, function() {
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




});
