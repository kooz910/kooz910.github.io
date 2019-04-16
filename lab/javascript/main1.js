var letters = ["a","b","c", "d","e","f","g","h","i","j"];
var text = "";
var i;
for (i = 0; i < letters.length; i++) {
  text += "Alphabet starts with " + letters[i]+" "+"and end in z" + "." + "<br>";
}
document.getElementById("demo").innerHTML = text;
document.getElementById("demo").style.backgroundColor = "#cce6ff";
document.getElementById("demo").style.fontSize= "40px";
document.getElementById("demo").style.fontFamily = "Noto Serif";
document.getElementById("demo").style.paddingRight = "30px";