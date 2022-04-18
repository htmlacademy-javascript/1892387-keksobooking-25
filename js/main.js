import './form.js';
import './slider.js';
import {setUserFormSubmit} from './form-validator.js';
import {toggleForms, loadMap} from './map.js';
import {showSuccessPopup, showErrorPopup} from './popup.js';

toggleForms(true);
loadMap();

setUserFormSubmit(showSuccessPopup, showErrorPopup);
