import React from 'react';
import ReactDOM from 'react-dom';

function cal(te) {
    let cell = Math.floor(te - 273.15);
    return cell;
}
function getWeathericon(rangeId) {
    let c = document.querySelector('#icon');
    switch (true) {
        case rangeId >= 200 && rangeId <= 232:
            c.classList.add('wi-thunderstorm');
            break;
        case rangeId >= 300 && rangeId <= 321:
            c.classList.add('wi-sleet');
            break;
        case rangeId >= 500 && rangeId <= 531:
            c.classList.add('wi-storm-showers');
            break;
        case rangeId >= 600 && rangeId <= 622:
            c.classList.add('wi-snow');
            break;
        case rangeId >= 701 && rangeId <= 781:
            c.classList.add('wi-fog');
            break;
        case rangeId === 800:
            c.classList.add('wi-day-sunny');
            break;
        case rangeId >= 801 && rangeId <= 804:
            c.classList.add('wi-day-fog');
            break;
        default:
            c.classList.add('wi-day-fog');
    }

}

function getWeather() {
    const API_key = "e86ee67147407c048d133216c6454c62";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Gresik,id&appid=${API_key}`)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    console.log(data.main.temp);
                    let t = document.querySelector('#temp');
                    let l = document.querySelector('#loc');
                    let d = document.querySelector('#desc');
                    let i = document.querySelector('#min');
                    let a = document.querySelector('#max');
                    getWeathericon(data.weather[0].id);

                    t.innerHTML = cal(data.main.temp) + "&deg;C";
                    l.innerHTML = data.name + ", " + data.sys.country;
                    d.innerHTML = data.weather[0].description;
                    i.innerHTML = "Min " + cal(data.main.temp_min) + "&deg;C";
                    a.innerHTML = "Max " + cal(data.main.temp_max) + "&deg;C";
                    c.classList.add('wi-day-rain');
                    // return "data.main.temp";
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    // return data.main.temp;

}


function App() {
    return (

        <div className="countainer">
            <div className="cards" id='bmkg'>
                <h1>Cuaca Hari Ini</h1>
                <i className="wi display" id='icon'></i>
                <h2 id='loc'>{getWeather()}</h2>
                <h2 id='temp'>{getWeather()}</h2>
                <h3>
                    <span id='min'>{getWeather()}</span>
                    <span id='max'>{getWeather()}</span>
                </h3>
                <h2 id='desc'>{getWeather()}</h2>
            </div>

        </div>
    );
}
export default App;