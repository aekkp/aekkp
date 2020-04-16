let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
let body=document.querySelector('body');
if(isMobile.any()){
        body.classList.add('touch');
        let arrow=document.querySelectorAll('.arrow');
    for(i=0; i<arrow.length; i++){
            let thisLink=arrow[i].previousElementSibling;
            let subMenu=arrow[i].nextElementSibling;
            let thisArrow=arrow[i];

            thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function(){
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
}else{
    body.classList.add('mouse');
}
$(document).ready(function(){
    $('.main_slider').slick({
        arrows: true,
        infinite: true,
        speed: 1000,
        draggable: false,
        waitForAnimation: true,
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });
    $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let blockId = $(this).data('scroll'),
    blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
   });
    $('.burger_menu').click(function(event) {
        $('.burger_menu,.header_menu').toggleClass('active');
    });
});