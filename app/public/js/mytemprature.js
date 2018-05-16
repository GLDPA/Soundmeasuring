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
        <ul data-role="listview" class="" id="list">

        <li id="A"><a href="#page2" data-ajax="false">A</a></li>
        <li id="B"><a href="#page2" data-ajax="false">B</a></li>
        <li id="C"><a href="#page2" data-ajax="false">C</a></li>
        <li id="D"><a href="#page2" data-ajax="false">D</a></li>
        </ul>
         output += '<h2 onClick = MyDeleteTemperature>'+ 'Id '+ item.Id +'</h2>'
         output += '<h1> '+ 'Dato ' + item.Date + '</h1>';

         if (item.Temperature > 25) {
            output += '<h3> ' + item.Temperature + 'C' + '!' + '</h3>';
         }

         output += '<h3> ' + item.Temperature + 'C' + '</h3>';

         
        window.location.reload(10);
    },5000);
    $('.Measurements').html(output);
}
});