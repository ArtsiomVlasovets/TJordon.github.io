var down = document.getElementById('down');
var submnu = document.getElementById('submnu');
var home = document.getElementById('home-container');
var topLine = document.querySelectorAll('.pages-header');
var sectionLine = document.querySelectorAll('.event-section');
var portfolio = document.getElementById('my-portfolio');
<<<<<<< HEAD
var portfItem = $('.portfolio-item');

function func1(){
	portfItem[0].getElementsByClassName('descrTravel')[0].classList.toggle('hide');
	portfItem[0].getElementsByClassName('callIn')[0].classList.toggle('hide');
	/*portfItem[0].onmouseout = function(){
	portfItem[0].getElementsByClassName('descrTravel')[0].classList.toggle('hide');
	portfItem[0].getElementsByClassName('callIn')[0].classList.toggle('hide');
}	*/
}

document.onmouseover = function(event){
	
	if(event.target == portfItem[0]){
		func1();

	}
	
}


=======
>>>>>>> 2cf13129e5f1e1b6d069b0650eadabec71885951
down.onmouseover=function(){
	//alert(submnu);
	submnu.classList.remove('hide');
	submnu.classList.add('show');		
}

down.onmouseout=function(){
	

			//alert(event.target.id);
			submnu.classList.remove('show');
			submnu.classList.add('hide');					

		}

<<<<<<< HEAD
		window.onresize = fTime;

		function fTime(){
			var homeHeight;
			var topLineHeight = topLine[0].offsetHeight;
			var sectionHeight = sectionLine[0].offsetHeight;

			if(portfolio) {
				var portfolioHeight = portfolio.offsetHeight;	
				homeHeight = ((document.documentElement.clientHeight) - topLineHeight - sectionHeight - portfolioHeight);	
			}else{
				homeHeight = ((document.documentElement.clientHeight) - topLineHeight - sectionHeight);		
			}
			home.style.minHeight = (homeHeight-20)+'px'; 
		}

		fTime();



		$('.accordion').magnificPopup({
=======
window.onresize = fTime;

 function fTime(){
	var homeHeight;
	var topLineHeight = topLine[0].offsetHeight;
	var sectionHeight = sectionLine[0].offsetHeight;

	if(portfolio) {
	var portfolioHeight = portfolio.offsetHeight;	
	homeHeight = ((document.documentElement.clientHeight) - topLineHeight - sectionHeight - portfolioHeight);	
	}else{
	homeHeight = ((document.documentElement.clientHeight) - topLineHeight - sectionHeight);		
	}
	home.style.minHeight = (homeHeight-20)+'px'; 
}

fTime();



$('.accordion').magnificPopup({
>>>>>>> 2cf13129e5f1e1b6d069b0650eadabec71885951
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

<<<<<<< HEAD
		$('.portfolio-section').magnificPopup({
=======
$('.portfolio-section').magnificPopup({
>>>>>>> 2cf13129e5f1e1b6d069b0650eadabec71885951
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

<<<<<<< HEAD
		var flag = 0;

		function hideLoad(){
			if(flag == 0){
				$('.collapse .main-nav ul').show(10);
				flag = 1;
			}else if(flag == 1){
				$('.collapse .main-nav ul').hide(10);
				flag = 0;
			}
		}

		$('#togglBtnId').on('click', hideLoad);



		function windowSize(){
			if ($(window).width() <= '1200'){
				$('#topLineId').hide(10);
				$('#secondLineId').show(10);
			} else {
				$('#secondLineId').hide(10);
				$('#topLineId').show(10);
			}
		}

		$(window).on('load resize',windowSize);


		var portfolioItem = $('.portfolio-item');

		for (let i of portfolioItem) {
			console.log(i);
			i.addEventListener('mouseover', over);
			i.addEventListener('mouseout', over);
		} 



		function over(){
			var txt = this.getElementsByTagName('span')[0].innerHTML;
			this.getElementsByTagName('h1')[0].innerHTML = txt;
			this.getElementsByClassName('descrTravel')[0].classList.toggle('hide');
			this.getElementsByClassName('callIn')[0].classList.toggle('hide');


		}


		function funcGallery(){
			var pL = portfolioItem.length;
			if (pL <= 5){
				switch (pL) {
					case 1:
					portfolioItem[0].style.gridColumn='1/7';
					portfolioItem[0].style.gridRow='1/3';
					break;
					case 2:
					for (var i = 0; i < 2; i++) {
						switch (i) {
							case 0:
							portfolioItem[i].style.gridColumn='1/4';
							portfolioItem[i].style.gridRow='1/3';
							break;
							case 1:
							portfolioItem[i].style.gridColumn='4/7';
							portfolioItem[i].style.gridRow='1/3';
							break;
						}
					}
					break;
					case 3:
					for (var i = 0; i < 3; i++) {
						switch (i) {
							case 0:
							portfolioItem[i].style.gridColumn='1/4';
							break;
							case 1:
							portfolioItem[i].style.gridColumn='4/7';
							break;
							case 2:
							portfolioItem[i].style.gridColumn='1/7';
							break;
						}
					}
					break;
					case 4:
					for (var i = 0; i < 4; i++) {
						switch (i) {
							case 0:
							portfolioItem[i].style.gridColumn='1/4';
							break;
							case 1:
							portfolioItem[i].style.gridColumn='4/7';
							break;
							case 2:
							portfolioItem[i].style.gridColumn='1/4';
							break;
							case 3:
							portfolioItem[i].style.gridColumn='4/7';
							break;
						}
					}
					break;		
					case 5:
					for (var i = 0; i < 5; i++) {
						switch (i) {
							case 0:
							portfolioItem[i].style.gridColumn='1/3';
							break;
							case 1:
							portfolioItem[i].style.gridColumn='3/5';
							portfolioItem[i].style.gridRow='1/3';
							break;
							case 2:
							portfolioItem[i].style.gridColumn='5/7';
							portfolioItem[i].style.gridRow='1/4';
							break;
							case 3:
							portfolioItem[i].style.gridColumn='1/3';
							portfolioItem[i].style.gridRow='2/3';
							break;
							case 4:
							portfolioItem[i].style.gridColumn='1/5';
							break;
						}
					}
					break;

				}
			} else if(pL > 5){
				var n = 1;
				var c = Math.floor(pL/5);
				var os = pL%5;
				var l = 0;
				for (var k = 0; k < c; k++) {

					for (var i = l; i < (l+5); i++) {
						switch (i) {
							case l:
							portfolioItem[i].style.gridColumn='1/3';
							break;
							case (l+1):
							portfolioItem[i].style.gridColumn='3/5';
							portfolioItem[i].style.gridRow=(n + '/' + (n+2));
							break;
							case (l+2):
							portfolioItem[i].style.gridColumn='5/7';
							portfolioItem[i].style.gridRow=(n + '/' + (n+3));
							break;
							case (l+3):
							portfolioItem[i].style.gridColumn='1/3';
							portfolioItem[i].style.gridRow=((n + 1) + '/' + (n+2));
							break;
							case (l+4):
							portfolioItem[i].style.gridColumn='1/5';
							break;
						}
					}
					l=l+5;
					n=n+3;
				} if(os){
					switch (os) {
						case 1:
						portfolioItem[l].style.gridColumn='1/7';
						portfolioItem[l].style.gridRow=(n + '/' + (n+2));
						break;
						case 2:
						for (var i = l; i < (l+2); i++) {
							switch (i) {
								case l:
								portfolioItem[i].style.gridColumn='1/4';
								portfolioItem[i].style.gridRow=(n + '/' + (n+2));
								break;
								case l+1:
								portfolioItem[i].style.gridColumn='4/7';
								portfolioItem[i].style.gridRow=(n + '/' + (n+2));
								break;
							}
						}
						break;
						case 3:
						for (var i = l; i < (l+3); i++) {
							switch (i) {
								case l+0:
								portfolioItem[i].style.gridColumn='1/4';
								break;
								case l+1:
								portfolioItem[i].style.gridColumn='4/7';
								break;
								case l+2:
								portfolioItem[i].style.gridColumn='1/7';
								break;
							}
						}
						break;
						case 4:
						for (var i = l; i < (l+4); i++) {
							switch (i) {
								case l+0:
								portfolioItem[i].style.gridColumn='1/4';
								break;
								case l+1:
								portfolioItem[i].style.gridColumn='4/7';
								break;
								case l+2:
								portfolioItem[i].style.gridColumn='1/4';
								break;
								case l+3:
								portfolioItem[i].style.gridColumn='4/7';
								break;
							}
						}
						break;	
					}
				}
			}
		}
		
		funcGallery();

	/*
&:nth-child(1)
	grid-column: 1 / 3
&:nth-child(2)
	grid-column: 3 / 5
	grid-row: 1 / 3
	background-color: $accent
&:nth-child(3)
	grid-column: 5 / 7
	grid-row: 1 / 5		
&:nth-child(4)
	grid-column: 1 / 2
	grid-row:  2 / 5
&:nth-child(6)
	grid-column: 2 / 5
	grid-row:  3 / 5
*/	
=======
var flag = 0;

function hideLoad(){
if(flag == 0){
	$('.collapse .main-nav ul').show(10);
	flag = 1;
	}else if(flag == 1){
	$('.collapse .main-nav ul').hide(10);
	flag = 0;
	}
}

$('#togglBtnId').on('click', hideLoad);



function windowSize(){
    if ($(window).width() <= '1200'){
        $('#topLineId').hide(10);
        $('#secondLineId').show(10);
    } else {
        $('#secondLineId').hide(10);
        $('#topLineId').show(10);
    }
}

$(window).on('load resize',windowSize);



>>>>>>> 2cf13129e5f1e1b6d069b0650eadabec71885951
