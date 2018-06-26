$(function() {


	$('#my-menu').mmenu({
		extensions: ['theme-white', 'effect-menu-slide', 'pagedim-black', "position-right" ],
		navbar: {
			title:'<p>A-Studio</p>'
		},

	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish',function(){
		$('.hamburger').addClass('is-active');
	}).bind('close:finish',function(){
		$('.hamburger').removeClass('is-active');
	})

$("#my-menu, .header-buttons").on("click","a", function (event) {

				api.close();
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        	  $('html, body').animate({scrollTop: top}, 1000);
  });
/*
$(".section-blog").on("mouseover", function () {
	$(".hamburger-inner::after").css("background-color","#ededed");
})
*/
});
