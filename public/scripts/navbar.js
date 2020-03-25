$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size

$(document).ready(removeLinkBikes);    // When the page first loads
$(window).resize(removeLinkBikes);  
// NAVBAR HOVER

// BIKES HOVER

 $( "#bikesButton").hover(
    function() {
        if($( window ).width() > 990) {
            $("#dropdownMenu").css( {"opacity": "1", "z-index": "2"} ).hover(
                function (){
                    $("#dropdownMenu").css( {"opacity": "1", "z-index": "2"})
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
   
    var width = $(window).width();

    if(width > 991){
        $( ".collapseIcon" ).css( "display", "none" );
    } else {
        $( ".collapseIcon" ).css( "display", "inline" );
    }
};

// CHANGE HREF FOR NAV LINKS WHEN TOGGLED
function removeLinkBikes(){
    var width = $(window).width();
    if(width > 991){
        
        $( "#bikes" ).attr( "href", "/shop/bikes" ).attr("data-toggle", "")
        
       
    } else {
        $( "#bikes" ).attr( "href", "#bikesCollapse" ).attr("data-toggle", "collapse")
      
        
    }
}

