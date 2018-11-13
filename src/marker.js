const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
  activity: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = function(type, coords) {
  // Your Code Here
  const icon = iconURLs[type];
  const markerIcon = document.createElement('div');
  markerIcon.style.width = '32px';
  markerIcon.style.height = '39px';
  markerIcon.style.backgroundImage = `url(${icon})`;

  return new mapbox.Marker(markerIcon).setLngLat(coords);
};

module.exports = buildMarker;
