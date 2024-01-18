import React from 'react'

async function getWeather(location) {
    var url = "https://api.weatherapi.com/v1/forecast.json?key=7a7deb113058482daf1174243210107&q=" + location + "&days=1&aqi=no&alerts=no";
    
    //get day
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    const dayName = days[d.getDay()];

    //get weather info
    try {
        const resp = await fetch(url);
        var data = await resp.json();
        console.log(data)
        
        if(data.error) {
            throw new Error('No matching location found.');
        }

        return {data, dayName};

    } catch (error) {
        console.error(error);
    }
}


export default getWeather;