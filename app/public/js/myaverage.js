$(function () {

    var output = '';

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'https://soundmeasuringrest20180522031835.azurewebsites.net/Service1.svc/getaverage/',
        success: showAverage
    });

    function showAverage(data) {
        output += '<h2> Average </h2>';
        output += '<p>' + data + '</p>';

        $('.average').html(output);
    }

   


});