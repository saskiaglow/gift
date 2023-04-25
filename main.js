/* make images randomly placed when open page*/

const image = document.getElementById('image');
image.onmousedown = function(event) {
  image.style.position = 'absolute';
  image.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image.style.left = pageX - image.offsetWidth / 2 + 'px';
    image.style.top = pageY - image.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
image.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image.onmouseup = null;
  };
};
image.ondragstart = function() {
  return false;
};
image.ontouchstart = function(event) {
  image.style.position = 'absolute';
  image.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image.style.left = pageX - image.offsetWidth / 2 + 'px';
    image.style.top = pageY - image.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function ontouchmove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('touchmove', ontouchmove);
image.ontouchend = function() {
    document.removeEventListener('touchmove', ontouchmove);
    image.ontouchend = null;
  };
};
image.ondragstart = function() {
  return false;
};
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomizeImg(el) {
  el.style.position = "absolute";
  el.style.top = randint(0, 350) + "px";
  el.style.left = randint(0, 350) + "px";
}
let element = document.getElementById("image");
randomizeImg(element);


const image2 = document.getElementById('image2');
image2.onmousedown = function(event) {
  image2.style.position = 'absolute';
  image2.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image2.style.left = pageX - image2.offsetWidth / 2 + 'px';
    image2.style.top = pageY - image2.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
image2.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image2.onmouseup = null;
  };
};
image2.ondragstart = function() {
  return false;
};
image2.ontouchstart = function(event) {
  image2.style.position = 'absolute';
  image2.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image2.style.left = pageX - image2.offsetWidth / 2 + 'px';
    image2.style.top = pageY - image2.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function ontouchmove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('touchmove', ontouchmove);
image2.ontouchend = function() {
    document.removeEventListener('touchmove', ontouchmove);
    image2.ontouchend = null;
  };
};
image2.ondragstart = function() {
  return false;
};
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomizeImg(el) {
  el.style.position = "absolute";
  el.style.top = randint(0, 350) + "px";
  el.style.left = randint(0, 350) + "px";
}
let element2 = document.getElementById("image2");
randomizeImg(element2);


const image3 = document.getElementById('image3');
image3.onmousedown = function(event) {
  image3.style.position = 'absolute';
  image3.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image3.style.left = pageX - image3.offsetWidth / 2 + 'px';
    image3.style.top = pageY - image3.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
image3.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image3.onmouseup = null;
  };
};
image3.ondragstart = function() {
  return false;
};
image3.ontouchstart = function(event) {
  image3.style.position = 'absolute';
  image3.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image3.style.left = pageX - image3.offsetWidth / 2 + 'px';
    image3.style.top = pageY - image3.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function ontouchmove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('touchmove', ontouchmove);
image3.ontouchend = function() {
    document.removeEventListener('touchmove', ontouchmove);
    image3.ontouchend = null;
  };
};
image3.ondragstart = function() {
  return false;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomizeImg(el) {
  el.style.position = "absolute";
  el.style.top = randint(0, 350) + "px";
  el.style.left = randint(0, 350) + "px";
}
let element3 = document.getElementById("image3");
randomizeImg(element3);


const image4 = document.getElementById('image4');
image4.onmousedown = function(event) {
  image4.style.position = 'absolute';
  image4.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image4.style.left = pageX - image4.offsetWidth / 2 + 'px';
    image4.style.top = pageY - image4.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
image4.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image4.onmouseup = null;
  };
};
image4.ondragstart = function() {
  return false;
};
image4.ontouchstart = function(event) {
  image4.style.position = 'absolute';
  image4.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image4.style.left = pageX - image4.offsetWidth / 2 + 'px';
    image4.style.top = pageY - image4.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function ontouchmove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('touchmove', ontouchmove);
image4.ontouchend = function() {
    document.removeEventListener('touchmove', ontouchmove);
    image4.ontouchend = null;
  };
};
image4.ondragstart = function() {
  return false;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomizeImg(el) {
  el.style.position = "absolute";
  el.style.top = randint(0, 350) + "px";
  el.style.left = randint(0, 350) + "px";
}
let element4 = document.getElementById("image4");
randomizeImg(element4);


const image5 = document.getElementById('image5');
image5.onmousedown = function(event) {
  image5.style.position = 'absolute';
  image5.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image5.style.left = pageX - image5.offsetWidth / 2 + 'px';
    image5.style.top = pageY - image5.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
image5.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image5.onmouseup = null;
  };
};
image5.ondragstart = function() {
  return false;
};
image5.ontouchstart = function(event) {
  image5.style.position = 'absolute';
  image5.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image5.style.left = pageX - image5.offsetWidth / 2 + 'px';
    image5.style.top = pageY - image5.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function ontouchmove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('touchmove', ontouchmove);
image5.ontouchend = function() {
    document.removeEventListener('touchmove', ontouchmove);
    image5.ontouchend = null;
  };
};
image5.ondragstart = function() {
  return false;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomizeImg(el) {
  el.style.position = "absolute";
  el.style.top = randint(0, 350) + "px";
  el.style.left = randint(0, 350) + "px";
}
let element5 = document.getElementById("image5");
randomizeImg(element5);


const image6 = document.getElementById('image6');
image6.onmousedown = function(event) {
  image6.style.position = 'absolute';
  image6.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image6.style.left = pageX - image6.offsetWidth / 2 + 'px';
    image6.style.top = pageY - image6.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
image6.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image6.onmouseup = null;
  };
};
image6.ondragstart = function() {
  return false;
};
image6.ontouchstart = function(event) {
  image6.style.position = 'absolute';
  image6.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image6.style.left = pageX - image6.offsetWidth / 2 + 'px';
    image6.style.top = pageY - image6.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function ontouchmove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('touchmove', ontouchmove);
image6.ontouchend = function() {
    document.removeEventListener('touchmove', ontouchmove);
    image6.ontouchend = null;
  };
};
image6.ondragstart = function() {
  return false;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomizeImg(el) {
  el.style.position = "absolute";
  el.style.top = randint(0, 350) + "px";
  el.style.left = randint(0, 350) + "px";
}
let element6 = document.getElementById("image6");
randomizeImg(element6);


const image7 = document.getElementById('image7');
image7.onmousedown = function(event) {
  image7.style.position = 'absolute';
  image7.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image7.style.left = pageX - image7.offsetWidth / 2 + 'px';
    image7.style.top = pageY - image7.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
image7.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image7.onmouseup = null;
  };
};
image7.ondragstart = function() {
  return false;
};
image7.ontouchstart = function(event) {
  image7.style.position = 'absolute';
  image7.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image7.style.left = pageX - image7.offsetWidth / 2 + 'px';
    image7.style.top = pageY - image7.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function ontouchmove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('touchmove', ontouchmove);
image7.ontouchend = function() {
    document.removeEventListener('touchmove', ontouchmove);
    image7.ontouchend = null;
  };
};
image7.ondragstart = function() {
  return false;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomizeImg(el) {
  el.style.position = "absolute";
  el.style.top = randint(0, 350) + "px";
  el.style.left = randint(0, 350) + "px";
}
let element7 = document.getElementById("image7");
randomizeImg(element7);


const image8 = document.getElementById('image8');
image8.onmousedown = function(event) {
  image8.style.position = 'absolute';
  image8.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image8.style.left = pageX - image8.offsetWidth / 2 + 'px';
    image8.style.top = pageY - image8.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
image8.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image8.onmouseup = null;
  };
};
image8.ondragstart = function() {
  return false;
};
image8.ontouchstart = function(event) {
  image8.style.position = 'absolute';
  image8.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image8.style.left = pageX - image8.offsetWidth / 2 + 'px';
    image8.style.top = pageY - image8.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function ontouchmove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('touchmove', ontouchmove);
image8.ontouchend = function() {
    document.removeEventListener('touchmove', ontouchmove);
    image8.ontouchend = null;
  };
};
image8.ondragstart = function() {
  return false;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomizeImg(el) {
  el.style.position = "absolute";
  el.style.top = randint(0, 350) + "px";
  el.style.left = randint(0, 350) + "px";
}
let element8 = document.getElementById("image8");
randomizeImg(element8);


const image9 = document.getElementById('image9');
image9.onmousedown = function(event) {
  image9.style.position = 'absolute';
  image9.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image9.style.left = pageX - image9.offsetWidth / 2 + 'px';
    image9.style.top = pageY - image9.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
image9.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image9.onmouseup = null;
  };
};
image9.ondragstart = function() {
  return false;
};
image9.ontouchstart = function(event) {
  image9.style.position = 'absolute';
  image9.style.zIndex = 1000;
  document.body.append(image);
  function moveAt(pageX, pageY) {
    image9.style.left = pageX - image9.offsetWidth / 2 + 'px';
    image9.style.top = pageY - image9.offsetHeight / 2 + 'px';
  }
  moveAt(event.pageX, event.pageY);
  function ontouchmove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('touchmove', ontouchmove);
image9.ontouchend = function() {
    document.removeEventListener('touchmove', ontouchmove);
    image9.ontouchend = null;
  };
};
image9.ondragstart = function() {
  return false;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomizeImg(el) {
  el.style.position = "absolute";
  el.style.top = randint(0, 350) + "px";
  el.style.left = randint(0, 350) + "px";
}
let element9 = document.getElementById("image9");
randomizeImg(element9);


var x = document.getElementById("where");
var y = document.getElementById("Success");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Location is not supported.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  x.style.opacity = "0";
  fadeIn(x);
}
function fadeIn(element) {
  var opacity = 0;
  var timer = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1; // Increase the opacity by 0.1 every 100 milliseconds
  }, 100);
}
 
 let heart = document.getElementById("heart-map");
if (x.innerHTML == ("Latitude: 39.952583<br>Longitude: -75.165222")){
  alert("You're in Philadelphia! Sorry, this service is no longer available.");
  heart.style.display = 'none';
}
else {
  heart.style.display = 'block';
  alert("Put the pieces back together.");
}

function showAudio() {
  var a = document.getElementById("messages");
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}
