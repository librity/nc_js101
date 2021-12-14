const loginForm = document.getElementById('login_form')
const loginInput = loginForm.querySelector('input')

const handleLogin = event => {
  event.preventDefault()

  setUsername(loginInput.value)

  loginInput.value = ''
  loginForm.classList.add(HIDDEN_CLASSNAME)

  logIn()
}

const logIn = () => {
  document.title = `${document.title} - ${getUsername()}`
  greetingH1.classList.remove(HIDDEN_CLASSNAME)
}

const init = () => {
  if (usernameIsSaved()) return logIn()

  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', handleLogin)
}

init()
