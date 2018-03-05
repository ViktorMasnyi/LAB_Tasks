window.onload = function() {
$('a').click(function (e) {
  e.preventDefault();
  $('a').each(function (i) {
    $(this).css({ 'color': 'blue' });
  });
  $(this).css('color', 'green');
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 800);
});
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('#go-top').css('display', 'block');
    } else {
      $('#go-top').css('display', 'none');
    }
  }
  $('#go-top').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('#top').offset().top
      }, 800);
  })
}