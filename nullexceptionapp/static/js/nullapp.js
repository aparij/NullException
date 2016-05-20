$( document ).ready(function() {

    var PAGE_LIMIT = 20;

    $.get( "/jobs", { '_limit': PAGE_LIMIT, "_start": 0 } )
        .done(function( result ) {
                $('#jobs').empty().append(
                         $.map(result.data, function (item, index) {
                            return '<tr><td>' + item.title + '</td><td>'
                                              + item.company + '</td><td>'
                                              + item.tags + '</td></tr>';
                }).join());
                $("#fromN").text(0);
                $("#toN").text(PAGE_LIMIT);


  });


    $('#searchBtn').on('click', function() {
        var val = $('#searchField').val();

        $("#fromN").text(0);
        $("#toN").text(PAGE_LIMIT);
        $('#nextBtn').removeAttr("disabled");

        params = { '_limit': PAGE_LIMIT,'_start': 0} ;
        if (val != ''){
            params['q'] = val;
        }

        $.get( "/jobs", params )
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
        params = { '_limit': PAGE_LIMIT,'_start': _start} ;
        if (val != ''){
            params['q'] = val;
        }
        $.get( "/jobs", params)
            .done(function( result ) {
                    if(result.data.length==0){
                        $('#nextBtn').attr("disabled", true);
                    }else{
                        $('#jobs').empty().append(
                             $.map(result.data, function (item, index) {
                                return '<tr><td>' + item.title + '</td><td>'
                                                  + item.company + '</td><td>'
                                                  + item.tags + '</td></tr>';
                        }).join());

                        $("#fromN").text(_start);
                        $("#toN").text(parseInt(_start) + PAGE_LIMIT);

                    }


         });

    });


    $('#prevBtn').on('click', function() {
        var val = $('#searchField').val();
        var _start = parseInt($("#fromN").text()) - PAGE_LIMIT;
        if (_start<0){
            return;
        }

        if($('#nextBtn').prop("disabled")){
            $('#nextBtn').removeAttr("disabled");
        }


        params = { '_limit': PAGE_LIMIT,'_start': _start} ;
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
                $("#toN").text(parseInt(_start) + PAGE_LIMIT);


         });

    });



});