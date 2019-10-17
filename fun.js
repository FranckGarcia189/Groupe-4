myMove();

function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 2);
  let toRight = true;

  function frame() {
    if (toRight) {
      if (pos === window.innerWidth || pos === window.innerHeight) {
        pos = window.innerWidth;
        toRight = !toRight
      } else {
        pos++;
        elem.style.left = pos + "px";
        elem.style.top = pos + "px";
      }
    } else {
      if (pos === window.innerWidth || pos === window.innerHeight) {
        pos = 0;
        toRight = !toRight
      } else {
        pos--;
        elem.style.left = pos + "px";
        elem.style.top = pos + "px";
      }
    }

  }
}

function myMoveStaline() {
  var elem = document.getElementById("staline");
  var pos = -300;
  var id = setInterval(frame, 2);

  function frame() {
    if (pos === 0) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + 'px';
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

