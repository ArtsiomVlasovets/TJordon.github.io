$(function() {

	// Custom JS
	/*
	$("input, select, textarea").jqBootstrapValidation();
	*/
	$("input,select,textarea").jqBootstrapValidation(); 

	$('#loginId').click(function(){
  $('#reg-block').hide('slow', function() {
    $('#login-block').show();
  });
});

	$('#createId').click(function(){
  $('#login-block').hide('slow', function() {
    $('#reg-block').show();
  });
});


});
