var home = document.getElementById('home-container');
var topLine = document.querySelectorAll('.home-header .top-line');
/*
for(let i in imgs){
	i.onclick = function(event){
		popup[0].classList.add('show');
		popup[0].classList.remove('hide');

	}
}
*/

window.onresize = fTime;

 function fTime(){
	var homeHeight;
	var topLineHeight = topLine[0].offsetHeight;
	homeHeight = ((document.documentElement.clientHeight) - topLineHeight);
	home.style.minHeight = (homeHeight-20)+'px'; 
}

fTime();

var imgHead = [
			'img/foto-_13.jpg',
			'img/foto-_15.jpg',
			'img/foto-_16.jpg',
		], i=1;
	function csaHead(){

		if(i > (imgHead.length-1)){
			$('.csa-head').animate({'opacity':'0.5'},300,function(){
				i=1;
				$('.csa-head').css({'background-image':'url('+imgHead[0]+')'});
			});
			$('.csa-head').animate({'opacity':'1'},700);
		}else{
			$('.csa-head').animate({'opacity':'0.5'},300,function(){
				$('.csa-head').css({'background-image':'url('+imgHead[i]+')'});
				i++;
			});
			$('.csa-head').animate({'opacity':'1'},700);
		}
		
	}
	var intervalCsaHead = setInterval(csaHead,5000);
//setInterval(fTime, 100);




