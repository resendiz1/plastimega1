(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a, .btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });
    
})(jQuery);


//Colores de las cajas
function cambiarImagen(num){
    document.getElementById('cajasImg').src = `img/cajas/${num}.png`;
}



window.onload = function(){
    emailjs.init("mvA2hTi9RX5iDG6Ry");
}







function enviarCorreo(){

    //Funcion para enviar correos electronicos
    let $remitente = document.getElementById('remitente').value;
    let $asunto = document.getElementById('asunto').value;
    let $mensaje = document.getElementById('mensaje').value;
    let $correo = document.getElementById('correo').value;

if($remitente !='' || $asunto != '' || $mensaje != '' || $correo != '' ){

    


    let params = {
        to_name: "PLASTIMEX",
        from_name: $remitente,
        message: $mensaje,
        email: $correo,
        subject: $asunto 
    };


    emailjs.send("service_19kp3gr", "template_9mc060d", params)
        .then(response => {

            $remitente = '';
            $asunto = '';
            $mensaje = '';
            $correo = '';

            alert('Se envio correctamente el correo');


        }, error => {
            alert('error al enviar', error)
        }
    
    )

  }
  
  else{
    alert('Se tienen que llenar todos los campos');
  }

}


//Funcion para enviar correos electronicos





// video en el carousel
document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById("videoItem");
    const btnToggleSound = document.getElementById("toggleSoundBtn");

    btnToggleSound.addEventListener("click",  (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();
        if (video.muted) {
            video.muted = false;
            btnToggleSound.textContent = "🔊"; // Cambia a icono de sonido activado
        } else {
            video.muted = true;
            btnToggleSound.textContent = "🔇"; // Cambia a icono de silencio
        }
    });
});
// video en el carousel



