const cvButton = document.getElementById('cv-button');
cvButton.addEventListener('click', () => {
    alert('CV will be added later.')
})

const contactForm = document.getElementById('contact-form');

const button = contactForm.querySelector('button')
button.addEventListener('click', (e) => {
    e.preventDefault();
})
// Add form functionality
