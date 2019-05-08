
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=6455259&units=metric&APPID=5fc3025a9aac6c995c1ef39217f09318',  
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
    
        $('#paris').append( temp + '&#8451'+ '</br>');
        $('#paris').append('Min: ' + tempmin +'&#8451'+ '</br>');
        $('#paris').append('Max: ' + tempmax +'&#8451'+ '</br>');
    
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    
        $('#london').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#london').append('Temp Min: ' + tempmin + '&#8451'+ '</br>');
        $('#london').append('Temp Max: ' + tempmax+ '&#8451'+ '</br>');
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    
        $('#prague').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#prague').append('Temp Min: ' + tempmin + '&#8451' + '</br>');
        $('#prague').append('Temp Max: ' + tempmax + '&#8451' + '</br>');
        
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
    function myWeatherInterpretation(){
    
        $('#amesterdam').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#amesterdam').append('Temp Min: ' + tempmin + '&#8451'+ '</br>');
        $('#amesterdam').append('Temp Max: ' + tempmax + '&#8451'+ '</br>');
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#istanbul').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#istanbul').append('Temp Min: ' + tempmin + '&#8451'+ '</br>');
        $('#istanbul').append('Temp Max: ' + tempmax + '&#8451'+ '</br>');
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#petersburg').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#petersburg').append('Temp Min: ' + tempmin + '&#8451' + '</br>');
        $('#petersburg').append('Temp Max: ' + tempmax + '&#8451' + '</br>');
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#stockholm').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#stockholm').append('Temp Min: ' + tempmin + '&#8451' + '</br>');
        $('#stockholm').append('Temp Max: ' + tempmax + '&#8451'+ '</br>');
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#milano').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#milano').append('Temp Min: ' + tempmin + '&#8451'+ '</br>');
        $('#milano').append('Temp Max: ' + tempmax + '&#8451'+ '</br>');
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#budapest').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#budapest').append('Temp Min: ' + tempmin + '&#8451'+ '</br>');
        $('#budapest').append('Temp Max: ' + tempmax + '&#8451'+ '</br>');
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#berlin').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#berlin').append('Temp Min: ' + tempmin + '&#8451'+ '</br>');
        $('#berlin').append('Temp Max: ' + tempmax + '&#8451'+ '</br>');
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#hamburg').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#hamburg').append('Temp Min: ' + tempmin + '&#8451'+ '</br>');
        $('#hamburg').append('Temp Max: ' + tempmax + '&#8451'+ '</br>');
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
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    
     function myWeatherInterpretation(){
    
        $('#madrid').append('Temp: ' + temp + '&#8451'+ '</br>');
        $('#madrid').append('Temp Min: ' + tempmin + '&#8451'+ '</br>');
        $('#madrid').append('Temp Max: ' + tempmax + '&#8451'+ '</br>');
    }
});
    $(document).ready(function(){
  $("#n1").click(function(){
    $("#paris").toggle();
  });
  });
    $(document).ready(function(){
  $("#n2").mouseover(function(){
    $("#london").css("display","block");
  });
  $("#n2").mouseout(function(){
    $("#london").css("display","none");
  });
});

    $(document).ready(function(){
  $("#n3").mouseover(function(){
    $("#prague").css("display","block");
  });
  $("#n3").mouseout(function(){
    $("#prague").css("display","none");
  });
});
    $(document).ready(function(){
  $("#n4").mouseover(function(){
    $("#amesterdam").css("display","block");
  });
  $("#n4").mouseout(function(){
    $("#amesterdam").css("display","none");
  });
});
    $(document).ready(function(){
  $("#n5").mouseover(function(){
    $("#istanbul").css("display","block");
  });
  $("#n5").mouseout(function(){
    $("#istanbul").css("display","none");
  });
});
    $(document).ready(function(){
  $("#n6").mouseover(function(){
    $("#petersburg").css("display","block");
  });
  $("#n6").mouseout(function(){
    $("#petersburg").css("display","none");
  });
});
    $(document).ready(function(){
  $("#n7").mouseover(function(){
    $("#stockholm").css("display","block");
  });
  $("#n7").mouseout(function(){
    $("#stockholm").css("display","none");
  });
});
    $(document).ready(function(){
  $("#n8").mouseover(function(){
    $("#milano").css("display","block");
  });
  $("#n8").mouseout(function(){
    $("#milano").css("display","none");
  });
});
    $(document).ready(function(){
  $("#n9").mouseover(function(){
    $("#budapest").css("display","block");
  });
  $("#n9").mouseout(function(){
    $("#budapest").css("display","none");
  });
});
      $(document).ready(function(){
  $("#n10").mouseover(function(){
    $("#berlin").css("display","block");
  });
  $("#n10").mouseout(function(){
    $("#berlin").css("display","none");
  });
});
      $(document).ready(function(){
  $("#n11").mouseover(function(){
    $("#hamburg").css("display","block");
  });
  $("#n11").mouseout(function(){
    $("#hamburg").css("display","none");
  });
});
      $(document).ready(function(){
  $("#n12").mouseover(function(){
    $("#madrid").css("display","block");
  });
  $("#n12").mouseout(function(){
    $("#madrid").css("display","none");
  });
});