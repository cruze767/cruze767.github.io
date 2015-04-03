$('.helper').hover(function() {
    var helper_text = $(this).data('helper');
    
    $('.helper-text').html(helper_text);
}, function() {
    $('.helper-text').html('');
});