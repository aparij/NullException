$( document ).ready(function() {
  // Handler for .ready() called.
    $.get( "/jobs", { '_limit': 20 } )
        .done(function( result ) {
                $('#jobs').empty().append(
                         $.map(result.data, function (item, index) {
                            return '<tr><td>' + item.title + '</td><td>'
                                              + item.company + '</td><td>'
                                              + item.tags + '</td></tr>';
                }).join());

  });


    $('#searchBtn').on('click', function() {
        var val = $('#searchField').val();
        $.get( "/jobs", { 'q': val } )
            .done(function( result ) {
                    $('#jobs').empty().append(
                         $.map(result.data, function (item, index) {
                            return '<tr><td>' + item.title + '</td><td>'
                                              + item.company + '</td><td>'
                                              + item.tags + '</td></tr>';
                    }).join());

         });

    });

});