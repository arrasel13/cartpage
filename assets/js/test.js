// show more info in dropdown
$(function() {
    $('.clickMore').on('click', function() {
      if ($(this).next('.showMore').length) {
        var show_more = $(this).next('.showMore');
      } else {
        var show_more = $(this).parent().next('.showMore');
      }
  
      $('.showMore').not(show_more).slideUp('fast');
  
      show_more.slideToggle('fast');
      $("i", this).toggleClass("fa-info-circle fa-close");
      $('.clickMore').not(this).find("i").removeClass("fa-close").addClass("fa-info-circle");
    });
  });
  