const WEATHER_API_KEY = '64b4a1917a1162ec2a04717a12f24a9a'
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

const tempSpan = document.querySelector('#weather span:first-child')
const citySpan = document.querySelector('#weather span:last-child')

const onGeoError = () => {
  alert('Please allow location access for weather forecast.')
}

const buildWeatherURL = position => {
  const lat = position.coords.latitude
  const lon = position.coords.longitude

  return `${WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
}

const fetchWeatherForecast = async weatherURL => {
  console.log(await fetchJSON(weatherURL))

  const { name: city, weather, main } = await fetchJSON(weatherURL)
  const forecast = { city, weather, main }

  return forecast
}

const setForecast = forecast => {
  tempSpan.innerText = `${forecast.weather[0].main} / ${forecast.main.temp}`
  citySpan.innerText = forecast.city
}

const onGeoOK = position => {
  const weatherURL = buildWeatherURL(position)

  fetchWeatherForecast(weatherURL).then(setForecast).catch(console.error)
}

const weatherInit = () => {
  navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
}

weatherInit()
