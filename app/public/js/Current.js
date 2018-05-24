$(function(){

    var output = '';

    var y = 0;

    $.ajax({
        type : 'GET',
        datatype : 'jsonp',
        url : 'https://soundmeasuringrest20180522031835.azurewebsites.net/Service1.svc/current/',
        success : showTemp
        
    });

    function showTemp(data){

    output += '<h1>'+ "current temperature : " + data.Temperature + '</h1>';

    $('.chosenMeasurement').html(output);
    }
}
)