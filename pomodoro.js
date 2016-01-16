//set counters values
document.getElementById("plus").addEventListener('click', ascWork);
document.getElementById("minus").addEventListener('click', desWork);
document.getElementById("plus1").addEventListener('click', ascRelax);
document.getElementById("minus1").addEventListener('click', desRelax);

	var secWork = document.getElementById("w").innerHTML*60;				
	function ascWork(){
		secWork+=60;
		document.getElementById("w").innerHTML = Math.floor(secWork/60);		
		}
	
	function desWork(){
		secWork-=60;
		document.getElementById("w").innerHTML = Math.floor(secWork/60);		
		}

	var secRelax = document.getElementById("r").innerHTML*60;
	function ascRelax(){
		secRelax+=60;
		document.getElementById("r").innerHTML = Math.floor(secRelax/60);
	}
	function desRelax(){
		secRelax-=60;
		document.getElementById("r").innerHTML = Math.floor(secRelax/60);
	}
//work and relax sessions counter functions

function viewCount(anySec){
  if(anySec >= 60){
    var minutes = Math.floor(anySec/60);
  }
  if(anySec < 60){
  	minutes = "0";
  }
  if(minutes <= 9){
    minutes = "0" + minutes;
  }
  var seconds = anySec - minutes*60;
  if(seconds <= 9){
    seconds = "0" + seconds;  
  }
  return minutes + ":"+ seconds;
}

document.getElementById("start").addEventListener('click', countWork);
function countWork(){		
	if(secWork == 0){
		return countRelax();
	}else{
	while (secWork > 0){
		secWork-=1;
		var action = document.getElementById("mainCounter");
		action.innerHTML = viewCount(secWork);		
		setTimeout(countWork, 1000);	
		return secWork;
		}
	} 
}
function countRelax(){
	while (secRelax > 0){
		secRelax-=1;
		var action1 = document.getElementById("mainCounter");
		action1.innerHTML = viewCount(secRelax);		
		setTimeout(countRelax, 1000);			
		return secRelax;		
	}
}

