document.getElementById("acceptInput").addEventListener("click", saveInput)

function saveInput() {
    var location = document.getElementById("locationInput").value;
    updateLocation(location);
}

async function updateLocation(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5cd47542065f4defbfc174337241004&q=${location}&aqi=no`, { mode: "cors" });
        const locationData = await response.json();
        console.log(locationData);
    } catch (error) {
        console.error("Error: ", error);
    }
}