'use strict';

Liferay.Loader.define('cuaca@1.0.0/App', ['module', 'exports', 'require', 'cuaca$react', 'cuaca$react-dom'], function (module, exports, require) {
    var define = undefined;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react = require('cuaca$react');

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = require('cuaca$react-dom');

    var _reactDom2 = _interopRequireDefault(_reactDom);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function cal(te) {
        var cell = Math.floor(te - 273.15);
        return cell;
    }
    function getWeathericon(rangeId) {
        var c = document.querySelector('#icon');
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
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Gresik,id&appid=' + "e86ee67147407c048d133216c6454c62").then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                console.log(data);
                console.log(data.main.temp);
                var t = document.querySelector('#temp');
                var l = document.querySelector('#loc');
                var d = document.querySelector('#desc');
                var i = document.querySelector('#min');
                var a = document.querySelector('#max');
                getWeathericon(data.weather[0].id);

                t.innerHTML = cal(data.main.temp) + "&deg;C";
                l.innerHTML = data.name + ", " + data.sys.country;
                d.innerHTML = data.weather[0].description;
                i.innerHTML = "Min " + cal(data.main.temp_min) + "&deg;C";
                a.innerHTML = "Max " + cal(data.main.temp_max) + "&deg;C";
                c.classList.add('wi-day-rain');
                // return "data.main.temp";
            });
        }).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
        // return data.main.temp;
    }

    function App() {
        return _react2.default.createElement('div', { className: 'countainer' }, _react2.default.createElement('div', { className: 'cards', id: 'bmkg' }, _react2.default.createElement('h1', null, 'Cuaca Hari Ini'), _react2.default.createElement('i', { className: 'wi display', id: 'icon' }), _react2.default.createElement('h2', { id: 'loc' }, getWeather()), _react2.default.createElement('h2', { id: 'temp' }, getWeather()), _react2.default.createElement('h3', null, _react2.default.createElement('span', { id: 'min' }, getWeather()), _react2.default.createElement('span', { id: 'max' }, getWeather())), _react2.default.createElement('h2', { id: 'desc' }, getWeather())));
    }
    exports.default = App;
    //# sourceMappingURL=App.js.map
});
//# sourceMappingURL=App.js.map