$(function() {

    var output = '';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://localhost:55168/Service1.svc/get/',
        success: showMeasurements
        });

        function showMeasurements(data) {
     output += '<h1>Previous Measurements</h1>';
     $.each(data,function(key, item) {
        output += <ul data-role="listview"  class=""  id="list">
        output += <li id="A"><a href="#page2" data-ajax="false">A</a></li>
        output += <li id="B"><a href="#page2" data-ajax="false">B</a></li>
        output += <li id="C"><a href="#page2" data-ajax="false">C</a></li>
        output += <li id="D"><a href="#page2" data-ajax="false">D</a></li>
     </ul>
        output += '<h2'+ 'Id '+ item.Id +'</h2>'
        output += '<h1> '+ 'Dato ' + item.Date + '</h1>';
        output += '<h3> ' + item.Temperature + 'C' + '</h3>';

    });
    $('.Measurements').html(output);

}
$( '.Measurments').on('click', function(e){
    if(e.target.className == 'glyphicon glyphicon-remove '){
        var deleteurl = 'http://localhost:55168/Service1.svc/delete' + e.target.id

        $.ajax({
            type : 'delete',
            url : deleteurl,
            success : deletemeasurment,
            dataType : 'json',
            crossDomain : true
        });
    }
function deletemeasurment(data){
     $.getJSON('http://localhost:55168/Service1.svc/getallmeasurments/', showMeasurements);
     
}
})
});