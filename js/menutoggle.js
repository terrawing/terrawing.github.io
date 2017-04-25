$( document ).ready(function() {
    //Tooltip Home
    $("#popoverhome").popover({ trigger: "hover", container: ".homespacer" });
    var popover = $("#popover").data("popover");
    
    setTimeout(function() {
        $("#popoverhome").attr('data-content', 'Home');
        var popover = $('#popoverhome').data("popover");
        popover.setContent();
        popover.$tip.addClass(popover.options.placement);
    },2000);
    
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    
    
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 50) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
});