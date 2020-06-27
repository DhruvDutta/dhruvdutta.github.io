$(
    function(){
        if(window.innerWidth<window.innerHeight*.75){
        var tuf=$('#tuf')
        tuf.css('margin-left',`-${$('#tuf').width()/2}px`)
        }
        
    }
);

let ic;
function slide(){
    var back = document.getElementById('tuf');
    back.style.transition = 'all 1.2s ease-in-out';
    back.style.marginTop = '-100vh';
    var page = document.getElementById('dhruv');
    page.style.transition = `all 1.2s ease-in-out`;
    page.style.marginTop = '-100vh';
    $('.fbtn,.foot').hide();
    setTimeout(function(){
        $('#tuf,#first-page').hide();
        $('.main').css({'display':'block','animation-play-state':'running'});
        ic = setInterval(icons_appear,700);
    },1100)

}

let i = 1;
let icons=['profile','bio','1','2','3','4','5','6','7','8','9','10']

function icons_appear(){
        if(i>12){
            clearInterval(ic)
        }else{  
            var icon = $(`#${icons[i]}`);
            icon.css('animation-play-state','running')
            i+=1;
        }

    
}

function icons_appear_random(){
    let r= Math.ceil(Math.random()*10);
    console.log(r)
    if(icons.length==10){
        clearInterval(ic);
    }
    if(icons.includes(r)){
        icons_appear_random();
    }else{
            $(`#${r}`).css('animation-play-state','running');
    }
}
