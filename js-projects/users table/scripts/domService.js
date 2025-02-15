import { User } from './User.js';

const drawTableRows = users => {
  const tableBody = document.querySelector('#users-table-body');

  tableBody.innerHTML = '';

  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>******</td>
        <td>${user.isLogedIn ? 'מחובר' : 'מנותק'}</td>
        `;
    const logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'התנתקות';
    logoutBtn.addEventListener('click', () => {
      User.logout(user.id);
    });
    logoutBtn.style.background = 'blue';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'מחיקה';
    deleteBtn.addEventListener('click', () => {
      User.removeUser(user.id);
    });
    deleteBtn.style.background = 'red';

    // you should complete this part
    const editButton = document.createElement('button');
    editButton.textContent = 'עריכה';
    editButton.addEventListener('click', () => {
      row.innerHTML = `
        <td><input type="text" name="firstName" id="firstName" value="${user.firstName}"/></td>
        <td><input type="text" name="lastName" id="lastName" value="${user.lastName}"/></td>
        <td><input type="email" name="email" id="register-email" value="${user.email}" /></td>
        <td></td>
        <td></td>
        `;
      const changeBtn = document.createElement('button');
      changeBtn.textContent = 'עריכה';
      changeBtn.style.background = 'green';
      changeBtn.addEventListener('click', () => {
        const updatedFirstName = row.querySelector('#firstName').value;
        const updatedLastName = row.querySelector('#lastName').value;
        const updatedEmail = row.querySelector('#register-email').value;

        User.updateUser(user.id, updatedFirstName, updatedLastName, updatedEmail);

        drawTableRows(User.usersList);
      });
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'ביטול';
      cancelBtn.style.background = 'red';
      cancelBtn.addEventListener('click', () => {
        drawTableRows(User.usersList);
      });
      row.appendChild(changeBtn);
      row.appendChild(cancelBtn);
    });

    editButton.style.background = 'orange';

    row.appendChild(logoutBtn);
    row.appendChild(deleteBtn);
    row.appendChild(editButton);
    tableBody.appendChild(row);
  });
};

const registerForm = document.querySelector('.register-form');
registerForm.addEventListener('submit', e => {
  e.preventDefault();

  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  const users = User.usersList;

  if (users.find(user => user.email === email)) {
    alert('משתמש עם כתובת דוא"ל זו כבר קיים');
    return;
  }
  new User(firstName, lastName, email, password);
  e.target.reset();
});

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  const user = User.usersList.find(user => user.email === email);
  if (user && user.password === password) {
    User.login(user.id);
    e.target.reset();
  } else {
    alert('שם משתמש או סיסמה לא נכונים');
  }
});

export { drawTableRows, registerForm, loginForm };
