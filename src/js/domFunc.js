import * as utility from './utilFunc.js';

// render left-info weather data
function renderWeatherDataOne(data, units) {
    let tempUnit = '°C';
    if (units === 'imperial') {
        tempUnit = '°F';
    }

    const condition = document.querySelector('.condition');
    condition.textContent = utility.capitalize(data.current.condition.text);

    const city = document.querySelector('.city');
    city.textContent = data.location.name;

    const date = document.querySelector('.date');
    date.textContent = data.location.localtime.split(' ')[0];

    const time = document.querySelector('.time');
    time.textContent = data.location.localtime.split(' ')[1];

    const temperature = document.querySelector('.temperature');
    if (units === 'metric') {
        temperature.textContent = `${Math.round(data.current.temp_c)} ${tempUnit}`;
    } else {
        temperature.textContent = `${Math.round(data.current.temp_f)} ${tempUnit}`;
    }
}

// render right-info weather data
function renderWeatherDataTwo(data, units) {
    let tempUnit = '°C';
    let speedUnit = 'km/h';
    if (units === 'imperial') {
        tempUnit = '°F';
        speedUnit = 'mph';
    }

    const feelsLike = document.getElementById('feelsLike');
    if (units === 'metric') {
        feelsLike.textContent = `${Math.round(data.current.feelslike_c)} ${tempUnit}`;
    } else {
        feelsLike.textContent = `${Math.round(data.current.feelslike_f)} ${tempUnit}`;
    }
    

    const humidity = document.getElementById('humidity');
    humidity.textContent = `${data.current.humidity} %`;

    const rainChance = document.getElementById('rainChance');
    rainChance.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`;

    const windSpeed = document.getElementById('windSpeed');
    if (units === 'metric') {
        windSpeed.textContent = `${data.current.gust_kph} ${speedUnit}`;
    } else {
        windSpeed.textContent = `${data.current.gust_mph} ${speedUnit}`;
    }
    
    const sunrise = document.getElementById('sunrise');
    sunrise.textContent = data.forecast.forecastday[0].astro.sunrise;

    const sunset = document.getElementById('sunset');
    sunset.textContent = data.forecast.forecastday[0].astro.sunset;
}

// render both left-info and right-info data
function renderWeatherData(data, units) {
    renderWeatherDataOne(data, units);
    renderWeatherDataTwo(data, units);
}


export {
    renderWeatherData,
};