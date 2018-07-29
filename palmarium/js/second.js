var down = document.getElementById('down');
var submnu = document.getElementById('submnu');

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





$('.accordion').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

$('.portfolio-section').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

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
        $('#secondLineId').show(10);
        $('#topLineId').hide(10);
    } else {
        $('#secondLineId').hide(10);
        $('#topLineId').show(10);
    }
}

$(window).on('load resize',windowSize);



