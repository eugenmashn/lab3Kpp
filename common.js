
let map;
let cities;

let query = 'http://api.openweathermap.org/data/2.5/group?id=706369,700569,709930,702550,691650,710719,696643,706483,698740,'+
'703448,689558,694423,695594,702658,709717,686967,705812,692194,710735,710791'+
'&appid=f6b2bb02a2cfe5fd3d985987aa047d75&units=metric';
function initMap() {
     let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: { lat: 48.5, lng: 31 }
    });

    fetch(query)
    .then(function (response) {
      response.json().then(function (data) {
        for (let i = 0; i < data.list.length; ++i) {
          let city = data.list[i];
          let postion = { lat: city.coord.lat, lng: city.coord.lon };
          let icon = 'http://openweathermap.org/img/w/' + city.weather[0].icon + '.png';

          let marker = new google.maps.Marker({
            position: postion,
            map: map,
            icon: icon,
            title: city.name
          });
        }
      });
    });
  }
