window.onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);


    const API_KEY = 'a565f896d2b78a487c4c9bb59551d556';

    const fetchData = position => {
        const {latitude, longitude} = position.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(response => response.json()).then(data => setWeatherData(data));

    }

    const setWeatherData = (data) => {
        console.log(data);
        const weatherData = {
            location: data.name,
            description: data.weather[0].main,
            humidity: (data.main.humidity) + '%',
            temperature: (Math.round(data.main.temp)) + ' C°',
            date: getDate()
        }
        Object.keys(weatherData).forEach(key => {
            document.getElementById(key).textContent = weatherData[key]
        });
    }

    const getDate = () => {
        let date = new Date();
        return `${
            date.getDate()
        }-${
            ('0' + date.getMonth()).slice(-2)
        }-${
            date.getFullYear()
        }`;
    }
}
