$(function() {

    var output = '';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://localhost:55168/Service1.svc/getallmeasurments/',
        success: showMeasurements
        });

        function showMeasurements(data) {
            output += '<tr>';
            output += '<th>ID</th>';
            output += '<th>DATE</th>';
            output += '<th>TEMPERATURE</th>';
            output += '<th>DELETE</th>';
            output += '</tr>';
     $.each(data,function(key, item) {
    
        output += '<tr>';
        output += '<th>' + item.Id + '</th>';
        output += '<th>' + item.Date + '</th>';
        if (item.Temperature > 26) {
            output += '<th>' + item.Temperature + '!' + '</th>';
        }
        else{
             output += '<th>' + item.Temperature + '</th>';
        }
        output += '<th>' + <p>
        <button type="button" class="btn btn-info">
          <span class="glyphicon glyphicon-delete"></span> delete
        </button>
        </p>+ '</th>';
        
        output += '</tr>';
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

    $('.temperatures').html(output);
}
});
