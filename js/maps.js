// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat:  51.924172, lng: 4.492574}
  });

  var image = '../assets/img/gmarker.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 51.923792, lng: 4.492574},
    map: map,
    icon: image
  });
}
