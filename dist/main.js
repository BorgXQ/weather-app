async function getApi() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=31ff6a003cc14b088ca164738231407&q=london', {mode: 'cors'});
    const data = await response.json();

    console.log(data);
}

getApi()