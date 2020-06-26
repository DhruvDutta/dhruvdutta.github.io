$(
    function(){
        if(window.innerWidth<window.innerHeight*.75){
            console.log(document.getElementById('tuf').width,$('#tuf').width())
        var tuf=$('#tuf')
        tuf.css('left',`-${1556/2}px`)
        }

    }
);
function slide(){
    var back = document.getElementById('tuf');
    back.style.transition = 'all 1.5s ease-in-out';
    back.style.marginTop = '-100vh';
    var page = document.getElementById('first-page');
    page.style.transition = 'all .75s ease-in-out';
    page.style.marginTop = '-100vh';
    $('.fbtn,.foot').hide();
    setTimeout(function(){
        $('#tuf,#first-page').hide();
    },15000)
}

