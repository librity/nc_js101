const RANDOM_IMAGE_URL = 'https://source.unsplash.com/random'
const RANDOM_BACKGROUND_URL = 'https://source.unsplash.com/random/1920x1080'
const RANDOM_LANDSCAPE_URL =
  'https://source.unsplash.com/random/1920x1080/?landscape'

const fetchRandomBackground = async () => {
  const { url: landscapeURL } = await fetch(RANDOM_LANDSCAPE_URL)

  return landscapeURL
}

const setBackground = imageURL => {
  const backgroundImg = document.createElement('img')
  backgroundImg.src = imageURL

  document.body.appendChild(backgroundImg)
}

fetchRandomBackground().then(setBackground).catch(console.error)
