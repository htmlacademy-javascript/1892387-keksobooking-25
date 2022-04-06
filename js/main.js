import {createCards, createCard} from './data.js';
import {getGeneratedCard} from './card_generate.js';
import {CARD_QUANTITY} from './util.js';
import './form-validator.js';
import './map.js';
import './slider.js';

const testCard = createCard();

createCards(CARD_QUANTITY);
getGeneratedCard(testCard);
