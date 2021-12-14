const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

const loginForm = document.getElementById('login_form')
const loginInput = loginForm.querySelector('input')

const greetingH1 = document.getElementById('greeting')

const savedUsername = localStorage.getItem(USERNAME_KEY)

const handleLogin = event => {
  event.preventDefault()

  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)

  setGreeting(username)

  loginInput.value = ''
  loginForm.classList.add(HIDDEN_CLASSNAME)
}

const setGreeting = username => {
  document.title = `${document.title} - ${username}`

  const greeting = `Welcome ${username}!`
  greetingH1.innerText = greeting
  greetingH1.classList.remove(HIDDEN_CLASSNAME)
}

const init = () => {
  if (savedUsername) {
    setGreeting(savedUsername)
    return
  }

  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', handleLogin)
}

init()
