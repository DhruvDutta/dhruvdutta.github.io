function toggle(){
    var theme = document.getElementById('theme');
    if (theme.getAttribute('href') == 'css/style.css') {
        theme.setAttribute('href', 'css/style1.css');
    } else {
        theme.setAttribute('href', 'css/style.css');
    }
}

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}