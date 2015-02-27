$('.menu').click(function(event) {
    event.preventDefault();
    
    $('.nav').addClass('show');
});

$('.close').click(function(event) {
    event.preventDefault();
    
    $('.nav').removeClass('show');
});