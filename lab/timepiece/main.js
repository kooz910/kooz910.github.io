function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
document.getElementById("txt").style.color = "#3399ff";
document.getElementById("txt").style.fontSize = "xx-large";

window.onload = function () {
    var img = new Image();
    img.src = 'html5.png';
 
    img.onload = function () {
      // CREATE CANVAS CONTEXT.
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
 
      ctx.drawImage(img, 0, 0);  // DRAW THE IMAGE TO THE CANVAS.
     }
  }
var day;
switch (new Date().getHours()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    case 7:
    day = "Sunday";
    break;
  case 8:
    day = "Monday";
    break;
  case 9:
    day = "Tuesday";
    break;
  case 10:
    day = "Wednesday";
    break;
  case 11:
    day = "Thursday";
    break;
  case 12:
    day = "Friday";
    break;
  case  13:
    day = "Saturday";
case 14:
    day = "Sunday";
    break;
  case 15:
    day = "Monday";
    break;
  case 16:
    day = "Tuesday";
    break;
  case 17:
    day = "Wednesday";
    break;
  case 18:
    day = "Thursday";
    break;
  case 19:
    day = "Friday";
    break;
  case  20:
    day = "Saturday";
    case 21:
    day = "Sunday";
    break;
  case 22:
    day = "Monday";
    break;
  case 23:
    day = "Tuesday";
    break;
  case 24:
    day = "Wednesday";
    break;
  }
document.getElementById("demo").innerHTML = "Today is " + day;
document.getElementById("demo").style.color = "#00000";
document.getElementById("demo").style.fontSize = "xx-large";
