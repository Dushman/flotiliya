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

  /*function initialize() {
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      draggable: false,
      disableDefaultUI: true,
      center: new google.maps.LatLng(55.8553, 37.4765)
    }

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
                                  
  }

  function attachMessage(marker, message) {
        
    var infowindow = new google.maps.InfoWindow({
      content: message,
      maxWidth: 200
    });

    infowindow.open(marker.get('map'), marker);

  }
    
  google.maps.event.addDomListener(window, 'load', initialize);*/







  function initialize() {
    // Create an array of styles.
    var styles = [
      {
        featureType: "all",
        stylers: [
          { visibility:"off"}
        ]
      },{
        featureType: "road",
        stylers: [
          { hue: "#9fd4ff" },
          {visibility:"on"}
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});

    var mapOptions = {
      zoom: 12,
      scrollwheel: false,
      draggable: false,
      disableDefaultUI: true,
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