const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

const loginForm = document.getElementById('login_form')
const loginInput = loginForm.querySelector('input')

const elementsDiv = document.getElementById('elements')
const greetingH1 = document.getElementById('greeting')

const savedUsername = localStorage.getItem(USERNAME_KEY)

const handleLogin = event => {
  event.preventDefault()

  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)

  logIn(username)

  loginInput.value = ''
  loginForm.classList.add(HIDDEN_CLASSNAME)
}

const logIn = username => {
  document.title = `${document.title} - ${username}`

  const greeting = `Welcome ${username}!`
  greetingH1.innerText = greeting
  elementsDiv.classList.remove(HIDDEN_CLASSNAME)
}

const init = () => {
  if (savedUsername) {
    logIn(savedUsername)
    return
  }

  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', handleLogin)
}

init()
