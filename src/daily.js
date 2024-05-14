// This function constructs and displays daily weather information in the webpage.
// It accepts two parameters:
// data - an object containing weather data fetched from an API.
// tempUnit - a string representing the temperature unit ("c" for Celsius or "f" for Fahrenheit).

export default function buildDaily(data, tempUnit) {
    const dailyDisplay = document.getElementById("dailyWeather");

    // Clear any existing content in the daily weather display.
    if (dailyDisplay.textContent) {
        dailyDisplay.textContent = "";
    }

    const dailyContainer = document.createElement("div");
    dailyContainer.id = "dailyContainer";
    dailyContainer.classList.add("card")

    const tempContainer = document.createElement("div");
    tempContainer.id = "tempContainer";

    // Create and append daily weather temp using the tempUnit parameter.
    const temp = document.createElement("h1");
    temp.textContent = `${data.current["temp_" + tempUnit]}\u00B0 ${tempUnit}`;
    tempContainer.appendChild(temp);

    const conditionImg = document.createElement("img");
    conditionImg.src = data.current.condition.icon;
    tempContainer.appendChild(conditionImg);

    dailyContainer.appendChild(tempContainer);

    const location = document.createElement("h2");
    location.id = "location";
    location.textContent = `${data.location.name}, ${data.location.region}`;
    dailyContainer.appendChild(location);

    const feelsLike = document.createElement("p");
    feelsLike.textContent = `Feels like: ${
        data.current["feelslike_" + tempUnit]
    }\u00B0${tempUnit}`;
    dailyContainer.appendChild(feelsLike);

    const condition = document.createElement("p");
    condition.textContent = `Condition: ${data.current.condition.text}`;
    dailyContainer.appendChild(condition);

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    dailyContainer.appendChild(humidity);

    // Create and append daily weather wind using the tempUnit parameter to determine imperial or metric system.
    const wind = document.createElement("p");
    wind.textContent = `Wind: ${
        tempUnit === "f"
            ? data.current.wind_mph + " mph"
            : data.current.wind_kph + " kph"
    } ${data.current.wind_dir}`;
    dailyContainer.appendChild(wind);

    dailyDisplay.appendChild(dailyContainer);
}
