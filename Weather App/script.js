const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-container');
const details = document.querySelector('.details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = 'API Key';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                details.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
            error404.style.display = 'none';
            error404.classList.add('fadeIn');

            const image = document.querySelector('.weather-container img');
            const temperature = document.querySelector('.weather-container .temp');
            const description = document.querySelector('.weather-container .description');
            const humidity = document.querySelector('.details .humid span');
            const wind = document.querySelector('.details .wind span');
            const rain = document.querySelector('.details .rain span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            rain.innerHTML = json.rain ? `${json.rain['1h']} mm` : 'No rain';

            weatherBox.style.display = '';
            details.style.display = '';
            weatherBox.classList.add('fadeIn');
            details.classList.add('fadeIn');
            container.style.height = '590px';
        })

})