import { formValidityCheck } from './validity.js';

const contactForm = document.getElementById('contact-form');

const cvButton = document.getElementById('cv-button');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  formValidityCheck();
});

//CV Button alert placeholder
cvButton.addEventListener('click', () => {
  alert('CV will be added later.');
});
