$(function () {

    var output = '';

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'http://soundmeasuringrest20180522031835.azurewebsites.net/Service1.svc/getallmeasurments/',
        success: showMeasurements
    });

    $(document).on("click", '.feedback-delete', function (e) {
        var deleteurl = 'http://soundmeasuringrest20180522031835.azurewebsites.net/Service1.svc/delete/' + e.target.id

        $.ajax({
            type: 'delete',
            url: deleteurl,
            success: updatemeasurment,
            dataType: 'jsonp',
            crossDomain: true
        });
        
        function updatemeasurment(data) {
            window.location.reload();


        };
    });

    function showMeasurements(data) {

        output += '<tr>';
        output += '<th>ID</th>';
        output += '<th>DATE</th>';
        output += '<th>TEMPERATURE</th>';
        output += '</tr>';
        $.each(data, function (key, item) {

            output += '<tr>';
            output += '<th>' + item.Id + '</th>';
            output += '<th>' + item.Date + '</th>';

            if (item.Temperature > 30) {
                output += '<th>' + item.Temperature + "  !" + '</th>';
                alert("ADVERSEL : Den nyeste temperatur overstiger 30 grader");

            }
            else {
                output += '<th>' + item.Temperature + '</th>';
            }
            output += `<th> <div class="media-left"><button id='${item.Id}' class="feedback-delete btn btn-xs btn-danger"><span id="' + item.Id + '" class="glyphicon glyphicon-remove"></span></button></div> </th>`;
            output += '</tr>';


        });

        $('.temperatures').html(output);
    }


});
