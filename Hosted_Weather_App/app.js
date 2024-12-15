const request = require('request')

const url = "https://api.weatherstack.com/current?access_key=d8ea4d310ce8be11f253d0d4a6906715&query=37.8267,-122.4233&units=m"

request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}. it is currently ${response.body.current.temperature} degrees outside. It feels like ${response.body.current.feelslike} degress outside.`)
})

// m = metric, s = scientific, f = farenheit

