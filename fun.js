myMove();

function myMove() {
  var elem = document.getElementById("animate");
  var left = 0;
  var top = 0;
  var id = setInterval(frame, 2);
  let toRight = true;

  function frame() {
    if (toRight) {
      if (top === window.innerHeight) {
        left = window.innerWidth;
        top = 0;
        toRight = false
      } else {
        left++;
        top++;
        elem.style.left = left + "px";
        elem.style.top = top + "px";
      }
    } else {
      if (top === window.innerHeight) {
        left = 0;
        top = 0;
        toRight = true
      } else {
        left--;
        top++;
        elem.style.left = left + "px";
        elem.style.top = top + "px";
      }
    }

  }
}

function myMoveStaline() {
  var elem = document.getElementById("staline");
  var elem2 = document.getElementById("army");
  var pos = -600;
  var interUp = setInterval(frame, 2);

  function frame() {
    if (pos > 0) {
      clearInterval(interUp);
    } else {
      pos++;
      elem.style.bottom = pos + 'px';
      elem2.style.bottom = pos + 'px';
    }
  }
}

function downStaline() {
  var elem = document.getElementById("staline");
  var elem2 = document.getElementById("army");
  var pos = 0;
  var interDown = setInterval(frame, 2);

  function frame() {
    if (pos === -600) {
      clearInterval(interDown);
    } else {
      pos--;
      elem.style.bottom = pos + 'px';
      elem2.style.bottom = pos + 'px';
    }
  }
}


//Create the audio tag
var soundFile = document.createElement("audio");
soundFile.preload = "auto";

//Load the sound file (using a source element for expandability)
var src = document.createElement("source");
src.src = "./soviet-anthem.mp3";
soundFile.appendChild(src);

//Load the audio tag
//It auto plays as a fallback
soundFile.load();
soundFile.volume = 0.000000;
soundFile.play();


function stopAnthem() {
  let item = document.getElementById("text");
  item.style.color = "black";
  soundFile.volume = 0;
  setTimeout(function () {
     downStaline();
  }, 1);
}


//Plays the sound
function play() {
  //Set the current time for the audio file to the beginning
  soundFile.currentTime = 0.01;
  soundFile.volume = 1;
  let item = document.getElementById("text")
  item.style.color = "red";

  soundFile.play();

  setTimeout(function () {
    myMoveStaline();
  }, 1);
}


