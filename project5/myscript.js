
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=6455259&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp1 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    
        $('#paris1').append( temp1 + '&#8451'+ '</br>');
        $('#paris1').append('Min: ' + tempmin +'&#8451'+ '</br>');
        $('#paris1').append('Max: ' + tempmax +'&#8451'+ '</br>');
    
    }   
});

$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp2 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    
        $('#london1').append( temp2 + '&#8451'+ '</br>');
        $('#london1').append('Min: ' + tempmin + '&#8451'+ '</br>');
        $('#london1').append('Max: ' + tempmax+ '&#8451'+ '</br>');
            }   

});

$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3067696&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp3 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    
        $('#prague1').append( temp3 + '&#8451'+ '</br>');
        $('#prague1').append('Min: ' + tempmin + '&#8451' + '</br>');
        $('#prague1').append('Max: ' + tempmax + '&#8451' + '</br>');
        
    }   
});

$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2759794&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp4 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    
        $('#amesterdam1').append(temp4 + '&#8451'+ '</br>');
        $('#amesterdam1').append('Min: ' + tempmin + '&#8451'+ '</br>');
        $('#amesterdam1').append('Max: ' + tempmax + '&#8451'+ '</br>');
    }   
});

$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=745044&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp5 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#istanbul1').append( temp5 + '&#8451'+ '</br>');
        $('#istanbul1').append('Min: ' + tempmin + '&#8451'+ '</br>');
        $('#istanbul1').append('Max: ' + tempmax + '&#8451'+ '</br>');
        } 
});
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp6 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#petersburg1').append(temp6 + '&#8451'+ '</br>');
        $('#petersburg1').append('Min: ' + tempmin + '&#8451' + '</br>');
        $('#petersburg1').append('Max: ' + tempmax + '&#8451' + '</br>');
    }   
});
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2673730&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp7 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#stockholm1').append(temp7 + '&#8451'+ '</br>');
        $('#stockholm1').append('Min: ' + tempmin + '&#8451' + '</br>');
        $('#stockholm1').append('Max: ' + tempmax + '&#8451'+ '</br>');
        }  
});
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3173435&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp8 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#milano1').append( temp8 + '&#8451'+ '</br>');
        $('#milano1').append('Min: ' + tempmin + '&#8451'+ '</br>');
        $('#milano1').append('Max: ' + tempmax + '&#8451'+ '</br>');
    }   
});
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3054643&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp9 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#budapest1').append(temp9 + '&#8451'+ '</br>');
        $('#budapest1').append('Min: ' + tempmin + '&#8451'+ '</br>');
        $('#budapest1').append('Max: ' + tempmax + '&#8451'+ '</br>');
    }   
});
 $(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2950158&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp10 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#berlin1').append(temp10 + '&#8451'+ '</br>');
        $('#berlin1').append( 'Min: ' + tempmin + '&#8451'+ '</br>');
        $('#berlin1').append(' Max: ' + tempmax + '&#8451'+ '</br>');
    }   
});
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2911298&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp11 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#hamburg1').append( temp11 + '&#8451'+ '</br>');
        $('#hamburg1').append(' Min: ' + tempmin + '&#8451'+ '</br>');
        $('#hamburg1').append(' Max: ' + tempmax + '&#8451'+ '</br>');
    }   
});
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=6355233&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp12 = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#madrid1').append( temp12 + '&#8451'+ '</br>');
        $('#madrid1').append(' Min: ' + tempmin + '&#8451'+ '</br>');
        $('#madrid1').append(' Max: ' + tempmax + '&#8451'+ '</br>');
    }
});

