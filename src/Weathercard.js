import React, { useEffect, useState } from "react";
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillCloudsFill } from 'react-icons/bs';
import { BsFillCloudHazeFill } from 'react-icons/bs';
import { RiMistLine } from 'react-icons/ri';
import { WiSunset } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { BsFillCloudRainFill } from 'react-icons/bs';
import { BsWind } from 'react-icons/bs';


const Weathercard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = useState("");

    const {
        temp,
        humidity,
        pressure,
        weathermode,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
        if (weathermode) {
            switch (weathermode) {
                case "Clouds":
                    setWeatherState( <BsFillCloudsFill/> );
                    break;
                case "Haze":
                    setWeatherState(<BsFillCloudHazeFill/>);
                    break;
                case "Clear":
                    setWeatherState(<BsFillSunFill/>);
                    break;
                case "Mist":
                    setWeatherState(<RiMistLine/>);
                    break;
                default:
                    setWeatherState(<BsFillSunFill/>);
                    break;
            }
        }
    }, [weathermode]);


    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = ` ${date.getHours()}:${date.getMinutes()} `

    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                   {weatherState}
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span> </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermode}</div>
                        <div className="place">  {name},{country} </div>
                    </div>
                </div>
                <div className="date"> {new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p> <WiSunset/></p>
                            <p className="extra-info-leftside">
                                {timeStr}PM <br /> sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p> <WiHumidity/> </p>
                            <p className="extra-info-leftside">
                                {humidity} <br /> Humidity
                            </p>
                        </div>

                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p> <BsFillCloudRainFill/> </p>
                            <p className="extra-info-leftside">
                                {pressure} <br /> pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p> <BsWind/> </p>
                            <p className="extra-info-leftside">
                                {speed} <br /> speed
                            </p>
                        </div>
                    </div>

                </div>
            </article>
        </>
    );
}

export default Weathercard;