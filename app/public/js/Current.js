$(function(){

    var output = '';

    var y = 0;

    $.ajax({
        type : 'GET',
        datatype : 'jsonp',
        url : 'http://localhost:55168/Service1.svc/current/',
        success : showTemp
        
    });

    function showTemp(data){

    output += '<h1>' + data.Temperature + '</h1>';

    $('.chosenMeasurement').html(output);
    }
}
)