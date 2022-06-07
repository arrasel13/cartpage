// Coupon code start

$( ".wfc_applyCouponCodeBtn" ).click(function() {

    var $this = $(this);
    
    $this.toggleClass("text_change");

    if ($this.hasClass("text_change")) {

        $this.html("Have any Coupon?");
        $this.removeClass("btn btn-primary").addClass("wfc_applyCouponCodeBtnStyle");
        $( "input.wfc_applyCouponCodeField" ).hide();

    } else {

        $this.html("Coupon");
        $this.addClass("btn btn-primary").removeClass("wfc_applyCouponCodeBtnStyle");
        $( "input.wfc_applyCouponCodeField" ).show( "slow", "linear" );

    }
});