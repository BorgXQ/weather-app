import '../style/main.css';
import * as apiFunc from 'getApiFunc.js';
import * as domFunc from 'domFunc.js';

const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar-input');
const btnF = document.querySelector('.temp-unit-btn-f');
const btnC = document.querySelector('.temp-unit-btn-c');
let units = 'metric';
let unitReload = false;
let prevLocation = 'Singapore';


// hide data until all data has loaded
document.querySelector('body').style.visibility = 'hidden';

// main workflow function
async function getWeatherData(unit, initialLoad = false) {
    try {
        let locationName;

        if (initialLoad) {
            locationName = 'Singapore';
        } else {
            locationName = apiFunc.getDataFromInput();
        }

        if (!locationName) {
            return;
        }

        // to keep the same location when refreshing the page when changing units
        if (unitReload) {
            locationName = prevLocation;
        }
        prevLocation = locationName;

        const requestUrl = apiFunc.buildRequestUrl(locationName);
        const weatherData = await apiFunc.getApiForecast(requestUrl);

        // remove prev error msg
        document.querySelector('.error-msg').style.visibility = 'hidden';

        // show extracted data in the DOM
        domFunc.renderWeatherData(weatherData, unit)
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

//apiFunc.getApiForecast('https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=singapore')