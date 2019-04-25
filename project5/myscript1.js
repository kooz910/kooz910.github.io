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
        {(svg1.style.width="8.3%"); (svg1.style.height="auto");}
    else if(blobwidth < "-15")
        {(svg1.style.width="16.6%"); (svg1.style.height="auto");}
    else if(blobwidth < "-10")
         {(svg1.style.width="24.9%"); (svg1.style.height="auto");}
    else if(blobwidth < "0")
        {(svg1.style.width="33.2%"); (svg1.style.height="auto");}

    else if(blobwidth < "5")
         {(svg1.style.width="41.5%"); (svg1.style.height="auto");}
    
    else if(blobwidth < "10")
       {(svg1.style.width="49.8%"); (svg1.style.height="auto");}
    
    else if(blobwidth < "15")
       {(svg1.style.width="58.1%"); (svg1.style.height="auto");}

    else if(blobwidth < "20")
         {(svg1.style.width="66.4%"); (svg1.style.height="auto");}
    
    else if(blobwidth < "25")
        {(svg1.style.width="74.7%"); (svg1.style.height="auto");}
    
    else if(blobwidth < "30")
         {(svg1.style.width="83%"); (svg1.style.height="auto");}

    else if(blobwidth < "35")
        {(svg1.style.width="91.3%"); (svg1.style.height="auto");}

        else if(blobwidth < "40")
        {(svg1.style.width="99.6%"); (svg1.style.height="auto");}
    
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
    var blob2 = document.getElementById("blobsecond");
    if(blobwidth < "-20")
        {(blob2.style.width="8.3%"); (blob2.style.height="auto");}
    else if(blobwidth < "-15")
        {(blob2.style.width="16.6%"); (blob2.style.height="auto");}
    else if(blobwidth < "-10")
         {(blob2.style.width="24.9%"); (blob2.style.height="auto");}
    else if(blobwidth < "0")
        {(blob2.style.width="33.2%"); (blob2.style.height="auto");}

    else if(blobwidth < "5")
         {(blob2.style.width="41.5%"); (blob2.style.height="auto");}
    
    else if(blobwidth < "10")
       {(blob2.style.width="49.8%"); (blob2.style.height="auto");}
    
    else if(blobwidth < "15")
       {(svg1.style.width="58.1%"); (svg1.style.height="auto");}

    else if(blobwidth < "20")
         {(svg1.style.width="66.4%"); (svg1.style.height="auto");}
    
    else if(blobwidth < "25")
        {(svg1.style.width="74.7%"); (svg1.style.height="auto");}
    
    else if(blobwidth < "30")
         {(svg1.style.width="83%"); (svg1.style.height="auto");}

    else if(blobwidth < "35")
        {(svg1.style.width="91.3%"); (svg1.style.height="auto");}

        else if(blobwidth < "40")
        {(svg1.style.width="99.6%"); (svg1.style.height="auto");}
    
    } 

});


