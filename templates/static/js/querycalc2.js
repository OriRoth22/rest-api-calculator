<script language="JavaScript" type="text/javascript">

// declare variables
var add, subtract, divide, multiply;
// set up the form
function initialise() {

         add      =document.calculateForm.operator.options[0];
         subtract =document.calculateForm.operator.options[1];
         divide   =document.calculateForm.operator.options[2];
         multiply =document.calculateForm.operator.options[3];
   
         document.calculateForm.val1.value = 0;
         document.calculateForm.val2.value = 0;
}
// check that the text box just used is filled with a number
function numberCheck(elementName) {
         switch (elementName)
         {
            case "val1":
            var tmp = parseInt(document.calculateForm.val1.value);
            if (isNaN(tmp))
            {
               alert("Please enter a valid numerial value into the first text box.");
               document.getElementById("val1").value=0; // a different way to access a form element
               return false;
            }
            break;
   
            case "val2":
            var tmp = parseInt(document.calculateForm.val2.value);
            if (isNaN(tmp))
            {
               alert("Please enter a valid numerial value into the second text box.");
               document.calculateForm.val2.value=0;
               return false;
            }
            break;
         }
   
         return true;
}
// do the requested calculation
function calculate() {
         // temporary place to store the result
         var result = 0;
   
         // convert the vales in the boxes into integers
  
          var arg1 = parseInt(document.calculateForm.val1.value);
          var arg2 = parseInt(document.calculateForm.val2.value);
   
         // work out which operation needs to be performed and do it
         if (add.selected)    doMath (arg1, arg2,"subtract");
   
         else if (subtract.selected) {
   
          doMath (x, y, 'subtract');}
          
         else if (multiply.selected) result = x * y;
   
         else // (divide.selected) need to test for divide by zero request
         {
            if (y == 0)
            {
               alert ("Sorry, you cannot divide by 0!");
            }
   
            else
            {
               result = x / y;
            }
         }
   
         document.calculateForm.val3.value = result;
         }
         
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

                    document.calculateForm.val3.value = answer;
                         $( "#argument3" ).val( answer);
                         $( "#argument1" ).val( '' );
                         $( "#argument2" ).val( '' );
                          
                     },
                     error: function ( textStatus, jqXHR, errorThrown ) {
                         $( "#argument1" ).val( '' );
                         $( "#argument2" ).val( '' );
                         $( "#argument3" ).val( 'erorr');
                     }
                 });
             }

             catch( err ) {
                 $( "#argument1" ).val( '' );
                 $( "#argument2" ).val( '' );
                  $( "#argument3" ).val( 'erorr');
             }
         }
</script>
 