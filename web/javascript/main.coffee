map = null
directionsDisplay = null
directionsService = new google.maps.DirectionsService()
usf = new google.maps.LatLng 37.780, -122.45
initialize = () ->
  directionsDisplay = new google.maps.DirectionsRenderer()
  image =
    url: "images/jiong.png",
    scaledSize: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 32)
  mapOptions =
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: usf
  map = new google.maps.Map document.getElementById("map-canvas"), mapOptions
  directionsDisplay.setMap map
  directionsDisplay.setOptions(
    markerOptions:
      position: usf,
      map: map,
      icon: image
  )

window.calcRoute = () ->
  request =
    origin: usf,
    destination: "Daly City",
    travelMode: google.maps.TravelMode.DRIVING
  directionsService.route request,
    (result, status) ->
      directionsDisplay.setDirections(result) if status == google.maps.DirectionsStatus.OK

window.dropMarker = () ->
  image =
    url: "images/jiong.png",
    scaledSize: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 32)
  marker = new google.maps.Marker(
    position: usf,
    map: map,
    icon: image
  )

#angularJS part

myModule = angular.module('pickmeup', [])


google.maps.event.addDomListener window, 'load', initialize;