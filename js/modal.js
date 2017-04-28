$(document).ready(function(){
    
    $("#timelineBtn").click(function(){
        $("#timelineModal").modal({keyboard: true});
    });
    
    $("#codeBtn").click(function(){
        $("#codeModal").modal({keyboard: true});
    });
    
    $(document).bind('keyup', function(e) {
        if(e.which == 39){
            $('a.carousel-control.right').trigger("click");
        }
        
        else if(e.which == 37){
            $('a.carousel-control.left').trigger("click");
        }
    });
});

