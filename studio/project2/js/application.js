$('.helper').hover(function() {
    var helper_text = $(this).data('helper');
    
    $('.helper').html(helper_text);
}, function() {
    $('.helper').html('');
});