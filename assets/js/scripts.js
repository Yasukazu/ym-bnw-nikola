/* add click event for navbar-toggle item */
$(function() {
  $('#btn-toggle-nav').click(function() {
    var item = $('nav.navbar-collapse');
    item.slideToggle(500, function() {
      item[0].style.removeProperty('display');
      item.toggleClass('in');
    });

  });
});
