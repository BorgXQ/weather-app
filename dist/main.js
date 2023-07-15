
const getApiForecast = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=london', {mode: 'cors'});
    const data = await response.json();

    console.log(data)
    return data;
}

//top left
const getApiCondition = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=london', {mode: 'cors'});
    const data = await response.json();

    console.log(data.current.condition.text)
    return data;
}

const getApiLocation = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=london', {mode: 'cors'});
    const data = await response.json();

    console.log(data.location.name)
    return data;
}

//top right
const getApiFeelsLikeC = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=london', {mode: 'cors'});
    const data = await response.json();

    console.log(data.current.feelslike_c)
    return data;
}

const getApiFeelsLikeF = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=london', {mode: 'cors'});
    const data = await response.json();

    console.log(data.current.feelslike_f)
    return data;
}

const getApiHumidity = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=london', {mode: 'cors'});
    const data = await response.json();

    console.log(data.current.humidity)
    return data;
}

const getApiRainChance = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=london', {mode: 'cors'});
    const data = await response.json();

    console.log(data.forecast.forecastday[0].day.daily_chance_of_rain)
    return data;
}

const getApiWindSpeed = async () => {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=london', {mode: 'cors'});
    const data = await response.json();

    console.log(data.current.gust_kph
        )
    return data;
}

getApiForecast()

