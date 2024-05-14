import buildDaily from "./daily";
import buildForecast from "./forecast.js";

// Ensure local storage is empty before starting
localStorage.setItem("location", "");

const searchButton = document.getElementById("acceptInput");

// Add funcitonality to search button and start the unit converter
searchButton.addEventListener("click", getWeather);
searchButton.addEventListener("click", activateUnitConvert);

// Gathers weather data and gives data to helper functions for weather forecast and display
async function getWeather() {
    const tempUnit = document.querySelector(
        "input[name='temperatureUnit']:checked"
    ).value; // Selects the checked "F" or "C" for the temperature units

    // Stores user input from the text input unless one is in localStorage already
    let location;
    if (document.getElementById("locationInput").value) {
        location = document.getElementById("locationInput").value;
        localStorage.setItem("location", location);
    } else {
        location = localStorage.getItem("location"); // Location stored on localStorage already for fahrenheit and celcius converter
    }

    // Guard clause to exit function if no user input for location
    if (!location) {
        return;
    }

    document.getElementById("locationInput").value = ""; // Empty the location text input after search is entered

    try {
        // Makes an api request to weatherapi using the provided location
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=5cd47542065f4defbfc174337241004&q=${location}&aqi=no&days=3`,
            { mode: "cors" }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        buildDaily(data, tempUnit); // Update the daily weather display
        buildForecast(data, tempUnit); // Update the forecast display
    } catch (error) {
        console.error("Error: ", error);
    }
}

// Adds the getWeather function to the unit radio inputs to convert the displayed weather units
function activateUnitConvert() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    fahrenheitInput.addEventListener("click", getWeather);
    celsiusInput.addEventListener("click", getWeather);
}


