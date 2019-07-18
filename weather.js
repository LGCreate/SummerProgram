
function loadTodaysWeather() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Salt+Lake+City,us&units=imperial&appid=b12b9ec8e6619040130f8e8773e1a668');
    request.onload = function (evt) {
        let date = new Date();
        let  weatherData = JSON.parse(request.responseText);
        console.log(weatherData);
        document.getElementById("place").innerHTML = weatherData.name;
        document.getElementById("day").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
        document.getElementById("currentTemp").innerHTML = weatherData.main.temp;
        document.getElementById("conditions").innerHTML = weatherData.weather[0].main;
        document.getElementById("conditionsDesc").innerHTML = weatherData.weather[0].description;  
    };
    request.send();
}

function loadFiveDayForecast() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City,us&units=imperial&appid=b12b9ec8e6619040130f8e8773e1a668');
    request.onload = function (evt) {
        let weatherData = JSON.parse(request.responseText);
        console.log(weatherData);


        for (let counter = 0; counter < weatherData.list.length; counter++) {
        // document.getElementById("place").innerHTML = weatherData.name;
        // document.getElementById("day").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
        // document.getElementById("currentTemp").innerHTML = weatherData.main.temp;
        // document.getElementById("conditions").innerHTML = weatherData.weather[0].main;
        // document.getElementById("conditionsDesc").innerHTML = weatherData.weather[0].description;
        }
    };
    request.send();
}



loadTodaysWeather();
loadFiveDayForecast();