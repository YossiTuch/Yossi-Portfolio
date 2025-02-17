const isEmail = email => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(String(email).toLowerCase());
};

export const formValidityCheck = () => {
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const phoneInput = document.getElementById('phone-input');
  const messageInput = document.getElementById('message-input');

  nameInput.classList.remove('invalid');
  emailInput.classList.remove('invalid');
  phoneInput.classList.remove('invalid');
  messageInput.classList.remove('invalid');

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const messageValue = messageInput.value;

  if (nameValue === '') {
    nameInput.classList.add('invalid');
    alert('Name Required');
    return;
  } else if (nameValue.length <= 1) {
    nameInput.classList.add('invalid');
    alert('Name should contain more than 1 character');
    return;
  }

  if (!isEmail(emailValue)) {
    emailInput.classList.add('invalid');
    alert('Email is Invalid');
    return;
  }

  if (phoneValue.length !== 10) {
    phoneInput.classList.add('invalid');
    alert('Invalid phone number');
    return;
  }
  if (messageValue === '') {
    messageInput.classList.add('invalid');
    alert('Message required');
    return;
  }

  nameInput.classList.remove('invalid');
  emailInput.classList.remove('invalid');
  phoneInput.classList.remove('invalid');
  messageInput.classList.remove('invalid');

  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  messageInput.value = '';

  alert('Message Sent successfully');
};
