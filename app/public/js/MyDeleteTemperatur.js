$(function() {

    var output = '';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://soundmeasuringrest20180522031835.azurewebsites.net/Service1.svc/getallmeasurments/',
        success: showMeasurements
        });

        function showMeasurements(data) {
     $.each(data,function(key, item) {
      

    });
    $('.Measurements').html(output);

}
$( '.Measurments').on('click', function(e){
    if(e.target.className == 'glyphicon glyphicon-delete '){
        var deleteurl = 'https://soundmeasuringrest20180522031835.azurewebsites.net/Service1.svc/delete' + e.target.id

        $.ajax({
            type : 'delete',
            url : deleteurl,
            success : deletemeasurment,
            dataType : 'json',
            crossDomain : true
        });
    }
function deletemeasurment(data){
     $.getJSON('http://soundmeasuringrest20180522031835.azurewebsites.net/Service1.svc/getallmeasurments/', showMeasurements);
     
}
})
});