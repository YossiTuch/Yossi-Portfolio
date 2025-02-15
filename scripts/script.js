const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const messageInput = document.getElementById('message-input');

const cvButton = document.getElementById('cv-button');

contactForm.addEventListener('click', e => {
  e.preventDefault();
});

//TODO: Send elements textContent to the eventListener

//CV Button alert placeholder
cvButton.addEventListener('click', () => {
  alert('CV will be added later.');
});
