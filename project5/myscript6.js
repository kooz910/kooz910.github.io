$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
       function buttonClick(evt) {
            alert("Temp:" + temp+" "
                +'Temp Min: ' + tempmin +" "  
                + "Temp Max:" + tempmax  +" ");
        }
    }   
});
 

$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    var blobwidth = tempmin;
    var svg6 = document.getElementById("svg6");
     if(blobwidth < "-20")
        {(svg6.style.width="4%"); (svg6.style.fill="#ebf0fa");}

    else if(blobwidth < "-17.5")
        {(svg6.style.width="8%"); (svg6.style.fill="#ebf0fa");}
    
    else if(blobwidth < "-15")
        {(svg6.style.width="12%"); (svg6.style.fill="#d6e0f5");}
    
     else if(blobwidth < "-12.5")
        {(svg6.style.width="16%"); (svg6.style.fill="#d6e0f5");}

    else if(blobwidth < "-10")
         {(svg6.style.width="20%"); (svg6.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-7.5")
        {(svg6.style.width="24%"); (svg6.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-5")
        {(svg6.style.width="28%"); (svg6.style.fill="#adc2eb");}
    
    else if(blobwidth < "-2.5")
        {(svg6.style.width="32%"); (svg6.style.fill="#adc2eb");}
    
    else if(blobwidth < "0")
        {(svg6.style.width="36%"); (svg6.style.fill="#99b3e6");}
    
    else if(blobwidth < "2.5")
        {(svg6.style.width="40%"); (svg6.style.fill="#85a3e0");}

    else if(blobwidth < "5")
         {(svg6.style.width="44%"); (svg6.style.fill="#7094db");}

    else if(blobwidth < "7.5")
        {(svg6.style.width="48%"); (svg6.style.fill="#5c85d6");}
    
    else if(blobwidth < "10")
       {(svg6.style.width="52%"); (svg6.style.fill="#4775d1");}

    else if(blobwidth < "12.5")
        {(svg6.style.width="56%"); (svg6.style.fill="#3366cc");}
    
    else if(blobwidth < "15")
       {(svg6.style.width="60%"); (svg6.style.fill="#2e5cb8");}

    else if(blobwidth < "17.5")
        {(svg6.style.width="64%"); (svg6.style.fill="#2952a3");}

    else if(blobwidth < "20")
         {(svg6.style.width="68%"); (svg6.style.fill="#24478f");}
    
    else if(blobwidth < "22.5")
        {(svg6.style.width="72%"); (svg6.style.fill="#24478f");}
    
    else if(blobwidth < "25")
        {(svg6.style.width="76%"); (svg6.style.fill="#1f3d7a");}

     else if(blobwidth < "27.5")
        {(svg6.style.width="80%"); (svg6.style.fill="#1f3d7a");}
    
    else if(blobwidth < "30")
         {(svg6.style.width="84%"); (svg6.style.fill="#193366");}

    else if(blobwidth < "32.5")
        {(svg6.style.width="88%"); (svg6.style.fill="#193366");}

    else if(blobwidth < "35")
        {(svg6.style.width="92%"); (svg6.style.fill="#0f1f3d");}

    else if(blobwidth < "37.5")
        {(svg6.style.width="96%"); (svg6.style.fill="#0a1429");}

    else if (blobwidth < "40")
        {(svg6.style.width="100%"); (svg6.style.fill="#050a14");}
    
    } 
    });

$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    var blobwidth = tempmin;
    var svg6 = document.getElementById("svg6");
    if(blobwidth < "-20")
        {(svg6.style.width="2%"); (svg6.style.fill="#ebf0fa");}

    else if(blobwidth < "-17.5")
        {(svg6.style.width="4%"); (svg6.style.fill="#ebf0fa");}
    
    else if(blobwidth < "-15")
        {(svg6.style.width="6%"); (svg6.style.fill="#d6e0f5");}
    
     else if(blobwidth < "-12.5")
        {(svg6.style.width="8%"); (svg6.style.fill="#d6e0f5");}

    else if(blobwidth < "-10")
         {(svg6.style.width="10%"); (svg6.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-7.5")
        {(svg6.style.width="12%"); (svg6.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-5")
        {(svg6.style.width="14%"); (svg6.style.fill="#adc2eb");}
    
    else if(blobwidth < "-2.5")
        {(svg6.style.width="16%"); (svg6.style.fill="#adc2eb");}
    
    else if(blobwidth < "0")
        {(svg6.style.width="18%"); (svg6.style.fill="#99b3e6");}
    
    else if(blobwidth < "2.5")
        {(svg6.style.width="20%"); (svg6.style.fill="#85a3e0");}

    else if(blobwidth < "5")
         {(svg6.style.width="22%"); (svg6.style.fill="#7094db");}

    else if(blobwidth < "7.5")
        {(svg6.style.width="24%"); (svg6.style.fill="#5c85d6");}
    
    else if(blobwidth < "10")
       {(svg6.style.width="26%"); (svg6.style.fill="#4775d1");}

    else if(blobwidth < "12.5")
        {(svg6.style.width="28%"); (svg6.style.fill="#3366cc");}
    
    else if(blobwidth < "15")
       {(svg6.style.width="30%"); (svg6.style.fill="#2e5cb8");}

    else if(blobwidth < "17.5")
        {(svg6.style.width="32%"); (svg6.style.fill="#2952a3");}

    else if(blobwidth < "20")
         {(svg6.style.width="34%"); (svg6.style.fill="#24478f");}
    
    else if(blobwidth < "22.5")
        {(svg6.style.width="36%"); (svg6.style.fill="#24478f");}
    
    else if(blobwidth < "25")
        {(svg6.style.width="38%"); (svg6.style.fill="#1f3d7a");}

     else if(blobwidth < "27.5")
        {(svg6.style.width="40%"); (svg6.style.fill="#1f3d7a");}
    
    else if(blobwidth < "30")
         {(svg6.style.width="42%"); (svg6.style.fill="#193366");}

    else if(blobwidth < "32.5")
        {(svg6.style.width="44%"); (svg6.style.fill="#193366");}

    else if(blobwidth < "35")
        {(svg6.style.width="46%"); (svg6.style.fill="#0f1f3d");}

    else if(blobwidth < "37.5")
        {(svg6.style.width="48%"); (svg6.style.fill="#0a1429");}

    else if (blobwidth < "40")
        {(svg6.style.width="50%"); (svg6.style.fill="#050a14");}
    } 
    });
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    var blobwidth1 = tempmax;
    var svg6 = document.getElementById("svg6");
    if(blobwidth1 < "-20")
    {svg6.setAttribute("stroke","#f9ecec");}
    
    else if(blobwidth1 < "-17.5")
    {svg6.setAttribute("stroke","#f9ecec");}
    
    else if(blobwidth1 < "-15")
    {svg6.setAttribute("stroke","#f2d9d9");}
    
     else if(blobwidth1 < "-12.5")
    {svg6.setAttribute("stroke","#f2d9d9");}

    else if(blobwidth1 < "-10")
    {svg6.setAttribute("stroke","#ecc6c6");}
    
    else if(blobwidth1 < "-7.5")
    {svg6.setAttribute("stroke","#ecc6c6");}
    
    else if(blobwidth1 < "-5")
    {svg6.setAttribute("stroke","#e6b3b3");}
    
    else if(blobwidth1 < "-2.5")
    {svg6.setAttribute("stroke","#e6b3b3");}
    
    else if(blobwidth1 < "0")
    {svg6.setAttribute("stroke","#df9f9f");}
    
    else if(blobwidth1 < "2.5")
    {svg6.setAttribute("stroke","#d98c8c");}

    else if(blobwidth1 < "5")
    {svg6.setAttribute("stroke","#d27979");}

    else if(blobwidth1 < "7.5")
    {svg6.setAttribute("stroke","#cc6666");}
    
    else if(blobwidth1 < "10")
    {svg6.setAttribute("stroke","#c65353");}

    else if(blobwidth1 < "12.5")
    {svg6.setAttribute("stroke","#bf4040");}
    
    else if(blobwidth1 < "15")
    {svg6.setAttribute("stroke","#ac3939");}

    else if(blobwidth1 < "17.5")
    {svg6.setAttribute("stroke","#993333");}

    else if(blobwidth1 < "20")
    {svg6.setAttribute("stroke","#862d2d");}
   
    else if(blobwidth1 < "22.5")
    {svg6.setAttribute("stroke","#862d2d");}
    
    else if(blobwidth1 < "25")
    {svg6.setAttribute("stroke","#732626");}

     else if(blobwidth1 < "27.5")
    {svg6.setAttribute("stroke","#732626");}
    
    else if(blobwidth1 < "30")
    {svg6.setAttribute("stroke","#602020");}

    else if(blobwidth1 < "32.5")
    {svg6.setAttribute("stroke","#602020");}

    else if(blobwidth1 < "35")
    {svg6.setAttribute("stroke","#4d1919");}

    else if(blobwidth1 < "37.5")
    {svg6.setAttribute("stroke","#4d1919");}

    else if (blobwidth1 < "40")
    {svg6.setAttribute("stroke","#391313");}
}
 });

$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
function myWeatherInterpretation(){
    var blobthick = tempmax - tempmin;
    var svg6 = document.getElementById("svg6");
   if(blobthick < "-20")
    {svg6.setAttribute("stroke-width","1");}
    
    else if(blobthick < "-17.5")
    {svg6.setAttribute("stroke-width","10");}
    
    else if(blobthick < "-15")
    {svg6.setAttribute("stroke-width","20");}
    
     else if(blobthick < "-12.5")
    {svg6.setAttribute("stroke-width","30");}

    else if(blobthick < "-10")
    {svg6.setAttribute("stroke-width","40");}
    
    else if(blobthick < "-7.5")
    {svg6.setAttribute("stroke-width","50");}
    
    else if(blobthick < "-5")
    {svg6.setAttribute("stroke-width","60");}

    else if(blobthick < "-2.5")
    {svg6.setAttribute("stroke-width","70");}
    
    else if(blobthick < "0")
    {svg6.setAttribute("stroke-width","80");}
    
    else if(blobthick < "2.5")
   {svg6.setAttribute("stroke-width","90");}

    else if(blobthick < "5")
    {svg6.setAttribute("stroke-width","100");}

    else if(blobthick < "7.5")
    {svg6.setAttribute("stroke-width","110");}
    
    else if(blobthick < "10")
    {svg6.setAttribute("stroke-width","120");}

    else if(blobthick < "12.5")
    {svg6.setAttribute("stroke-width","130");}
    
    else if(blobthick < "15")
    {svg6.setAttribute("stroke-width","140");}

    else if(blobthick < "17.5")
    {svg6.setAttribute("stroke-width","150");}

    else if(blobthick < "20")
    {svg6.setAttribute("stroke-width","160");}
   
    else if(blobthick < "22.5")
   {svg6.setAttribute("stroke-width","170");}
    
    else if(blobthick < "25")
    {svg6.setAttribute("stroke-width","180");}

     else if(blobthick < "27.5")
    {svg6.setAttribute("stroke-width","190");}
    
    else if(blobthick < "30")
   {svg6.setAttribute("stroke-width","200");}

    else if(blobthick < "32.5")
    {svg6.setAttribute("stroke-width","210");}

    else if(blobthick < "35")
   {svg6.setAttribute("stroke-width","220");}

    else if(blobthick < "37.5")
    {svg6.setAttribute("stroke-width","230");}

    else if (blobthick < "40")
    {svg6.setAttribute("stroke-width","240");}
}
    });


