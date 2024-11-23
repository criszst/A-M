$(window).on('load', function () {
    $('.loader').fadeOut(); // Esconde a loader
    $('body').delay(1050).css({ 'overflow': 'visible' }); // Torna o scroll visível novamente
});

ScrollReveal().reveal('.scroolRev', {
    duration: 3000,
    distance: '200px',
    delay:200
})