
// NAVBAR HOVER

// BIKES HOVER

 $( "#bikesButton").hover(
    function() {
        if($( window ).width() > 990) {
            $("#dropdownMenu").css( {"opacity": "1"}, {"z-index": "1"} ).hover(
                function (){
                    $("#dropdownMenu").css( {"opacity": "1"}, {"z-index": "1"})
                }, function() {
                    $("#dropdownMenu").css( "opacity", "0" ).unbind('mouseenter');
                }
            );
        }
        },   function() {
            $("#dropdownMenu").css( "opacity", "0" );
        }
    
    
 );

   



// $( "#bikesButton").hover(
//     function() {
//         $("#dropdownMenu").css( {"opacity": "1"}, {"z-index": "1"} ).hover(
//             function (){
//                 $("#dropdownMenu").css( {"opacity": "1"}, {"z-index": "1"})
//             }, function() {
//                 $("#dropdownMenu").css( "opacity", "0" ).unbind('mouseenter');
//             }
//         );
    
//     },   function() {
//         $("#dropdownMenu").css( "opacity", "0" );
//     }
//  );