function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m+ ":"+ s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
document.getElementById("txt").style.color = "black";
document.getElementById("txt").style.fontSize = "xx-large";

var img = document.getElementById("img");
var images = [], x = 0;
images[0] = "clouds.png";
images[1] = "eat.png";
images[2] = "flower.png";
images[3] = "happy.png";
images[4] = "lighting.png";
images[5] = "music.png";
images[6] = "rainning.png";
images[7] = "sleeping.png";
images[8] = "sunshine.png";
images[9] = "tea.png";
images[10] = "eat.png";
images[11] = "wakeup.png";
images[12] = "working.png";
var day;
switch (new Date().getHours()) {
  case 0:
    day = document.getElementById('img').width="50%";
    img.src = images[7];
    break;
  case 1:
    day = document.getElementById('img');
    img.src = images[7];
    break;
  case 2:
    day = document.getElementById('img');
    img.src = images[7];
    break;
  case 3:
    day = document.getElementById('img');
    img.src = images[7];
    break;
  case 4:
    day = document.getElementById('img');
    img.src = images[7];
    break;
  case 5:
    day = document.getElementById('img');
    img.src = images[7];
  case  6:
    day = document.getElementById('img');
    img.src = images[11];
    case 7:
    day = document.getElementById('img');
    img.src = images[11];
    break;
  case 8:
    day = document.getElementById('img');
    img.src = images[10];
    break;
  case 9:
    day = document.getElementById('img');
    img.src = images[12];
    break;
  case 10:
    day = document.getElementById('img');
    img.src = images[12];
    break;
  case 11:
    day = document.getElementById('img');
    img.src = images[12];
    break;
  case 12:
    day = document.getElementById('img');
    img.src = images[9];
    break;
  case  13:
    day = document.getElementById('img');
    img.src = images[9];
case 14:
    day = document.getElementById('img');
    img.src = images[8];
    break;
  case 15:
    day = document.getElementById('img');
    img.src = images[8];
    break;
  case 16:
    day = document.getElementById('img');
    img.src = images[6];
    break;
  case 17:
    day = document.getElementById('img');
    img.src = images[4];
    break;
  case 18:
    day = document.getElementById('img');
    img.src = images[2];
    break;
  case 19:
    day = document.getElementById('img');
    img.src = images[3];
    break;
  case  20:
    day = document.getElementById('img');
    img.src = images[3];
    case 21:
    day = document.getElementById('img');
    img.src = images[2];
    break;
  case 22:
    day = document.getElementById('img');
    img.src = images[5];
    break;
  case 23:
    day = document.getElementById('img');
    img.src = images[1];
    break;
  case 24:
    day = document.getElementById('img');
    img.src = images[7];
    break;
  }
