function initMapnez() {
    var markerNez = {lat: 53.912414, lng: 27.580755};
    var map = new google.maps.Map(document.getElementById('mapnez'), {
      zoom: 17,
      center: markerNez
    });
    var nezmarker = new google.maps.Marker({
      position: markerNez,
      map: map
    });
  }