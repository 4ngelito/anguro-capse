$(document).ready(function() {
  // Navigation
  $(window).bind('load scroll', function(){
     var y = $(window).scrollTop();
     if (y <= 15) {
       $('#lt-navigation nav').addClass('lt-no-background');
     } else if (y > 15) {
       $('#lt-navigation nav').removeClass('lt-no-background');
     }
  });
  $('.lt-mobile-toggle').sideNav();

  // Slider
  $('.lt-slider').slider({full_width: true});
  $(window).resize(function() {
      $('.lt-slider').height($(window).height() + 15).css('position', 'relative');
  });
  $(window).trigger('resize');

  // Parallax
  $('.lt-parallax').parallax();

  // Tabs
  $('.lt-tabs').tabs();

  // Modal
  $('.lt-modal-trigger').leanModal();

  // Select
  $('select').material_select();
  
  //menu dropdown  
  $('.dropdown-button').dropdown();

  //ajax response

  function lanzaFlash(event, message, tipo){
    $.oc.flashMsg({
        'text': message,
        'class': tipo,
        'interval': 3
    });        
    // This will stop the default alert() message
    event.preventDefault();
  }

  $(window).on('ajaxErrorMessage', function(event, message){
      lanzaFlash(event, message, 'error');
  });

  $(window).on('ajaxSuccessMessage', function(event, message){
      lanzaFlash(event, message, 'success');
  });
  
});
