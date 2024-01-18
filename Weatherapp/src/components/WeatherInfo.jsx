import React, { useState } from 'react'

function WeatherInfo({ data }) {
    const [isF, setIsF] = useState(true);

    const handleClick = (e) => {
        console.log(e.target.name);
        const clickedBtn = e.target.name;

        if (clickedBtn === 'f') {
            console.log('f is active');
            setIsF(true);
        } else {
            console.log('c is active');
            setIsF(false);
        }
    }

    return (
        <div className='forecast flex mx-auto max-w-[50em]'>
            <div className=" text-black flex flex-col justify-around w-full h-fit]">
                <div className='px-8 flex flex-col'>
                    {/*heading - includes temperature, weather text, and image*/}
                    <div className="weatherHeading mt-[1.5] md:mt-[1em] flex flex-col-reverse md:flex-row items-center">
                        <p className="temperature font-light whitespace-nowrap md:pr-[20px]"> {isF ? data.data.current.temp_f : data.data.current.temp_c} &deg;{isF ? 'F' : 'C'} </p>
                        <div className='flex items-center md:pb-0'>
                            <p className="condition font-light"> {data.data.current.condition.text}</p>
                            <img className="icon pl-2" src={`${data.data.current.condition.icon}`}></img>
                        </div>
                    </div>

                    {/*more info - includes region, day, and date*/}
                    <ul className="info self-start mx-auto mt-[5%]">
                        <li className="location text-black font-light p-1">{data.data.location.name}, {data.data.location.region}</li>
                        <li className="day text-black font-light py-1">{data.day}</li>
                        <li className="date text-black font-light py-1">{data.data.forecast.forecastday[0].date}</li>
                    </ul>
                </div>

                {/*F and C toggler*/}
                <div id="degree-toggle" className='self-end p-5'>
                    <button href="#" className={`${!isF ? 'text-[2.1em] text-black' : 'text-[#3a3d44a2] text-[1.8em] hover:text-[2.1em] hover:text-gray-500'}  temp_c font-medium p-1 transition-all duration-150`}
                        name='c' onClick={handleClick} role="button"> &deg;C </button>
                    <button href="#" className={`${isF ? 'text-[2.1em] text-black' : 'text-[#3a3d44a2] text-[1.8em] hover:text-[2.1em] hover:text-gray-500'}  temp_f font-medium p-1 transition-all duration-150`}
                        name='f' onClick={handleClick} role="button"> &deg;F </button>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo