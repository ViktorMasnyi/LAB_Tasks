window.onload = function() {
  $('#toggle-button').click(() => {
    $('#side-menu').toggle(500, 'linear')
  });
}