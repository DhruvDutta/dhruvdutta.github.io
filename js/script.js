var bg_animation;
bg_colors=['blue',/*'red','white','aquamarine','blue,green,yellow,orange,red'*/]
current_color=0;
deg=120;
$(
    function(){
        if(window.innerWidth<window.innerHeight*.75){
        var tuf=$('#tuf')
        tuf.css('margin-left',`-${$('#tuf').width()/2}px`)
        }
        
        for(let j=0;j<=10;j++){
                $(`#${j}`).addClass('col-md-4 col-6');
            
        }
        $('#10').addClass('offset-md-4')
        $('#projects').fadeToggle();
        $('.stuff').text('Stuff i use')
        $(".stuff").click(function(){
            $(".skills").fadeToggle();
            $('.stuff').css({'animation-iteration-count':'1'});
            if($('.stuff').text()=='Stuff i use'){
                $('.stuff').text('Stuff i made');
            }else{
                $('.stuff').text('Stuff i use')
            }
            $('#projects').fadeToggle();

        });
        //$('body').css('background',`linear-gradient(${deg}deg,#222,${bg_colors[current_color]})`);
    }
);

let ic;
function slide(){
    /*var back = document.getElementById('tuf');
    back.style.transition = 'all 1.2s ease-in-out';
    back.style.marginTop = '-100vh';*/
    var page = document.getElementById('dhruv');
    page.style.transition = `all 1.2s ease-in-out`;
    page.style.marginTop = '-100vh';
    clearInterval(bg_animation)
    $('.fbtn,.foot').hide();
    setTimeout(function(){
        $('#tuf,#first-page').hide();
        $('.main').css({'display':'block','animation-play-state':'running'});
        ic = setInterval(icons_appear,700);
        //$('body').css('background',`linear-gradient(${deg}deg,#222,${bg_colors[current_color]} 90%) `);
        $('body').css('background',`#2e9cca`);
        if(current_color==4){
        $('body').addClass(`rainbow`);
        }else{
        $('body').addClass(`${bg_colors[current_color]}`);

        }
    },1400)

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

function theme(){
    current_color+=1;
    current_color%=bg_colors.length;
    deg=120;
    $('body').css('background',`linear-gradient(${deg}deg,#222 ,${bg_colors[current_color]} )`);
}

//setInterval(theme,2000)
