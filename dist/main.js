const getApiForecast = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    return data;
}

//top left
const getApiCondition = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    console.log(data.current.condition.text)
    return data;
}

const getApiLocation = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    console.log(data.location.name)
    return data;
}

//top right
const feelsLike = document.getElementById('feelsLike');
const getApiFeelsLikeC = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    feelsLike.textContent = `${data.current.feelslike_c} °C`;
}

const getApiFeelsLikeF = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    console.log(data.current.feelslike_f)
    return data;
}

const humidity = document.getElementById('humidity');
const getApiHumidity = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    humidity.textContent = `${data.current.humidity} %`;
    return data;
}

const rainChance = document.getElementById('rainChance');
const getApiRainChance = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    rainChance.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`;
}

const windSpeed = document.getElementById('windSpeed');
const getApiWindSpeed = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    windSpeed.textContent = `${data.current.gust_kph} km/h`;
    return data;
}


let urlApi = 'https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=singapore'

getApiCondition();
getApiFeelsLikeC();
getApiHumidity();
getApiRainChance();
getApiWindSpeed();

