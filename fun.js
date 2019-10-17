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
  clearInterval(interDown);

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
  clearInterval(interUp);

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
  hideSnow();
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
  showSnow();
  soundFile.play();

  setTimeout(function () {
    myMoveStaline();
  }, 3000);
}




/////////////////////////////////////////////////////////
// Javascript made by http://peters1.dk/tools/snow.php //
/////////////////////////////////////////////////////////

// REMEMBER: To change the path, where snow.png is saved...
snow_img = "./snow.png";

// EXTRA: You can adjust the numbers of snowflakes you want on each page...
snow_no = 15;

if (typeof(window.pageYOffset) == "number")
{
  snow_browser_width = window.innerWidth;
  snow_browser_height = window.innerHeight;
}
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{http://peters1.dk/tools/snow.php
  snow_browser_width = document.body.offsetWidth;
  snow_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
  snow_browser_width = document.documentElement.offsetWidth;
  snow_browser_height = document.documentElement.offsetHeight;
}
else
{
  snow_browser_width = 500;
  snow_browser_height = 500;
}

snow_dx = [];
snow_xp = [];
snow_yp = [];
snow_am = [];
snow_stx = [];
snow_sty = [];

for (i = 0; i < snow_no; i++)
{
  snow_dx[i] = 0;
  snow_xp[i] = Math.random()*(snow_browser_width-50);
  snow_yp[i] = Math.random()*snow_browser_height;
  snow_am[i] = Math.random()*20;
  snow_stx[i] = 0.02 + Math.random()/10;
  snow_sty[i] = 0.7 + Math.random();
  if (i > 0) document.write("<\div id=\"snow_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+snow_img+"\" border=\"0\"><\/div>"); else document.write("<\div id=\"snow_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools/snow.php\" target=\"_blank\"><\img src=\""+snow_img+"\" border=\"0\"></a><\/div>");
}

function SnowStart()
{
  for (i = 0; i < snow_no; i++)
  {
    snow_yp[i] += snow_sty[i];
    if (snow_yp[i] > snow_browser_height-50)
    {
      snow_xp[i] = Math.random()*(snow_browser_width-snow_am[i]-30);
      snow_yp[i] = 0;
      snow_stx[i] = 0.02 + Math.random()/10;
      snow_sty[i] = 0.7 + Math.random();
    }
    snow_dx[i] += snow_stx[i];
    document.getElementById("snow_flake"+i).style.top=snow_yp[i]+"px";
    document.getElementById("snow_flake"+i).style.left=snow_xp[i] + snow_am[i]*Math.sin(snow_dx[i])+"px";
  }
  snow_time = setTimeout("SnowStart()", 10);
}

SnowStart();
hideSnow();

function hideSnow()
{
  document.getElementById("animate").style.display = "none";
  for (i = 0; i < snow_no; i++)
  {
    document.getElementById("snow_flake"+i).style.display = "none";
  }
  snow_time = setTimeout("SnowStart()", 10);
}

function showSnow()
{
  document.getElementById("animate").style.display = null;
  for (i = 0; i < snow_no; i++)
  {
    document.getElementById("snow_flake"+i).style.display = null;
  }
  snow_time = setTimeout("SnowStart()", 10);
}
