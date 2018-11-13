const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnJua21hcHMiLCJhIjoiY2pvZzdvbGpkMGNjODNxcG4xdGd5NTRtciJ9.QpON_agalSr1Hy7ZfVTNHQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker('activity', [-74.008151, 40.705186]); // or [-87.6354, 41.8885]
marker.addTo(map);

const rest = buildMarker('restaurants', [-74.0061604, 40.7051758]);
rest.addTo(map);

const hotel = buildMarker('hotels', [-74.0088972, 40.7076546]);
hotel.addTo(map);
