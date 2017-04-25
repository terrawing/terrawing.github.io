$( document ).ready(function() {
    //http://stackoverflow.com/questions/19397636/popover-delay-at-bootstrap-doesnt-work
    
    //Tooltip Home
    $("#popoverhome").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popoverhome").attr('data-content', 'Home').data("bs.popover");
    
    /*
    $('#popoverhome').on('shown.bs.popover', function() {
        setTimeout(function() {
            $('#popoverhome').popover('hide');
        }, 300);
    });*/
    
    //Tooltip About
    $("#popoverabout").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popoverabout").attr('data-content', 'About').data("bs.popover");
    
    //Tooltip Prototype
    $("#popoverprototype").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popoverprototype").attr('data-content', 'Prototypes').data("bs.popover");
    
    //Tooltip Design
    $("#popoverdesign").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popoverdesign").attr('data-content', 'Designs').data("bs.popover");
    
    //Tooltip Coding
    $("#popovercoding").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popovercoding").attr('data-content', 'Coding').data("bs.popover");
    
    //Tooltip Contact
    $("#popovercontact").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popovercontact").attr('data-content', 'Contact').data("bs.popover");
    
   
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