$(document).ready(function()
{
    var activo=true;
    $('.btn-menu').on('click',function(){
        //intercalar los iconos
        $('.btn-menu i').toggleClass('fa-times');


        //animacion
        if(activo){
            $('.list-container').animate({
                left:'0px'
            } , 500);
            activo=false;

        }
        else
        {
            activo=true;
            $('.list-container').animate({
                left:'-100%'
            },500);
            activo=true;
        }

    });
   
    var enlaces = document.querySelectorAll('.list li a');
    enlaces.forEach( (element) => {

        element.addEventListener('click',(event) => {

            enlaces.forEach((link) => {
                link.classList.remove('activo');

            });

            event.target.classList.add('activo');
        });

    });



    //scroll efectos

    var prevScrollPos=window.pageYOffset;
    window.onscroll=() =>{


    var currentScrollPos =window.pageYOffset;
    if(prevScrollPos > currentScrollPos){
        $('.menu').css("top","0px");
        $('.menu').css("transition","0.5s");

    }
    else
    {

        $('.menu').css("top","-60px");
        $('.menu').css("transition","0.5s");

    }

    prevScrollPos=currentScrollPos;

    //condiciones
    var posicion = window.pageYOffset;
    if(posicion<=600){
        //ocultar estilos del menu scroll
        $('.menu').css("borderBottom","none");
        //ocultar ir arriba
        $('.go-top').css("right","-100%");
        
    }else{
        //mostrar estilos menu scroll
        $('.menu').css("borderBottom","3px solid #ff2e63");
        //mostrar ir arriba
        $('.go-top').css("right","0");
        $('.go-top').css("transition","500ms"); 
    }

    }

    //funcion ir arriba
    $('.go-top').on('click',function(){
        $('body,html').animate({
        scrollTop:'0'
        },500);
    });

    //funcion ver abajo
    $('#abajo').on('click',function(){
        $('body,html').animate({
            scrollTop:'6000px'
        }, 500);
    });

    

});