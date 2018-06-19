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
  flkty.select(0);
});

window.initMap = function(element) {
	var warsawCoords = {lat: 52.231593, lng: 21.019990};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: warsawCoords
		});

	galleryData.forEach(function (element, index) {
		var marker = new google.maps.Marker({
			position: element.coords,
			map: map
		})

		var infos = document.querySelector('#infos');
		var title = galleryData[index].title;
		infos.innerHTML = 'Click on the marker';
		marker.addListener( 'click', function(event){
			flkty.selectCell( index );
			infos.innerHTML = 'You clicked marker '+ title;
		});
	});
			flkty.on( 'change', function(index) {
				var coords = galleryData[index].coords
						map.panTo(coords);
						});

	};

  })();