import { buildDaily } from "./daily"

const acceptButton = document.getElementById("acceptInput");
acceptButton.addEventListener("click", getWeather);

async function getWeather() {
    let location = document.getElementById("locationInput").value;
    // Retrieve current weather and build the days display
    try {
        const responseCurrent = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=5cd47542065f4defbfc174337241004&q=${location}&aqi=no`,
            { mode: "cors" }
        );
        const currentWeatherData = await responseCurrent.json();
        buildDaily(currentWeatherData);
        document.getElementById("locationInput").value = "";
    } catch (error) {
        console.error("Error: ", error);
    }
}
