const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar-input');
const btnF = document.querySelector('.temp-unit-btn-f');
const btnC = document.querySelector('.temp-unit-btn-c');
let units = 'metric';
let unitReload = false;
let prevLocation = 'Singapore';

//utility functions
const capitalize = (words) => {
    const separateWord = words.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].slice(1);
    }
    return separateWord.join(' ');
}

// render left-info weather data
const renderWeatherDataOne = (data, units) => {
    let tempUnit = '°C';
    if (units === 'imperial') {
        tempUnit = '°F';
    }

    const condition = document.querySelector('.condition');
    condition.textContent = capitalize(data.current.condition.text);

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
const renderWeatherDataTwo = (data, units) => {
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
const renderWeatherData = (data, units) => {
    renderWeatherDataOne(data, units);
    renderWeatherDataTwo(data, units);
}

// Search bar function
const getDataFromInput = () => {
    const input = document.querySelector('.search-bar-input');
    const locationName = input.value;
    //console.log(locationName);

    if (locationName) {
        return locationName
            .replace(/(\s+$|^\s+)/g, '') // rm white space from start & end
            .replace(/(,\s+)/g, ',') // rm white space aft comma
            .replace(/(\s+,)/g, ',') // rm white space b4 comma
            .replace(/\s+/g, '+'); // replace other white space w/ +
    }
    return '';
}

const buildRequestUrl = (locationName) => {
    return `https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=${locationName}`
}

const getApiForecast = async (urlApi) => {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    console.log(data);
    return data;
}

// hide data until all data has loaded
document.querySelector('body').style.visibility = 'hidden';

const getWeatherData = async (unit, initialLoad = false) => {
    try {
        let locationName;

        if (initialLoad) {
            locationName = 'Singapore';
        } else {
            locationName = getDataFromInput();
        }

        if (!locationName) {
            return;
        }

        // to keep the same location when refreshing the page when changing units
        if (unitReload) {
            locationName = prevLocation;
        }
        prevLocation = locationName;

        const requestUrl = buildRequestUrl(locationName);
        const weatherData = await getApiForecast(requestUrl);

        // remove prev error msg
        document.querySelector('.error-msg').computedStyleMap.visibility = 'hidden';

        // show extracted data in the DOM
        renderWeatherData(weatherData, unit)
        unitReload = false;

        // all data loaded and body can be made visible again
        document.querySelector('body').style.visibility = 'visible';
    } catch (err) {
        console.log(err);
        // show previously invisible error msg upon error
        document.querySelector('.error-msg').style.visibility = 'visible';
    }

    // clear search bar
    document.querySelector('.search-bar-input').value = '';
}

//initial load
getWeatherData(units, true);

searchIcon.addEventListener('click', () => {
    getWeatherData(units);
})

searchBar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getWeatherData(units);
    }
})

btnF.addEventListener('click', async () => {
    units = 'imperial';
    unitReload = true;
    await getWeatherData(units, true);

    btnF.style.display = 'none';
    btnC.style.display = 'block';
})

btnC.addEventListener('click', async () => {
    units = 'metric';
    unitReload = true;
    await getWeatherData(units, true);

    btnC.style.display = 'none';
    btnF.style.display = 'block';
})

//getApiForecast('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=singapore')