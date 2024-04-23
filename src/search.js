import buildDaily from "./daily";
import buildForecast from "./forecast.js";

const acceptButton = document.getElementById("acceptInput");
acceptButton.addEventListener("click", getWeather);

async function getWeather() {
    let location = document.getElementById("locationInput").value;
    document.getElementById("locationInput").value = "";
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=5cd47542065f4defbfc174337241004&q=${location}&aqi=no&days=6`,
            { mode: "cors" }
        );
        const data = await response.json();
        buildDaily(data);
        buildForecast(data);
        console.log(data);
    } catch (error) {
        console.error("Error: ", error)
    };
}
