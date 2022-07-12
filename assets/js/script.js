
$(function() {
    $('.wfcClickMore').on('click', function() {

      const box = document.getElementById('wfc-my-form');
      if (box.style.display !== "none") {
        box.style.display = "none";
      } else {
        box.style.display = "block";
      }


      const cartItem = document.getElementById('cartItem');
      if (cartItem.style.visibility !== "hidden") {
        cartItem.style.visibility = "hidden";
      } else {
        cartItem.style.visibility = "visible";
      }


      if ($(this).next('.wfc-show-Cart').length) {
        var show_more = $(this).next('.wfc-show-Cart');
      } else {
        var show_more = $(this).parent().next('.wfc-show-Cart');
      }
  
      $('.wfc-show-Cart').not(show_more).slideUp('slow');
  
      show_more.slideToggle('fast');
      $("i", this).toggleClass("fa-cart-shopping fa-close");
      $('.wfcClickMore').not(this).find("i").removeClass("fa-close").addClass("fa-cart-shopping");

    });
});


// Coupon code start

$( ".wfc-applyCouponCodeBtn" ).click(function() {

  var $this = $(this);
  
  $this.toggleClass("text-change");

  if ($this.hasClass("text-change")) {

      $this.html("Have any Coupon?");
      $this.removeClass("cmnBtn couponBtn").addClass("wfc-applyCouponCodeBtnStyle");
      $( "input.wfc-applyCouponCodeField" ).hide();

  } else {

      $this.html("Coupon");
      $this.addClass("cmnBtn couponBtn").removeClass("wfc-applyCouponCodeBtnStyle");
      $( "input.wfc-applyCouponCodeField" ).show( "slow", "linear" );

  }
});