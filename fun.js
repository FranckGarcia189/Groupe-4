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
  var id = setInterval(frame, 2);

  function frame() {
    if (pos === 0) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + 'px';
      elem2.style.bottom = pos + 'px';
    }
  }


  let inter = setInterval(function () {
    let staline = document.getElementById("staline");
    let pos = staline.style.bottom;
    if (pos < 0) {
      staline.style.bottom = "0px"
    } else {
      clearInterval(inter)
    }
  }, 2);

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

//Plays the sound
function play() {
  //Set the current time for the audio file to the beginning
  soundFile.currentTime = 0.01;
  soundFile.volume = 1;
  let item = document.getElementById("text")
  item.style.color = item.style.color === "red" ? "black" : "red";

  soundFile.play();

  setTimeout(function () {
    myMoveStaline();
  }, 10);

}

