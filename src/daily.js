export default function buildDaily(data, tempUnit) {
    const dailyDisplay = document.getElementById("dailyWeather");
    

    if (dailyDisplay.textContent) {
        dailyDisplay.textContent = "";
    }

    const temp = document.createElement("h1");
    temp.textContent = `${data.current["temp_" + tempUnit]}\u00B0 ${tempUnit}`;
    dailyDisplay.appendChild(temp);

    const location = document.createElement("h2");
    location.id = "location";
    location.textContent = `${data.location.name}, ${data.location.region}`;
    dailyDisplay.appendChild(location);

    const feelsLike = document.createElement("p");
    feelsLike.textContent = `Feels like: ${data.current["feelslike_" + tempUnit]}\u00B0${tempUnit}`;
    dailyDisplay.appendChild(feelsLike);

    const condition = document.createElement("p");
    condition.textContent = `Condition: ${data.current.condition.text}`;
    dailyDisplay.appendChild(condition);

    const conditionImg = document.createElement("img");
    conditionImg.src = data.current.condition.icon;
    dailyDisplay.appendChild(conditionImg);

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    dailyDisplay.appendChild(humidity);

    const wind = document.createElement("p");
     wind.textContent = `Wind: ${
         tempUnit === "f"
             ? data.current.wind_mph + " mph"
             : data.current.wind_kph + " kph"
     } ${data.current.wind_dir}`;
    dailyDisplay.appendChild(wind);
}