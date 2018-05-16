$(function() {

    var output = '';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://localhost:55168/Service1.svc/getallmeasurments/',
        success: showMeasurements
        });

        function showMeasurements(data) {
     $.each(data,function(key, item) {
      

    });
    $('.Measurements').html(output);

}
$( '.Measurments').on('click', function(e){
    if(e.target.className == 'glyphicon glyphicon-delete '){
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