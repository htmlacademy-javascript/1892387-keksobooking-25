
import {createCards, createCard} from './data.js';
import {getFormDisable, getFormActive} from './form.js';
import {getGeneratedCard} from './card_generate.js';
import {CARD_QUANTITY} from './util.js';

const testCard = createCard();

createCards(CARD_QUANTITY);
getGeneratedCard(testCard);
getFormDisable('.ad-form');
getFormDisable('.map__filters');
getFormActive('.ad-form');
