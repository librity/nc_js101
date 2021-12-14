const USERNAME_KEY = 'username'

const getUsername = () => {
  const savedUsername = localStorage.getItem(USERNAME_KEY)
  if (savedUsername) return savedUsername

  return undefined
}

const setUsername = username => {
  localStorage.setItem(USERNAME_KEY, username)
}

const usernameIsSaved = () => {
  if (localStorage.getItem(USERNAME_KEY)) return true

  false
}
