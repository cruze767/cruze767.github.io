$('.wrapper_d').hover(function() {
    alert('hi');
    var helper_text = $(this).data('helper');
    
    $('.helper').html(helper_text);
});