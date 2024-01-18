import React, { useEffect, useState } from 'react'
import WeatherInfo from './WeatherInfo'
import { FaMagnifyingGlass } from "react-icons/fa6";
import getWeather from '../utilities/getWeather';

function Form() {

    // states
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    // functions
    const handleChange = (e) => {
        setLocation(e.target.value);
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if (location) {
            try {
                const { data, dayName } = await getWeather(location);
                setWeatherData({ data, 'day': dayName });
                console.log(weatherData);
                setIsFormSubmitted(true);
            } catch (error) {
                alert('Failed to fetch weather data. Please check your location.');
            }

        } else {
            alert('Please Enter a Location. It could be a country, state, city, town, zip, or IP.');
        }
    }

    // return html
    return (
        <div className='w-full px-3'>
            <div className="main w=[50%] md:w-[100%] h-[100vh] mx-auto flex flex-col items-center justify-center">
                <div className='w-full h-[90%]'>
                    <div className='title flex justify-center items-center p-6 underline underline-offset-[15px] 
                decoration-[#214f5a82]'>
                        <h1 className='w-fit text-black text-[3em] font-thin pr-4 tracking-widest'> Weather Forecast</h1>
                    </div>

                    <form className='mx-auto form flex flex-col justify-center items-center w-fit'>
                        <p className='text-black font-normal self-stretch text-[1.2em] mb-4 text-left pt-3'>Specify Location</p>

                        <div className='flex'>
                            <input type="text" id="input" value={location} onChange={handleChange}
                                className='w-[400px] mr-2 rounded-xl p-2 text-[1em] text capitalize'></input>
                            <button type='submit' onClick={submitForm}
                                className='text-black p-2 rounded-xl duration-300 
                        hover:animate-pulse'><FaMagnifyingGlass size={'1.7em'} /></button>
                        </div>
                    </form>



                    {isFormSubmitted && <WeatherInfo data={weatherData} />}
                </div>
            </div>
        </div>
    )
}

export default Form