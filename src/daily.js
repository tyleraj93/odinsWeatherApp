export function buildDaily(data) {
    const dailyDisplay = document.getElementById("dailyWeather");
    
    if (dailyDisplay.textContent) {
        dailyDisplay.textContent = "";
    }
    
    const temp = document.createElement("h1")
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

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${data.current.humidity}`
    dailyDisplay.appendChild(humidity);

    const wind = document.createElement("p");
    wind.textContent = `Wind: ${data.current.wind_mph} ${data.current.wind_dir}`;
    dailyDisplay.appendChild(wind);

    console.log(data);
};


/*
{
  "location": {
    "name": "Tampa",
    "region": "Florida",
    "country": "United States of America",
    "lat": 27.95,
    "lon": -82.46,
    "tz_id": "America/New_York",
    "localtime_epoch": 1713804307,
    "localtime": "2024-04-22 12:45"
  },
  "current": {
    "last_updated_epoch": 1713803400,
    "last_updated": "2024-04-22 12:30",
    "temp_c": 23,
    "temp_f": 73.4,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 6.9,
    "wind_kph": 11.2,
    "wind_degree": 300,
    "wind_dir": "WNW",
    "pressure_mb": 1018,
    "pressure_in": 30.06,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 61,
    "cloud": 50,
    "feelslike_c": 24.8,
    "feelslike_f": 76.7,
    "vis_km": 16,
    "vis_miles": 9,
    "uv": 6,
    "gust_mph": 14.9,
    "gust_kph": 24
  }
}
*/