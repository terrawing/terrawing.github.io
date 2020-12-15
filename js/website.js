// Disable Links
var disabledLinks = document.getElementsByClassName("disabled");

for(let i = 0; i < disabledLinks.length; i++) {
    disabledLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
    });
}