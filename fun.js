myMove();

function myMove() {
 var elem = document.getElementById("animate");
 var pos = 0;
 var id = setInterval(frame, 2);
 function frame() {
  if (pos === window.innerWidth) {
   pos = 0
  } else {
   pos++;
   elem.style.left = pos + "px";
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

//Plays the sound
function play() {
 //Set the current time for the audio file to the beginning
 soundFile.currentTime = 0.01;
 soundFile.volume = 1;
 let item = document.getElementById("text")
 item.style.color = item.style.color === "red" ?  "black" : "red"

 //Due to a bug in Firefox, the audio needs to be played after a delay
 setTimeout(function(){soundFile.play();},1);
}

