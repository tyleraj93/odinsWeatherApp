export default function buildForecast(data) {
    const forecastDisplay = document.getElementById("forecast");

    if (forecastDisplay.textContent) {
        forecastDisplay.textContent = "";
    }

    let forecastDays = data.forecast.forecastday;
    for (let i = 1; i < forecastDays.length; i++) {
        console.log(forecastDays[i]);
        buildFutureDay(forecastDays[i], forecastDisplay);
    }
}

function buildFutureDay(data, entryPoint) {

    const dayDisplay = document.createElement("div");

    const conditionImg = document.createElement("img");
    conditionImg.src = data.day.condition.icon;
    dayDisplay.appendChild(conditionImg);

    const date = document.createElement("p");
    date.textContent = data.date.slice(5);
    dayDisplay.appendChild(date);

    const maxTemp = document.createElement("p");
    maxTemp.textContent = `High: ${data.day.maxtemp_f}\u00B0 f`;
    dayDisplay.appendChild(maxTemp);

    const minTemp = document.createElement("p");
    minTemp.textContent = `Low: ${data.day.mintemp_f}\u00B0 f`;
    dayDisplay.appendChild(minTemp);

    entryPoint.appendChild(dayDisplay);

}