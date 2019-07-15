let url = ("https://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City,us&appid=b12b9ec8e6619040130f8e8773e1a668");

function loadDoc() {    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            console.log("Successful...");
            
            let weatherDataDays = JSON.parse(this.response);
            console.log(weatherDataDays.list);
            console.log(weatherDataDays.list.length);

            for(let counter = 0; counter < weatherDataDays.list.length; counter++){

                let currentDay = weatherDataDays.list[counter];
                console.log(currentDay);
            }
        
        } else {
            
            console.log("failure...")
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
        
loadDoc();