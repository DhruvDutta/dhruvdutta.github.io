function toggle(){
    var theme = document.getElementById('theme');
    if (theme.getAttribute('href') == 'css/style.css') {
        theme.setAttribute('href', 'css/style1.css');
    } else {
        theme.setAttribute('href', 'css/style.css');
    }
}