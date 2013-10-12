// Generated by CoffeeScript 1.6.3
(function() {
  var directionsDisplay, directionsService, initialize, map, usf;

  map = null;

  directionsDisplay = null;

  directionsService = new google.maps.DirectionsService();

  usf = new google.maps.LatLng(37.780, -122.45);

  initialize = function() {
    var image, mapOptions;
    directionsDisplay = new google.maps.DirectionsRenderer();
    image = {
      url: "images/jiong.png",
      scaledSize: new google.maps.Size(32, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };
    mapOptions = {
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: usf
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    directionsDisplay.setMap(map);
    return directionsDisplay.setOptions({
      markerOptions: {
        position: usf,
        map: map,
        icon: image
      }
    });
  };

  window.calcRoute = function() {
    var request;
    request = {
      origin: usf,
      destination: "Daly City",
      travelMode: google.maps.TravelMode.DRIVING
    };
    return directionsService.route(request, function(result, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        return directionsDisplay.setDirections(result);
      }
    });
  };

  window.dropMarker = function() {
    var image, marker;
    image = {
      url: "images/jiong.png",
      scaledSize: new google.maps.Size(32, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };
    return marker = new google.maps.Marker({
      position: usf,
      map: map,
      icon: image
    });
  };

  google.maps.event.addDomListener(window, 'load', initialize);

}).call(this);

/*
//@ sourceMappingURL=main.map
*/
