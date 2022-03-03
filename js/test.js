const API_KEY = `2184998644276543b725c4c605254ff3`
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
    document.getElementById('city-name').value = ''
}

const setText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setText('city', temperature.name)
    setText('temperature', temperature.main.temp)
    setText('weather', temperature.weather[0].main)
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src', url)
}
