$('.wrapper_d').click(function(event) {
    event.preventDefault();
    
    $('.d_vid').addClass('show');
});

$('.close').click(function(event) {
    event.preventDefault();
    
    $('.d_vid').removeClass('show');
});