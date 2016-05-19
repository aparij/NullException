$( document ).ready(function() {
    $.get( "/jobs", { '_limit': 20, "_start": 0 } )
        .done(function( result ) {
                $('#jobs').empty().append(
                         $.map(result.data, function (item, index) {
                            return '<tr><td>' + item.title + '</td><td>'
                                              + item.company + '</td><td>'
                                              + item.tags + '</td></tr>';
                }).join());
                $("#fromN").text(0);
                $("#toN").text(20);


  });


    $('#searchBtn').on('click', function() {
        var val = $('#searchField').val();
        if ($("#fromN").text()!='0'){
                $("#fromN").text(0);
                $("#toN").text(20);

        }
        $.get( "/jobs", { 'q': val ,  '_limit': 20 } )
            .done(function( result ) {
                    $('#jobs').empty().append(
                         $.map(result.data, function (item, index) {
                            return '<tr><td>' + item.title + '</td><td>'
                                              + item.company + '</td><td>'
                                              + item.tags + '</td></tr>';
                    }).join());

         });

    });

        $('#nextBtn').on('click', function() {
        var val = $('#searchField').val();
        var _start = $("#toN").text();
        params = { '_limit': 20,'_start': _start} ;
        if (val != ''){
            params['q'] = val;
        }
        $.get( "/jobs", params)
            .done(function( result ) {
                    $('#jobs').empty().append(
                         $.map(result.data, function (item, index) {
                            return '<tr><td>' + item.title + '</td><td>'
                                              + item.company + '</td><td>'
                                              + item.tags + '</td></tr>';
                    }).join());

                $("#fromN").text(_start);
                $("#toN").text(parseInt(_start)+20);


         });

    });


});