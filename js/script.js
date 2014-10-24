$(function(){

  $('.index-top-slider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    nextText: 'B',
    prevText: 'A',
    onSliderLoad: function(){
      $('#index-top-slider .slide').css('visibility' , 'visible'); 
      $('.slider-loader').remove();
    }
  });

  $('.index-bottom-slider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    nextText: 'B',
    prevText: 'A',
    onSliderLoad: function(){
      $('#index-bottom-slider .slide').css('visibility' , 'visible'); 
      $('.slider-loader').remove();
    }
  });

  function initialize() {
  
    var styles = [
      { "stylers": [ { "color": "#ffffff" } ] },
      { "featureType": "road", "stylers": [ { "color": "#9fd4ff" } ] },
      { "elementType": "labels", "stylers": [ { "visibility": "off" } ] }
    ];

    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});

    var mapOptions = {
      zoom: 12,
      scrollwheel: false,
      draggable: false,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      center: new google.maps.LatLng(55.8553, 37.4765),
      mapTypeControlOptions:{
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'),
      mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

  }

  function attachMessage(marker, message) {
        
        var infowindow = new google.maps.InfoWindow({
          content: message,
          maxWidth: 200
        });

        infowindow.open(marker.get('map'), marker);

  }

  google.maps.event.addDomListener(window, 'load', initialize);

});