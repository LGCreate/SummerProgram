var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Salt+Lake+City,us&appid=b12b9ec8e6619040130f8e8773e1a668');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    document.getElementById("place").innerHTML = weatherData.city.name;
    document.getElementById("day").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp").innerHTML = weatherData.list[0].temp.day;
    document.getElementById("conditions").innerHTML = weatherData.list[0].weather[0].main;
    document.getElementById("conditionsDesc").innerHTML = weatherData.list[0].weather[0].description;  
}