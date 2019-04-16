 alert("Welcome! Please view console on your browser.");
var a = "Zen Koo";
  console.log(a);
var b = "7";
  console.log(b);
var c="7777777"
console.log(c);
console.log(b+100< c);
console.log(a+" "+"likes"+" "+b+" "+"and"+" "+c+".")

console.log(b - 10);
console.log(b - 100);
console.log(b - c);
console.log(c - 10);
console.log(c - 100);

var e=["England","Japan","France"];
console.log(e[0]);
console.log(e[e.length-2]);
console.log(e[e.length-1]);

var time = new Date();
console.log("The current time is"+" "+ time +".")

var hour= new Date().getHours();
if (hour === "11") {
 console.log("It is"+" "+ hour +" "+"now"+".");}
else{ 
 console.log("It not"+" "+ "11" +" "+"yet"+".");}

 var name = "Zen Koo";
 if (name.length -"1" < "9"){
 console.log("My name is relatively short.");}
else if (name.length -"1" >"14"){ 
 console.log("My name is relatively long.");}
else{
console.log("My name is neither short nor long.");}

var minute= new Date().getMinutes();
var newyork="43";
function convert(newyork) {
	return(newyork)=(newyork-32)*5/9 
} 
console.log("The temperature of New York City is"+" "+ convert(newyork)+" "+"Celsius"+" "+"at"+" "+hour+":"+ minute+".")
var paris="56";
function convert(paris) {
	return(paris)=(paris-32)*5/9 
} 
console.log("The temperature of Paris is"+" "+ convert(paris)+" "+"Celsius"+" "+"at"+" "+hour+":"+ minute+".")

