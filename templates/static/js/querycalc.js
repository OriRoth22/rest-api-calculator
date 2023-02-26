function calcListener ( jQuery ) {


    $( "#add" ).click( function ( e ) {
        var arg1 = $( "#argument1" ).val();
        var arg2 = $( "#argument2" ).val();
        doMath (arg1, arg2, 'add');
        e.preventDefault();
    });

    $( "#subtract" ).click( function ( e ) {
        var arg1 = $( "#argument1" ).val();
        var arg2 = $( "#argument2" ).val();
        doMath (arg1, arg2, 'subtract');
        e.preventDefault();
    });

    $( "#multiply" ).click( function ( e ) {
        var arg1 = $( "#argument1" ).val();
        var arg2 = $( "#argument2" ).val();
        doMath (arg1, arg2, 'multiply');
        e.preventDefault();
    });

    $( "#divide" ).click( function ( e ) {
        var arg1 = $( "#argument1" ).val();
        var arg2 = $( "#argument2" ).val();
        doMath (arg1, arg2, 'divide');
        e.preventDefault();
    });
    
 

    function doMath( arg1, arg2, resource ) {
        var textStatus, jqXHR, errorThrown = '';


        
        try {
            arg1 = Number( arg1 );
            arg2 = Number( arg2 );
            //TODO handle non-numeric inputs
            if ( isNaN(arg1) || isNaN(arg2) ) throw "NaN";

            // Flask requires a JSON string and the following content-type
            $.ajaxSetup({
                contentType: "application/json"
            });

            // Makes an ajax call to url "resource" supplying arg1 and arg2
            $.ajax({
                type: "POST",
                url: resource,
                data: JSON.stringify({ argument1: arg1, argument2: arg2 }),
                dataType: "json",
                success: function ( data ) {
                    var answer = String(data[ 'answer' ]);
                   

                    // Put the answer in argument3 and blank out arguments
                    $( "#argument3" ).val( answer );
                    $( "#argument2" ).val( '' );
                    $( "#argument1" ).val( '' );
                },
                error: function ( textStatus, jqXHR, errorThrown ) {
                    
                    $( "#argument1" ).val( '' );
                    $( "#argument2" ).val( '' );
                    $( "#argument3" ).val( '' );
                }
            });
        }

        catch( err ) {
            $( "#argument1" ).val( '' );
            $( "#argument2" ).val( '' );
            $( "#argument3" ).val( '' );
        }
   
    
    function calculate() {
         // temporary place to store the result
       
         document.calculateForm.val3.value = "hello";
         }
         
}
 }