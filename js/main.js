particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

function blogReveal(){
  document.getElementById("entries-id").setAttribute('style', 'font-size:50px;-webkit-animation: fadein 1s;');

  var list_element_array = document.querySelector("#blog-entries-list").children;
  for(var i=0; i<list_element_array.length; i++){
    list_element_array[i].setAttribute('style', 'padding: 20px');
  }

  document.getElementById("name").setAttribute('style', 'font-size:0px');

}

function blogHide(){
  document.getElementById("entries-id").setAttribute('style', 'font-size:0px;');

  var list_element_array = document.querySelector("#blog-entries-list").children;
  for(var i=0; i<list_element_array.length; i++){
    list_element_array[i].setAttribute('style', 'padding: 0px');
  }

  document.getElementById("name").setAttribute('style', 'font-size:220px;-webkit-animation:fadein 1s;');

}

function nameChange(x){
  switch(x){
    case 1:
      document.getElementById("name").text = "Blog.";
      document.getElementById("name").style.color = "#5CB3FF";
      break;
    case 2:
      document.getElementById("name").text = "Sai.";
      document.getElementById("name").style.color = "white";
      break;
  }
}

function zoom(ref){
  var list_element_array = document.querySelector("#blog-entries-list").children;
  for(var i=0; i<list_element_array.length; i++){
    if((i+1) == ref){
      list_element_array[i].setAttribute('style', 'transform: scale(1.2);padding: 20px');
    }
  }
}

function unzoom(ref){
  var list_element_array = document.querySelector("#blog-entries-list").children;
  for(var i=0; i<list_element_array.length; i++){
    if((i+1) == ref){
      list_element_array[i].setAttribute('style', 'transform: scale(1);padding: 20px;');
    }
  }
}

function openAboutMe(x){
  var elements = document.getElementById("panel-slide-id").children;
  for(var i=0; i<elements.length; i++){
    if(i == x || i == 0){
      console.log("Chosen: " + elements[i]);
      elements[i].style.display = "block";
    }else{
      elements[i].style.display = "none";
    }
  }
	document.getElementById("panel-slide-id").style.width = "93%";
}

function closeAboutMe(){
	document.getElementById("panel-slide-id").style.width = "0";
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
