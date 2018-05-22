$(function () {

    var output = '';

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'http://localhost:55168/Service1.svc/getaverage/',
        success: showAverage
    });

    function showAverage(data) {
        output += '<h2> Average </h2>';
        output += '<p>' + data + '</p>';

        $('.average').html(output);
    }

   


});