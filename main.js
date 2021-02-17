const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const formSubmitBtn = document.querySelector('.btn-submit');

formSubmitBtn.addEventListener('click', e => {
  e.preventDefault();

  if (emailInput.value === '' || passwordInput.value === '') {
    emailInput.style.borderColor = 'red';
    passwordInput.style.borderColor = 'red';
  } else {
    emailInput.style.borderColor = 'inherit';
    passwordInput.style.borderColor = 'inherit';
    form.submit();
    form.reset();
  }
});