const fetch = require("node-fetch");
const APIXU_KEY = "<526742c1ff5d312121884bddcba05849>";

const fetchNow = async function(city) {
    const response = await fetch(`https://api.apixu.com/v1/current.json?key=${APIXU_KEY}&q=${city}`);
    const data = await response.json();

    const now = {
        location: data.location.name,
        country: data.location.country,
        longitude: data.location.lon,
        latitude: data.location.lat,
        temperature: data.location.temp_c,
        condition: data.location.condition.text
    };
    console.log(now);
};

const weatherForecast = async function(city) {
    const response = await fetch(`https://api.apixu.com/v1/forecast.json?key=${APIXU_KEY}&q=${city}`);
    const data = await response.json();
    console.log(data.forecast);
};

module.exports = {
    fetchNow,
    weatherForecast
};