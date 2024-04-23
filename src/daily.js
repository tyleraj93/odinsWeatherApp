export default function buildDaily(data) {
    const dailyDisplay = document.getElementById("dailyWeather");

    if (dailyDisplay.textContent) {
        dailyDisplay.textContent = "";
    }

    const temp = document.createElement("h1");
    temp.textContent = `${data.current.temp_f}\u00B0 f`;
    dailyDisplay.appendChild(temp);

    const location = document.createElement("h2");
    location.textContent = `${data.location.name}, ${data.location.region}`;
    dailyDisplay.appendChild(location);

    const feelsLike = document.createElement("p");
    feelsLike.textContent = `Feels like: ${data.current.feelslike_f}`;
    dailyDisplay.appendChild(feelsLike);

    const condition = document.createElement("p");
    condition.textContent = `Condition: ${data.current.condition.text}`;
    dailyDisplay.appendChild(condition);

    const conditionImg = document.createElement("img");
    conditionImg.src = data.current.condition.icon;
    dailyDisplay.appendChild(conditionImg);

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${data.current.humidity}`;
    dailyDisplay.appendChild(humidity);

    const wind = document.createElement("p");
    wind.textContent = `Wind: ${data.current.wind_mph} ${data.current.wind_dir}`;
    dailyDisplay.appendChild(wind);

    console.log(data);
}
