function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').ariaValueMax;
        const apikey = '48d977bdf793f6dad5b6096e66a1b348'
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

    fetch(apiUrl)
        .then(response => response.jason())
        .then(data => {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = 
                `<h2>Wether in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}</p>
                <p>Weather: ${data.weather[0].description}</p>`
        })
    }