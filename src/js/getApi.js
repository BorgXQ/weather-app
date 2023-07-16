// search bar function
function getDataFromInput() {
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

// construct link to request data
function buildRequestUrl(locationName) {
    return `https://api.weatherapi.com/v1/forecast.json?key=31ff6a003cc14b088ca164738231407&q=${locationName}`
}

// retrieve data from API
async function getApiForecast(urlApi) {
    const response = await fetch(urlApi, {mode: 'cors'});
    const data = await response.json();

    console.log(data);
    return data;
}


export {
    getDataFromInput,
    buildRequestUrl,
    getApiForecast,
};