$(function() {

	$(".site-header").css("min-height", ($(window).height()+200));

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', "position-right" ],
		navbar: {
			title:'<p>DGYM</p>'
		},

	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish',function(){
		$('.hamburger').addClass('is-active');
	}).bind('close:finish',function(){
		$('.hamburger').removeClass('is-active');
	})

$("#my-menu").on("click","a", function (event) {
				api.close();
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

$(".call-in").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

 $(function() {
    $('p.animated').hover(
     function() {
      $(this).addClass('fadeInRight'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass(' fadeInLeft'); // Убираем класс
     }
    )})


	$("form.callback").submit(function() { //Change
		var th = $(this);
		/*$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done*/$(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});



	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	})
/*
	$('select').selectize({
		create: true;
	});*/
	
	setInterval(function() {
		var fa = $('.fa-stack');
		var gMap = $('iframe');
		var fixWidth = $('.my-map').width();

		if(($(window).width()) < 1900){
			gMap.attr('width', fixWidth);
			gMap.attr('height', 'auto');
		}

		if(($(window).width()) < 1200){
			fa.removeClass('fa-3x').addClass('fa-2x');
		}
		else if(fa.hasClass('fa-2x')){
			fa.removeClass('fa-2x').addClass('fa-3x');
		}
	}, 100);

});
