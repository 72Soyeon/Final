$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.scroll').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / (elementHeight*0.5));
            return opacity;
        }
    });
});