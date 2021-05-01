ymaps.ready(init);

function init(){

  if (!(document.getElementById('map'))) {
    return ;
  }

  address = document.getElementById('map').getAttribute('data-address');

  const myMap = new ymaps.Map("map", {
    center: [59.939, 30.315],
    zoom: 10
  });

  myGeocoder = ymaps.geocode(address);

  myGeocoder.then(
    function (res) {
      coordinates = res.geoObjects.get(0).geometry.getCoordinates();

      myMap.geoObjects.add(
        new ymaps.Placemark(
          coordinates,
          {iconContent: address},
          {preset: 'islands#blueStretchyIcon'}
        )
      );

      myMap.setCenter(coordinates);
      myMap.setZoom(15);
    }, function (err) {
      alert('Ошибка при определении местоположения');
    }
  );
}
