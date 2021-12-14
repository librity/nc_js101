const loginForm = document.getElementById('login_form')
const loginInput = loginForm.querySelector('input')
const loginButton = loginForm.querySelector('button')

loginButton.addEventListener('click', () => {
  console.log(loginInput.value)
  loginInput.value = ''
})
