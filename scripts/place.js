



const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});


document.addEventListener("DOMContentLoaded", () => {

    //footer apdate for last modified
    document.getElementById("currentyear").textContent =
        new Date().getFullYear();

    document.getElementById("lastModified").textContent =
        document.lastModified;

    
    const temperature = 8;
    const windSpeed = 15;

    
    const tempElement = document.getElementById("temperature");
    const windSpeedElement = document.getElementById("windSpeed");
    const windChillElement = document.getElementById("windChill");

   
    tempElement.textContent = temperature;
    windSpeedElement.textContent = windSpeed;

   
    function calculateWindChill(temp, speed) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1);
    }

   
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent =
            `${calculateWindChill(temperature, windSpeed)}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }

});