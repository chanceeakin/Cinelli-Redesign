
// NAVBAR HOVER

//      // BIKES HOVER
$( "#bikesButton").hover(
    function() {
        $("#dropdownMenu").css( "opacity", "1" ).hover(
            function (){
                $("#dropdownMenu").css( "opacity", "1" )
            }, function() {
                $("#dropdownMenu").css( "opacity", "0" ).unbind('mouseenter');
            }
        );
    
    },   function() {
        $("#dropdownMenu").css( "opacity", "0" );
        
    }
 );





