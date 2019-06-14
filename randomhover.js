
    $('nav-trigger').hover(function() {
        var a = Math.random() * 10 - 5;
        $(this).css('transform', 'rotate(' + a + 'deg) scale(1.25)');
    }, function() {
        $(this).css('transform', 'none');
    });
