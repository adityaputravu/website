const typeit = window.typeit;

function openAboutMe(){
	document.getElementById("about-me-slide-id").style.width = "93%";
}

function closeAboutMe(){
	document.getElementById("about-me-slide-id").style.width = "0";
}

function setSpin(id){
	document.getElementById(id).setAttribute('style', '-webkit-animation:spin 0.25s linear 1; width:40px;height:40px');
}

function setNoSpin(id){
	document.getElementById(id).removeAttribute('style');
	document.getElementById(id).setAttribute('style', 'width:40px;height:40px');
	
}

function onHover(x){
	switch(x){
		case 1:
			setSpin("twitter-logo");
			break;
		case 2:
			setSpin("github-logo");
			break;
		case 3:
			setSpin("linkedin-logo");
			break;
	}
} 
function offHover(x){
	switch(x){
		case 1:
			setNoSpin("twitter-logo");
			break;
		case 2:
			setNoSpin("github-logo");
			break;
		case 3:
			setNoSpin("linkedin-logo");
			break;
	}
} 
