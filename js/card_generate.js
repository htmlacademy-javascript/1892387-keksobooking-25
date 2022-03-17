const mapElement = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const getOfferType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
    default:
      return 'Не указано';
  }
};

const getGeneratedCard = (element) => {
  const cardElement = cardTemplate.cloneNode(true);
  // Заголовок
  cardElement.querySelector('.popup__title').textContent = element.offer.title;
  // Адрес
  cardElement.querySelector('.popup__text--address').textContent = element.offer.address;
  // Стоимость
  cardElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  // тип жилья
  const cardType = element.offer.type;
  cardElement.querySelector('.popup__type').textContent = getOfferType(cardType);
  // Количество комнат/жильцов
  cardElement.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests}`;
  // Заезд/выезд
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  // Удобства
  const featuresList = cardElement.querySelectorAll('.popup__feature');
  const cardFeatures = element.offer.features;
  if (cardFeatures.length === 0) {
    cardElement.querySelector('.popup__features').remove();
  } else {
    featuresList.forEach((featuresListItem) => {
      const isNecessary = cardFeatures.some(
        (feature) => featuresListItem.classList.contains(`popup__feature--${feature}`),);
      if (!isNecessary) {
        featuresListItem.remove();
      }
    });
  }
  // Описание
  cardElement.querySelector('.popup__description').textContent = element.offer.description;
  if (element.offer.description === '') {
    cardElement.querySelector('.popup__description').remove();
  }
  // Фото
  const cardPhotos = element.offer.photos;
  const photosList = cardElement.querySelector('.popup__photos');
  const photoTemplate = photosList.querySelector('.popup__photo');
  if (cardPhotos.length === 0) {
    photosList.remove();
  } else {
    cardPhotos.forEach((photo) => {
      photoTemplate.remove();
      const newPhoto = photoTemplate.cloneNode();
      newPhoto.setAttribute('src', photo);
      photosList.appendChild(newPhoto);
    });
  }
  // Аватар
  cardElement.querySelector('.popup__avatar').setAttribute('src', element.author.avatar);
  mapElement.appendChild(cardElement);
};

export {getGeneratedCard};
