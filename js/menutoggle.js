$( document ).ready(function() {
    //http://stackoverflow.com/questions/19397636/popover-delay-at-bootstrap-doesnt-work
    
    //Tooltip Home
    $("#popoverhome").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popoverhome").attr('data-content', 'Home').data("bs.popover");
    
    $('#popoverhome').on('shown.bs.popover', function() {
        setTimeout(function() {
            $('#popoverhome').popover('hide');
        }, 700);
    });
    
    //Tooltip About
    $("#popoverabout").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popoverabout").attr('data-content', 'About').data("bs.popover");
    
    $('#popoverabout').on('shown.bs.popover', function() {
        setTimeout(function() {
            $('#popoverabout').popover('hide');
        }, 700);
    });
      
    //Tooltip Prototype
    $("#popoverprototype").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popoverprototype").attr('data-content', 'Prototypes').data("bs.popover");
    
    $('#popoverprototype').on('shown.bs.popover', function() {
        setTimeout(function() {
            $('#popoverprototype').popover('hide');
        }, 700);
    });  
    
    //Tooltip Design
    $("#popoverdesign").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popoverdesign").attr('data-content', 'Designs').data("bs.popover");
    
    $('#popoverdesign').on('shown.bs.popover', function() {
        setTimeout(function() {
            $('#popoverdesign').popover('hide');
        }, 700);
    });
    
    //Tooltip Coding
    $("#popovercoding").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popovercoding").attr('data-content', 'Coding').data("bs.popover");
    
    $('#popovercoding').on('shown.bs.popover', function() {
        setTimeout(function() {
            $('#popovercoding').popover('hide');
        }, 700);
    });
    
    //Tooltip Contact
    $("#popovercontact").popover({ trigger: "hover", container: ".homespacer", delay: { show: "500", hide: "200" } });
    $("#popovercontact").attr('data-content', 'Contact').data("bs.popover");
    
    $('#popovercontact').on('shown.bs.popover', function() {
        setTimeout(function() {
            $('#popovercontact').popover('hide');
        }, 700);
    });
    
    
   
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