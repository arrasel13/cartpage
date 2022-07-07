// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
// }

$(function() {
    $('.clickMore').on('click', function() {

      const box = document.getElementById('myForm');
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


      if ($(this).next('.showCart').length) {
        var show_more = $(this).next('.showCart');
      } else {
        var show_more = $(this).parent().next('.showCart');
      }
  
      $('.showCart').not(show_more).slideUp('slow');
  
      show_more.slideToggle('fast');
      $("i", this).toggleClass("fa-cart-shopping fa-close");
      $('.clickMore').not(this).find("i").removeClass("fa-close").addClass("fa-cart-shopping");

    });
});


// Coupon code start

$( ".wfc_applyCouponCodeBtn" ).click(function() {

  var $this = $(this);
  
  $this.toggleClass("text_change");

  if ($this.hasClass("text_change")) {

      $this.html("Have any Coupon?");
      $this.removeClass("cmnBtn couponBtn").addClass("wfc_applyCouponCodeBtnStyle");
      $( "input.wfc_applyCouponCodeField" ).hide();

  } else {

      $this.html("Coupon");
      $this.addClass("cmnBtn couponBtn").removeClass("wfc_applyCouponCodeBtnStyle");
      $( "input.wfc_applyCouponCodeField" ).show( "slow", "linear" );

  }
});