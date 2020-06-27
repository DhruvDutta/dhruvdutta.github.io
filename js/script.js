$(
    function(){
        if(window.innerWidth<window.innerHeight*.75){
        var tuf=$('#tuf')
        tuf.css('margin-left',`-${$('#tuf').width()/2}px`)
        }
        
        slide();
    }
);

let ic;
function slide(){
    var back = document.getElementById('tuf');
    back.style.transition = 'all 1.5s ease-in-out';
    back.style.marginTop = '-100vh';
    var page = document.getElementById('dhruv');
    page.style.transition = `all 1.5s ease-in-out`;
    page.style.marginTop = '-100vh';
    $('.fbtn,.foot').hide();
    setTimeout(function(){
        $('#tuf,#first-page').hide();
        $('.main').css({'display':'block','animation-play-state':'running'});
        ic = setInterval(icons_appear,700);
    },1400)

}

let i = 1;
function icons_appear(){
        if(i>10){
            clearInterval(ic)
        }else{  
            var icon = $(`#${i}`);
            icon.css('animation-play-state','running')
            i+=1;
        }

    
}
