function initMapkoz() {
    var markerKoz = {lat: 53.908469, lng: 27.581432};
    var map = new google.maps.Map(document.getElementById('mapkoz'), {
      zoom: 17,
      center: markerKoz
    });
    var kozmarker = new google.maps.Marker({
      position: markerKoz,
      map: map
    });
  }