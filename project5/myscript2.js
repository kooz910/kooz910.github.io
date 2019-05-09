$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
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
        $('#london').append('London'+" "+ '</br>'+ temp +'&#8451'+ '</br>');
       }
 });
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
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
    var svg2 = document.getElementById("svg2");
   if(blobwidth < "-20")
        {(svg2.style.width="50%");(svg2.style.fill="#000000");}

    else if(blobwidth < "-17.5")
        {(svg2.style.width="50%");(svg2.style.fill="#000000");}
    
    else if(blobwidth < "-15")
        {(svg2.style.width="50%");(svg2.style.fill="#060d13");}
    
     else if(blobwidth < "-12.5")
        {(svg2.style.width="50%");(svg2.style.fill="#060d13");}

    else if(blobwidth < "-10")
         {(svg2.style.width="50%");(svg2.style.fill="#0d1a26");}
    
    else if(blobwidth < "-7.5")
        {(svg2.style.width="50%");(svg2.style.fill="#0d1a26");}
    
    else if(blobwidth < "-5")
        {(svg2.style.width="50%");(svg2.style.fill="#0d1a26");}
    
    else if(blobwidth < "-2.5")
        {(svg2.style.width="50%");(svg2.style.fill="#132639");}
    
    else if(blobwidth < "0")
        {(svg2.style.width="50%"); (svg2.style.fill="#132639");}
    
    else if(blobwidth < "2.5")
        {(svg2.style.width="100%");(svg2.style.fill="#19334d");}

    else if(blobwidth < "5")
         {(svg2.style.width="100%");(svg2.style.fill="#204060");}

    else if(blobwidth < "7.5")
        {(svg2.style.width="100%");(svg2.style.fill="#264d73");}
    
    else if(blobwidth < "10")
       {(svg2.style.width="100%");(svg2.style.fill="#2d5986");}

    else if(blobwidth < "12.5")
        {(svg2.style.width="100%");(svg2.style.fill="#336699");}
    
    else if(blobwidth < "15")
       {(svg2.style.width="100%");(svg2.style.fill="#3973ac");}

    else if(blobwidth < "17.5")
        { (svg2.style.width="100%");(svg2.style.fill="#4080bf");}

    else if(blobwidth < "20")
         {(svg2.style.width="100%");(svg2.style.fill="#538cc6");}
    
    else if(blobwidth < "22.5")
        {(svg2.style.width="100%");(svg2.style.fill="#6699cc");}
    
    else if(blobwidth < "25")
        {(svg2.style.width="100%");(svg2.style.fill="#79a6d2");}

     else if(blobwidth < "27.5")
        {(svg2.style.width="100%");(svg2.style.fill="#8cb3d9");}
    
    else if(blobwidth < "30")
         {(svg2.style.width="100%");(svg2.style.fill="#9fbfdf");}

    else if(blobwidth < "32.5")
        {(svg2.style.width="100%");(svg2.style.fill="#b3cce6");}

    else if(blobwidth < "35")
        {(svg2.style.width="100%");(svg2.style.fill="#c6d9ec");}

    else if(blobwidth < "37.5")
        {(svg2.style.width="100%");(svg2.style.fill="#d9e6f2");}

    else if (blobwidth < "40")
        {(svg2.style.width="100%"); (svg2.style.fill="#ecf2f9");}

    else if (blobwidth > "40")
        {(svg2.style.width="100%"); (svg2.style.fill="#ecf2f9");}
    } 
    });


$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
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
    var svg2 = document.getElementById("svg2");
 if(blobthick < "1")
    {svg2.setAttribute("stroke-width","0");svg2.setAttribute("stroke","#ffffcc");}
    
    else if(blobthick < "1.25")
    {svg2.setAttribute("stroke-width","5");svg2.setAttribute("stroke","#ffffcc");}
    
    else if(blobthick < "1.5")
    {svg2.setAttribute("stroke-width","10");svg2.setAttribute("stroke","#fff7c2");}
    
     else if(blobthick < "1.75")
    {svg2.setAttribute("stroke-width","15");svg2.setAttribute("stroke","#fff0b8");}

    else if(blobthick < "2")
    {svg2.setAttribute("stroke-width","20");svg2.setAttribute("stroke","#ffe8ad");}
    
    else if(blobthick < "2.25")
    {svg2.setAttribute("stroke-width","25");svg2.setAttribute("stroke","#ffe0a3");}
    
    else if(blobthick < "2.5")
    {svg2.setAttribute("stroke-width","30");svg2.setAttribute("stroke","#ffd999");}

    else if(blobthick < "2.75")
    {svg2.setAttribute("stroke-width","35");svg2.setAttribute("stroke","#ffd18f");}
    
    else if(blobthick < "3")
    {svg2.setAttribute("stroke-width","40");svg2.setAttribute("stroke","#ffc985");}
    
    else if(blobthick < "3.25")
   {svg2.setAttribute("stroke-width","45");svg2.setAttribute("stroke","#ffc27a");}

    else if(blobthick < "3.5")
    {svg2.setAttribute("stroke-width","50");svg2.setAttribute("stroke","#ffba70");}

    else if(blobthick < "3.75")
    {svg2.setAttribute("stroke-width","55");svg2.setAttribute("stroke","#ffb266");}
    
    else if(blobthick < "4")
    {svg2.setAttribute("stroke-width","60");svg2.setAttribute("stroke","#ffab5c");}

    else if(blobthick < "4.25")
    {svg2.setAttribute("stroke-width","65");svg2.setAttribute("stroke","#ffa352");}
    
    else if(blobthick < "4.5")
    {svg2.setAttribute("stroke-width","70");svg2.setAttribute("stroke","#ff9c47");}

    else if(blobthick < "4.75")
    {svg2.setAttribute("stroke-width","75");svg2.setAttribute("stroke","#ff943d");}

    else if(blobthick < "5")
    {svg2.setAttribute("stroke-width","80");svg2.setAttribute("stroke","#ff8c33");}
   
    else if(blobthick < "5.25")
   {svg2.setAttribute("stroke-width","85");svg2.setAttribute("stroke","#ff8529");}
    
    else if(blobthick < "5.5")
    {svg2.setAttribute("stroke-width","90");svg2.setAttribute("stroke","#ff7d1f");}

     else if(blobthick < "5.75")
    {svg2.setAttribute("stroke-width","95");svg2.setAttribute("stroke","#ff6e0a");}

    else if(blobthick < "6")
   {svg2.setAttribute("stroke-width","100");svg2.setAttribute("stroke","#ff6600");}
    
    else if(blobthick > "6")
   {svg2.setAttribute("stroke-width","100");svg2.setAttribute("stroke","#ff6600");}
}
    });

