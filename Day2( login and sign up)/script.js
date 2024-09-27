const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}
const signUpForm = document.querySelector('.register form');

// Add an event listener to the form's submit event
signUpForm.addEventListener('submit', (e) => {
  
  e.preventDefault();

 
  const inputFields = signUpForm.querySelectorAll('input');

  
  inputFields.forEach((field) => {
    field.value = '';
  });
});
const loginForm = document.querySelector('.login form');


loginForm.addEventListener('submit', (e) => {
  
  e.preventDefault();

  //  input fields
  const usernameInput = loginForm.querySelector('.loginF');
  const passwordInput = loginForm.querySelector('.loginp');

  // Clear
  usernameInput.value = '';
  passwordInput.value = '';
});