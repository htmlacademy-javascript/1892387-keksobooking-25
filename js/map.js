import {getFormDisable, getFormActive} from './form.js';
import {createCards} from './data.js';
import {CARD_QUANTITY} from './util.js';
import {getGeneratedCard} from './card_generate.js';
const createdCards = createCards(CARD_QUANTITY);

const address = document.querySelector('#address');

getFormDisable('.ad-form');

const map = L.map('map-canvas')
  .on('load', () => {
    getFormActive('.ad-form');
  })
  .setView({
    lat: 35.6895000,
    lng: 139.6917100,
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const ordinaryMarkerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  {
    lat: 35.6895000,
    lng: 139.6917100,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker.addTo(map);

const createdMarker = (point) => {
  const {location} = point;
  const addMarker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: ordinaryMarkerIcon,
    }
  );
  addMarker
    .addTo(map)
    .bindPopup(getGeneratedCard(point));
};

createdCards.forEach(createdMarker);

const getCoordinates = (lat, lng) => {
  address.value = `${lat} ${lng}`;
};

getCoordinates(mainMarker.getLatLng().lat.toFixed(5), mainMarker.getLatLng().lng.toFixed(5));

mainMarker.on('moveend', (evt) => {
  const lat  = evt.target.getLatLng().lat.toFixed(5);
  const lng  = evt.target.getLatLng().lng.toFixed(5);
  getCoordinates(lat, lng);
});

