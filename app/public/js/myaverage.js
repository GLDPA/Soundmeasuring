$(function () {

    var output = '';

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'http://soundmeasuringrest20180522031835.azurewebsites.net/Service1.svc/getaverage/',
        success: showAverage
    });

    function showAverage(data) {
        output += '<h2> Average </h2>';
        output += '<p>' + data + '</p>';

        $('.average').html(output);
    }

   


});