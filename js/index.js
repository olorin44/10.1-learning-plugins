'use strict';

(function() {
/////

var galleryTemplate = document.getElementById('gallery-template').innerHTML;
Mustache.parse(galleryTemplate);
var galleryList = '';
for(var i = 0; i < galleryData.length; i++){
		galleryList = Mustache.render(galleryTemplate, galleryData[i]);
	}
	console.log(galleryData);
	console.log(galleryList);

/////
var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
  hash: true, wrapAround: true
});

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var buttonGroup = document.querySelector('.button-group');

buttonGroup.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, '.restart-btn' ) ) {
    return;
  }
  var selector = event.target.getAttribute('data-selector');
  flkty.selectCell( selector );
});


  })();