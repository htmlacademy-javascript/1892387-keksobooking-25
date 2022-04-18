import {createOffer} from './card-generate.js';
import {mapFiltersForm, setMapFilters, filterOffers} from './filters.js';
import {form} from './form-validator.js';
import {getData, showError} from './api.js';
import {debounce} from './debouncer.js';

const MAIN_PIN_SIZE = 52;
const AD_PIN_SIZE = 40;
const BASIC_LAT = 35.68948;
const BASIC_LNG = 139.69170;
const BASIC_MAP_SCALING = 13;
const DECIMAL_PLACE = 5;
const OFFERS_COUNT = 10;
const map = L.map('map-canvas');
const address = document.querySelector('#address');

const toggleClass = (element, className, value) => {
  element.classList.toggle(className, value);
};

const toggleFormElements = (formElements, value) => {
  formElements.forEach((element) => {element.disabled = value;});
};

const toggleAdForm = (value) => {
  toggleClass(form, 'ad-form--disabled', value);
  toggleFormElements(form.querySelectorAll('fieldset'), value);
};

const toggleFiltersForm = (value) => {
  toggleClass(mapFiltersForm, 'map__filters--disabled', value);
  toggleFormElements(mapFiltersForm.querySelectorAll('select, .map__features'), value);
};

const toggleForms = (value) => {
  toggleAdForm(value);
  toggleFiltersForm(value);
};

const mainPinMarker = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [MAIN_PIN_SIZE, MAIN_PIN_SIZE],
  iconAnchor: [MAIN_PIN_SIZE/2, MAIN_PIN_SIZE],
});

const adPin = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [AD_PIN_SIZE, AD_PIN_SIZE],
  iconAnchor: [AD_PIN_SIZE/2, AD_PIN_SIZE],
});

const marker = L.marker(
  {
    lat: BASIC_LAT,
    lng: BASIC_LNG,
  },
  {
    draggable: true,
    icon: mainPinMarker,
  },
);

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point) => {
  const {location} = point;
  const adMarker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: adPin,
    },
  );
  adMarker
    .addTo(markerGroup)
    .bindPopup(createOffer(point));
};

const renderMarkers = (offers) => {
  offers
    .slice()
    .slice(0, OFFERS_COUNT)
    .forEach((point) => createMarker(point));
};

const loadMap = () => {
  map.on('load', () => {
    getData((offers) => {
      setMapFilters(debounce(
        () => renderMarkers(filterOffers(offers)),
      ));
      renderMarkers(offers);
      toggleForms(false);
    }, () => showError('Не удалось получить данные. Попробуйте ещё раз'));
  })
    .setView({
      lat: BASIC_LAT,
      lng: BASIC_LNG,
    }, BASIC_MAP_SCALING);
};

const resetMap = () => map.setView({
  lat: BASIC_LAT,
  lng: BASIC_LNG,
});

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const resetMarker = () => {
  marker.setLatLng({
    lat: BASIC_LAT,
    lng: BASIC_LNG,
  });
};

marker.addTo(map);

const getCoordinates = (lat, lng) => {
  address.value = `${lat} ${lng}`;
};

getCoordinates(marker.getLatLng().lat.toFixed(5), marker.getLatLng().lng.toFixed(5));

marker.on('drag', (evt) => {
  const coordinates = evt.target.getLatLng();
  address.value = `${coordinates.lat.toFixed(DECIMAL_PLACE)}, ${coordinates.lng.toFixed(DECIMAL_PLACE)}`;
});

export {loadMap, resetMap, form, resetMarker, markerGroup, renderMarkers, toggleForms, toggleFiltersForm};
