export default function buildForecast(data, unit) {
    const forecastDisplay = document.getElementById("forecast");

    if (forecastDisplay.textContent) {
        forecastDisplay.textContent = "";
    }

    let forecastDays = data.forecast.forecastday;

    for (const day of forecastDays) {
        buildFutureDay(day, unit, forecastDisplay);
    }
}

function buildFutureDay(data, unit, entryPoint) {

    const dayDisplay = document.createElement("div");

    const conditionImg = document.createElement("img");
    conditionImg.src = data.day.condition.icon;
    dayDisplay.appendChild(conditionImg);

    const date = document.createElement("p");
    date.textContent = data.date.slice(5);
    dayDisplay.appendChild(date);

    const maxTemp = document.createElement("p");
    maxTemp.textContent = `High: ${data.day["maxtemp_" + unit]}\u00B0 ${unit}`;
    dayDisplay.appendChild(maxTemp);

    const minTemp = document.createElement("p");
    minTemp.textContent = `Low: ${data.day["mintemp_" + unit]}\u00B0 ${unit}`;
    dayDisplay.appendChild(minTemp);

    entryPoint.appendChild(dayDisplay);

}