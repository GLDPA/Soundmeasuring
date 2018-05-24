$(function () {

    var outputApi = '';
    var output ='';

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'https://soundmeasuringrest20180522031835.azurewebsites.net/Service1.svc/current/',
        success: showCurrentMeasurements
    });
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=roskilde,dk&APPID=c0fab036ad71702375b73a97029359c3',
        success: showApi
    });
    function showApi(data) {

            outputApi += '<h1>'+'Location: ' + data.name+'  ' + '</h1>';
            outputApi += '<h1>' +'Temperature: ' + JSON.stringify(Math.round(data.main.temp-273.15)) + '</h1>';

        $('#apitemp').html(outputApi);
    }

    function showCurrentMeasurements(data) {
        output+='<h1>'+'Location: Roskilde'+'</h1>';
        output += '<h1>'+'Current Temperature: ' + data.Temperature +'</h1>';
        $('#ourtemp').html(output);
    }



});