const formDisabled = (formClass) => {
  const form = document.querySelector(formClass);
  form.classList.add('ad-form--disabled');
  const interactiveComponents = form.children;
  for (let i = 0; i < interactiveComponents.length; i++) {
    interactiveComponents[i].setAttribute('disabled', 'disabled');
  }
};

const formActive = (formClass) => {
  const form = document.querySelector(formClass);
  form.classList.remove('ad-form--disabled');
  const interactiveComponents = form.children;
  for (let i = 0; i < interactiveComponents.length; i++) {
    interactiveComponents[i].removeAttribute('disabled');
  }
};

export {formDisabled, formActive};
