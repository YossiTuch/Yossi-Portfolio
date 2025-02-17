import { formValidityCheck } from './validity.js';

const contactForm = document.getElementById('contact-form');
// const nameInput = document.getElementById('name-input');
// const emailInput = document.getElementById('email-input');
// const phoneInput = document.getElementById('phone-input');
// const messageInput = document.getElementById('message-input');

const cvButton = document.getElementById('cv-button');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  formValidityCheck();
});

//CV Button alert placeholder
cvButton.addEventListener('click', () => {
  alert('CV will be added later.');
});
