// This function builds the forecast section of the page.
// It takes in the forecast data and unit of measurement as arguments.
export default function buildForecast(data, unit) {
    // Selects the forecast section.
    const forecastDisplay = document.getElementById("forecast");

    const forecastContainter = document.createElement("div");
    forecastContainter.id = "forecastContainer";

    if (forecastDisplay.textContent) {
        forecastDisplay.textContent = "";
    }

    let forecastDays = data.forecast.forecastday;

    // Calls build future day function for each forecast day.
    for (const day of forecastDays) {
        buildFutureDay(day, unit, forecastContainter);
    }

    forecastDisplay.appendChild(forecastContainter);
}

// This function builds a forecast day.
// It takes in the forecast data, unit of measurement, and entry point as arguments.
function buildFutureDay(data, unit, entryPoint) {
    const dayDisplay = document.createElement("div");
    dayDisplay.id = "dayDisplay";
    dayDisplay.classList.add("card");

    // Uses slice to display the day of the week without the year.
    const date = document.createElement("p");
    date.textContent = data.date.slice(5);
    dayDisplay.appendChild(date);

    const conditionImg = document.createElement("img");
    conditionImg.src = data.day.condition.icon;
    dayDisplay.appendChild(conditionImg);

    // Uses the unit parameter to determine imperial or metric system.
    const maxTemp = document.createElement("p");
    maxTemp.textContent = `High: ${data.day["maxtemp_" + unit]}\u00B0 ${unit}`;
    dayDisplay.appendChild(maxTemp);

    // Uses the unit parameter to determine imperial or metric system.
    const minTemp = document.createElement("p");
    minTemp.textContent = `Low: ${data.day["mintemp_" + unit]}\u00B0 ${unit}`;
    dayDisplay.appendChild(minTemp);

    entryPoint.appendChild(dayDisplay);
}