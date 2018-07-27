

var down = document.getElementById('down');
var submnu = document.getElementById('submnu');

down.onmouseover=function(){
	submnu.classList.remove('hide');
	submnu.classList.add('show');		
}
down.onmouseout=function(){
	
		
			//alert(event.target.id);
			submnu.classList.remove('show');
			submnu.classList.add('hide');					
		
	
		
	
	
}


