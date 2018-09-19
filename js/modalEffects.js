/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );
		// classie.add(overlay, "md-show");

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );



			function removeModal( ) {
				classie.remove( modal, 'md-show' );
				$("body").css("overflow-y", "scroll");

				// if( hasPerspective ) {
				// 	classie.remove( document.documentElement, 'md-perspective' );
				// }
			}



			el.addEventListener( 'click', function( ev ) {
				$("body").css("overflow-y", "hidden");
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModal );
				overlay.addEventListener( 'click', removeModal );

				// if( classie.has( el, 'md-setperspective' ) ) {
				// 	setTimeout( function() {
				// 		classie.add( document.documentElement, 'md-perspective' );
				// 	}, 25 );
				// }
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModal();
			});

		} );

	}

	init();

})();