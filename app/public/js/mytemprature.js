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
         output += '<h2>'+ 'Id '+ item.Id +'</h2>'
        output += '<h1> '+ 'Dato ' + item.Date + '</h1>';
          output += '<h3> ' + item.Temperature + 'C' + '</h3>';
        window.location.reload(10);
    },5000);
    $('.Measurements').html(output);
}
});