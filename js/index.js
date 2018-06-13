'use strict';

(function() {

var galleryTemplate = document.getElementById('gallery-template').innerHTML;
var galleryList = '';
for(var i = 0; i < galleryData.length; i++){
		galleryList += Mustache.render(galleryTemplate, galleryData[i]);
	}

var carouselMain = document.getElementById('carousel-main');
carouselMain.innerHTML = galleryList;

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

window.initMap = function(element) {
	var warszawa = {lat: 52.231593, lng: 21.019990};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: warszawa
		});

	galleryData.forEach(function (element) {
		// console.log(element.coords)
		var marker = new google.maps.Marker({
			position: element.coords,
			map: map
		})

		var infos = document.querySelector('#infos');
		var title = element.title;
		marker.addListener( 'click', function(){
			infos.innerHTML = 'You clicked marker ' + title;
			// console.log(element)
			// infos.innerHTML = cities
			//////
			flkty.selectCell( title );
			// console.log(flkty.selectCell( (title) )
		});
// console.log(element.coords)
	});
			flkty.on( 'change', function() {//////
						// console.log(element.title);//////
						// map.panTo( element );////////
						// map.panTo( {lat: 52.231593, lng: 21.019990} );
						});///////

	};

  })();