// Go back to top Button

var goBackToTopButton = document.getElementById("id_GoBackToTopButton");

window.addEventListener("scroll", function() {
    scrollFunction();
}, false);


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    goBackToTopButton.style.display = "block";
  } else {
    goBackToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}