
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

//  ADD ICON DISPLAY CLASS

function jqUpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();

    if(width > 991){
        $( ".collapseIcon" ).css( "display", "none" );
        $( ".collapseIcon" ).css( "display", "none" );
    } else {
        $( ".collapseIcon" ).css( "display", "inline-block" );
    }
};

// CHANGE HREF FOR NAV LINKS WHEN TOGGLED
function removeLinkBikes(){
    var width = $(window).width();
    if(width > 991){
        $( "#bikes" ).attr( "href", "#");
        
       
    } else {
        $( "#bikes" ).attr( "href", "#bikesCollapse" );
      
        
    }
}
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size

$(document).ready(removeLinkBikes);    // When the page first loads
$(window).resize(removeLinkBikes);  


   



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