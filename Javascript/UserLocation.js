// gets current position of the user
var marker, circle, lat, long, accuracy;

function getPosition(position) {
  navigator.geolocation.watchPosition(success, error);
  lat = pos.coords.latitude;
  long = pos.coords.longitude;
  accuracy = pos.coords.accuracy;
  //   this.success();
  //   this.error();
  if (marker) {
    map.removeLayer(marker);
  }
  if (circle) {
    map.removeLayer(circle);
  }

  marker = L.marker([lat, lon], { icon: custom_icon() });
  circle = L.circle([lat, lon], { radius: accuracy });

  var featureGroup = L.featureGroup([marker, circle]).addTo(map);

  map.fitBounds(featureGroup.getBounds());

  console.log(
    "Your coordinate is: Lat: " +
      lat +
      " Long: " +
      long +
      " Accuracy: " +
      accuracy
  );
}
