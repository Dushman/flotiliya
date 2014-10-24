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

  $('.apartment-slider-1').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    nextText: 'B',
    prevText: 'A'
  });

  //Map-----------------------------------------------

  var map;

  function ZoomControl(controlDiv, map) {
  
    controlDiv.style.marginRight = '95px';
    controlDiv.style.marginTop = '-200px';

    var controlWrapper = document.createElement('div');
    controlWrapper.style.width = '50px'; 
    controlWrapper.style.height = '110px';
    controlDiv.appendChild(controlWrapper);
    
    var zoomInButton = document.createElement('div');
    zoomInButton.style.width = '50px'; 
    zoomInButton.style.height = '50px';
    zoomInButton.style.marginBottom = '10px';
    zoomInButton.style.cursor = 'pointer';
    zoomInButton.style.backgroundImage = 'url("./img/zoom-in.png")';
    controlWrapper.appendChild(zoomInButton);
      
    var zoomOutButton = document.createElement('div');
    zoomOutButton.style.width = '50px'; 
    zoomOutButton.style.height = '50px';
    zoomOutButton.style.cursor = 'pointer';
    zoomOutButton.style.backgroundImage = 'url("./img/zoom-out.png")';
    controlWrapper.appendChild(zoomOutButton);

    google.maps.event.addDomListener(zoomInButton, 'click', function() {
      map.setZoom(map.getZoom() + 1);
    });
      
    google.maps.event.addDomListener(zoomOutButton, 'click', function() {
      map.setZoom(map.getZoom() - 1);
    });  
      
  }

  function initialize() {
  
    var styles = [
      { "stylers": [ { "color": "#ffffff" } ] },
      { "featureType": "road", "stylers": [ { "color": "#9fd4ff" } ] },
      { "elementType": "labels", "stylers": [ { "visibility": "off" } ] }
    ];

    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});

    var mapOptions = {
      zoom: 11,
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

    setTimeout(function() {setMarker(map, main)}, 1000);

    setTimeout(function() {setMarkersMetro(map, metroArr)}, 2000);

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);

  }

  // Main

    var main = [
      ['Флотилия', 55.8659, 37.4599, 0]
    ];
    
    function setMarker(map, locations) {      
      var image = new google.maps.MarkerImage('./img/point.png',          
          new google.maps.Size(36, 46),
          new google.maps.Point(0,0),          
          new google.maps.Point(0, 46));

      var shape = { coord: [1, 1, 1, 20, 18, 20, 18 , 1],  type: 'poly' };

      for (var i = 0; i < locations.length; i++) {
        var main = locations[i];
        var myLatLng = new google.maps.LatLng(main[1], main[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,            
            icon: image,
            shape: shape,
            animation: google.maps.Animation.DROP,
            zIndex: main[3]
        });
        
        marker.setTitle(main[0].toString());              

      } 
    }

    // Metro

    var metroArr = [];

    var metroArr = [
      ['Речной вокзал', 55.8553, 37.4765, 0]
    ];
    
    function setMarkersMetro(map, locations) {      
      var image = new google.maps.MarkerImage('./img/metro.png',          
          new google.maps.Size(18, 18),
          new google.maps.Point(0,0),          
          new google.maps.Point(0, 18));

      var shape = { coord: [1, 1, 1, 20, 18, 20, 18 , 1],  type: 'poly' };

      for (var i = 0; i < locations.length; i++) {
        var metro = locations[i];
        var myLatLng = new google.maps.LatLng(metro[1], metro[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,            
            icon: image,
            shape: shape,
            animation: google.maps.Animation.DROP,
            zIndex: metro[3]
        });
        
        marker.setTitle(metro[0].toString());              

      } 
    }

    function attachMessage(marker, message) {
        
        var infowindow = new google.maps.InfoWindow({
          content: message,
          maxWidth: 200
        });
        
        google.maps.event.addListener(marker, 'click', function() {     
            infowindow.open(marker.get('map'), marker);
            infowindowArr.push(infowindow);
        });

        infowindow.open(marker.get('map'), marker);

    } 

  google.maps.event.addDomListener(window, 'load', initialize);

  $('.index-tabs-control-block > div').click(function(e){
    e.preventDefault();
    $(this).addClass('selected').siblings().removeClass('selected');
    var index = $(this).index(); 
  });

});