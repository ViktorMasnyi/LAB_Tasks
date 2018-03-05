window.onload = function() {
$('a')
    .click(function (e) {
        e.preventDefault();

        $('a').each(function (i) {
            $(this).css({ 'color': 'blue' });
        });

        $(this).css('color', 'green');

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
    });
}
