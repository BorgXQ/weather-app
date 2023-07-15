const getApiForecast = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    console.log(data);
    return data;
}

//top left
const condition = document.getElementById('condition');
const getApiCondition = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();
    const oldConditionData = data.current.condition.text;
    const arr = oldConditionData.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newConditionData = arr.join(' ');
    condition.textContent = newConditionData;
}

const currentLocation = document.getElementById('currentLocation');
const getApiLocation = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    currentLocation.textContent = data.location.name;
}

const todayDate = document.getElementById('todayDate');
const getApiDate = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();
    const dateAndTime = data.location.localtime;
    const timeArray = dateAndTime.split(' ');
    const date = timeArray[0];

    todayDate.textContent = date;
}

const todayTime = document.getElementById('todayTime');
const getApiTime = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();
    const dateAndTime = data.location.localtime;
    const timeArray = dateAndTime.split(' ');
    const time = timeArray[1];

    todayTime.textContent = time;
}

const temperature = document.getElementById('temperature');
const getApiTemp = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    temperature.textContent = `${data.current.temp_c} °C`;
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

const sunrise = document.getElementById('sunrise');
const getApiSunrise = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    sunrise.textContent = data.forecast.forecastday[0].astro.sunrise;
}

const sunset = document.getElementById('sunset');
const getApiSunset = async () => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    sunset.textContent = data.forecast.forecastday[0].astro.sunset;
}

let urlApi = 'https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=singapore'

getApiForecast();

getApiCondition();
getApiLocation();
getApiDate();
getApiTime();
getApiTemp();

getApiFeelsLikeC();
getApiHumidity();
getApiRainChance();
getApiWindSpeed();
getApiSunrise();
getApiSunset();


// Display F vs C
