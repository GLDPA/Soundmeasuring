$(function() {

    var output = '';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://localhost:55168/Service1.svc/getallmeasurments/',
        success: showMeasurements
        });

        function showMeasurements(data) {
     output += '<h1>Previous Measurements</h1>';
     $.each(data,function(key, item) {
        output += '<h1> '+ 'ID ' + item.ID + '</h1>';
          output += '<h3> ' + item.DECIBEL + 'dB' + '</h3>';

    });
    $('.Measurements').html(output);
}
});