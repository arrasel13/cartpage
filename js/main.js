
(function() {

	var bodyEl = document.body,
		// content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'wcfc-close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		// content.addEventListener( 'click', function(ev) {
		// 	var target = ev.target;
		// 	if( isOpen && target !== openbtn ) {
		// 		toggleMenu();
		// 	}
		// } );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'wcfc-show-container' );
		}
		else {
			classie.add( bodyEl, 'wcfc-show-container' );
		}
		isOpen = !isOpen;
	}

	init();

})();
