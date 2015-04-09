$('.helper').hover(function() {
    var helper_text = $(this).data('helper');
    
    $('.helper-text').html(helper_text);
}, function() {
    $('.helper-text').html('');
});



$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('.ex_wrapper').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};