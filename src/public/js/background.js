const RANDOM_IMAGE_URL = 'https://source.unsplash.com/random'
const RANDOM_BACKGROUND_URL = 'https://source.unsplash.com/random/1920x1080'
const RANDOM_LANDSCAPE_URL =
  'https://source.unsplash.com/random/1920x1080/?landscape'

const fetchRandomBackground = async () => {
  const { url: landscapeURL } = await fetch(RANDOM_LANDSCAPE_URL)

  return landscapeURL
}

const setBackground = imageURL => {
  const element = document.body
  const style = window.getComputedStyle(element)
  const oldBackground = style.getPropertyValue('background-image')
  const newBackground = `url(${imageURL}), ${oldBackground}`

  document.body.style.setProperty('background-image', newBackground)
}

fetchRandomBackground().then(setBackground).catch(console.error)
