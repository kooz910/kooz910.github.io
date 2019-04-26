$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=6455259&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
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
    var svg1 = document.getElementById("svg1");
    if(blobwidth < "-20")
        {(svg1.style.width="1%"); (svg1.style.fill="#ebf0fa");}

    else if(blobwidth < "-17.5")
        {(svg1.style.width="10%"); (svg1.style.fill="#ebf0fa");}
    
    else if(blobwidth < "-15")
        {(svg1.style.width="20%"); (svg1.style.fill="#d6e0f5");}
    
     else if(blobwidth < "-12.5")
        {(svg1.style.width="30%"); (svg1.style.fill="#d6e0f5");}

    else if(blobwidth < "-10")
         {(svg1.style.width="40%"); (svg1.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-7.5")
        {(svg1.style.width="50%"); (svg1.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-5")
        {(svg1.style.width="60%"); (svg1.style.fill="#adc2eb");}
    
    else if(blobwidth < "-2.5")
        {(svg1.style.width="70%"); (svg1.style.fill="#adc2eb");}
    
    else if(blobwidth < "0")
        {(svg1.style.width="80%"); (svg1.style.fill="#99b3e6");}
    
    else if(blobwidth < "2.5")
        {(svg1.style.width="90%"); (svg1.style.fill="#85a3e0");}

    else if(blobwidth < "5")
         {(svg1.style.width="100%"); (svg1.style.fill="#7094db");}

    else if(blobwidth < "7.5")
        {(svg1.style.width="110%"); (svg1.style.fill="#5c85d6");}
    
    else if(blobwidth < "10")
       {(svg1.style.width="120%"); (svg1.style.fill="#4775d1");}

    else if(blobwidth < "12.5")
        {(svg1.style.width="130%"); (svg1.style.fill="#3366cc");}
    
    else if(blobwidth < "15")
       {(svg1.style.width="140%"); (svg1.style.fill="#2e5cb8");}

    else if(blobwidth < "17.5")
        {(svg1.style.width="150%"); (svg1.style.fill="#2952a3");(svg1.style.stroke="#f9ecec"); (svg1.style.stroke="#f9ecec");}

    else if(blobwidth < "20")
         {(svg1.style.width="160%"); (svg1.style.fill="#24478f");}
    
    else if(blobwidth < "22.5")
        {(svg1.style.width="170%"); (svg1.style.fill="#24478f");}
    
    else if(blobwidth < "25")
        {(svg1.style.width="180%"); (svg1.style.fill="#1f3d7a");}

     else if(blobwidth < "27.5")
        {(svg1.style.width="190%"); (svg1.style.fill="#1f3d7a");}
    
    else if(blobwidth < "30")
         {(svg1.style.width="200%"); (svg1.style.fill="#193366");}

    else if(blobwidth < "32.5")
        {(svg1.style.width="210%"); (svg1.style.fill="#193366");}

    else if(blobwidth < "35")
        {(svg1.style.width="220%"); (svg1.style.fill="#0f1f3d");}

    else if(blobwidth < "37.5")
        {(svg1.style.width="230%"); (svg1.style.fill="#0a1429");}

    else if (blobwidth < "40")
        {(svg1.style.width="240%"); (svg1.style.fill="#050a14");}
    
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
        {(svg2.style.width="1%"); (svg2.style.fill="#ebf0fa");}

    else if(blobwidth < "-17.5")
        {(svg2.style.width="10%"); (svg2.style.fill="#ebf0fa");}
    
    else if(blobwidth < "-15")
        {(svg2.style.width="20%"); (svg2.style.fill="#d6e0f5");}
    
     else if(blobwidth < "-12.5")
        {(svg2.style.width="30%"); (svg2.style.fill="#d6e0f5");}

    else if(blobwidth < "-10")
         {(svg2.style.width="40%"); (svg2.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-7.5")
        {(svg2.style.width="50%"); (svg2.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-5")
        {(svg2.style.width="60%"); (svg2.style.fill="#adc2eb");}
    
    else if(blobwidth < "-2.5")
        {(svg2.style.width="70%"); (svg2.style.fill="#adc2eb");}
    
    else if(blobwidth < "0")
        {(svg2.style.width="80%"); (svg2.style.fill="#99b3e6");}
    
    else if(blobwidth < "2.5")
        {(svg2.style.width="90%"); (svg2.style.fill="#85a3e0");}

    else if(blobwidth < "5")
         {(svg2.style.width="100%"); (svg2.style.fill="#7094db");}

    else if(blobwidth < "7.5")
        {(svg2.style.width="110%"); (svg2.style.fill="#5c85d6");}
    
    else if(blobwidth < "10")
       {(svg2.style.width="120%"); (svg2.style.fill="#4775d1");}

    else if(blobwidth < "12.5")
        {(svg2.style.width="130%"); (svg2.style.fill="#3366cc");}
    
    else if(blobwidth < "15")
       {(svg2.style.width="140%"); (svg2.style.fill="#2e5cb8");}

    else if(blobwidth < "17.5")
        {(svg1.style.width="150%"); (svg2.style.fill="#2952a3");}

    else if(blobwidth < "20")
         {(svg2.style.width="160%"); (svg2.style.fill="#24478f");}
    
    else if(blobwidth < "22.5")
        {(svg2.style.width="170%"); (svg2.style.fill="#24478f");}
    
    else if(blobwidth < "25")
        {(svg2.style.width="180%"); (svg2.style.fill="#1f3d7a");}

     else if(blobwidth < "27.5")
        {(svg2.style.width="190%"); (svg2.style.fill="#1f3d7a");}
    
    else if(blobwidth < "30")
         {(svg2.style.width="200%"); (svg2.style.fill="#193366");}

    else if(blobwidth < "32.5")
        {(svg2.style.width="210%"); (svg2.style.fill="#193366");}

    else if(blobwidth < "35")
        {(svg2.style.width="220%"); (svg2.style.fill="#0f1f3d");}

    else if(blobwidth < "37.5")
        {(svg2.style.width="230%"); (svg2.style.fill="#0a1429");}

    else if (blobwidth < "40")
        {(svg2.style.width="240%"); (svg2.style.fill="#050a14");}

    } 

});

$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3067696&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
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
    var svg3 = document.getElementById("svg3");
  if(blobwidth < "-20")
        {(svg3.style.width="1%"); (svg3.style.fill="#ebf0fa");}

    else if(blobwidth < "-17.5")
        {(svg3.style.width="10%"); (svg3.style.fill="#ebf0fa");}
    
    else if(blobwidth < "-15")
        {(svg3.style.width="20%"); (svg3.style.fill="#d6e0f5");}
    
     else if(blobwidth < "-12.5")
        {(svg3.style.width="30%"); (svg3.style.fill="#d6e0f5");}

    else if(blobwidth < "-10")
         {(svg3.style.width="40%"); (svg3.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-7.5")
        {(svg3.style.width="50%"); (svg3.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-5")
        {(svg3.style.width="60%"); (svg3.style.fill="#adc2eb");}
    
    else if(blobwidth < "-2.5")
        {(svg3.style.width="70%"); (svg3.style.fill="#adc2eb");}
    
    else if(blobwidth < "0")
        {(svg3.style.width="80%"); (svg3.style.fill="#99b3e6");}
    
    else if(blobwidth < "2.5")
        {(svg3.style.width="90%"); (svg3.style.fill="#85a3e0");}

    else if(blobwidth < "5")
         {(svg3.style.width="100"); (svg3.style.fill="#7094db");}

    else if(blobwidth < "7.5")
        {(svg3.style.width="110%"); (svg3.style.fill="#5c85d6");}
    
    else if(blobwidth < "10")
       {(svg3.style.width="120%"); (svg3.style.fill="#4775d1");}

    else if(blobwidth < "12.5")
        {(svg3.style.width="130%"); (svg3.style.fill="#3366cc");}
    
    else if(blobwidth < "15")
       {(svg3.style.width="140%"); (svg3.style.fill="#2e5cb8");}

    else if(blobwidth < "17.5")
        {(svg3.style.width="150%"); (svg3.style.fill="#2952a3");}

    else if(blobwidth < "20")
         {(svg3.style.width="160%"); (svg3.style.fill="#24478f");}
    
    else if(blobwidth < "22.5")
        {(svg3.style.width="170%"); (svg3.style.fill="#24478f");}
    
    else if(blobwidth < "25")
        {(svg3.style.width="180%"); (svg3.style.fill="#1f3d7a");}

     else if(blobwidth < "27.5")
        {(svg3.style.width="190%"); (svg3.style.fill="#1f3d7a");}
    
    else if(blobwidth < "30")
         {(svg3.style.width="200%"); (svg3.style.fill="#193366");}

    else if(blobwidth < "32.5")
        {(svg3.style.width="210%"); (svg3.style.fill="#193366");}

    else if(blobwidth < "35")
        {(svg3.style.width="220%"); (svg3.style.fill="#0f1f3d");}

    else if(blobwidth < "37.5")
        {(svg3.style.width="230%"); (svg3.style.fill="#0a1429");}

    else if (blobwidth < "40")
        {(svg3.style.width="240%"); (svg3.style.fill="#050a14");}
    
    } 

    });

$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=6455259&units=metric&APPID=77baefed72187962b387fc9ac3e1a230',  
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
    var svg4 = document.getElementById("svg4");
    if(blobwidth < "-20")
        {(svg4.style.width="1%"); (svg4.style.fill="#ebf0fa");}

    else if(blobwidth < "-17.5")
        {(svg4.style.width="10%"); (svg4.style.fill="#ebf0fa");}
    
    else if(blobwidth < "-15")
        {(svg4.style.width="20%"); (svg4.style.fill="#d6e0f5");}
    
     else if(blobwidth < "-12.5")
        {(svg4.style.width="30%"); (svg4.style.fill="#d6e0f5");}

    else if(blobwidth < "-10")
         {(svg4.style.width="40%"); (svg4.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-7.5")
        {(svg4.style.width="50%"); (svg4.style.fill="#c2d1f0");}
    
    else if(blobwidth < "-5")
        {(svg4.style.width="60%"); (svg4.style.fill="#adc2eb");}
    
    else if(blobwidth < "-2.5")
        {(svg4.style.width="70%"); (svg4.style.fill="#adc2eb");}
    
    else if(blobwidth < "0")
        {(svg4.style.width="80%"); (svg4.style.fill="#99b3e6");}
    
    else if(blobwidth < "2.5")
        {(svg4.style.width="90%"); (svg4.style.fill="#85a3e0");}

    else if(blobwidth < "5")
         {(svg4.style.width="100%"); (svg4.style.fill="#7094db");}

    else if(blobwidth < "7.5")
        {(svg4.style.width="110%"); (svg4.style.fill="#5c85d6");}
    
    else if(blobwidth < "10")
       {(svg4.style.width="120%"); (svg4.style.fill="#4775d1");}

    else if(blobwidth < "12.5")
        {(svg4.style.width="130%"); (svg4.style.fill="#3366cc");}
    
    else if(blobwidth < "15")
       {(svg4.style.width="140%"); (svg4.style.fill="#2e5cb8");}

    else if(blobwidth < "17.5")
        {(svg4.style.width="150%"); (svg4.style.fill="#2952a3");}

    else if(blobwidth < "20")
         {(svg4.style.width="160%"); (svg4.style.fill="#24478f");}
    
    else if(blobwidth < "22.5")
        {(svg4.style.width="170%"); (svg4.style.fill="#24478f");}
    
    else if(blobwidth < "25")
        {(svg4.style.width="180%"); (svg4.style.fill="#1f3d7a");}

     else if(blobwidth < "27.5")
        {(svg4.style.width="190%"); (svg4.style.fill="#1f3d7a");}
    
    else if(blobwidth < "30")
         {(svg4.style.width="200%"); (svg4.style.fill="#193366");}

    else if(blobwidth < "32.5")
        {(svg4.style.width="210%"); (svg4.style.fill="#193366");}

    else if(blobwidth < "35")
        {(svg4.style.width="220%"); (svg4.style.fill="#0f1f3d");}

    else if(blobwidth < "37.5")
        {(svg4.style.width="230%"); (svg4.style.fill="#0a1429");}

    else if (blobwidth < "40")
        {(svg4.style.width="240%"); (svg4.style.fill="#050a14");}
    
    } 

    });
