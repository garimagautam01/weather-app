import React,{useState,useEffect} from "react";
import Weathercard from "./Weathercard";


const Temp = () => {

    const[searchValue, setSearchValue]=useState("Ghaziabad");
    const[tempInfo,setTempInfo]= useState({});
    const getWeatherInfo =async() =>{ 
          try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=53aeed48d681299b98fb0097f7908ac0`;
            const res = await fetch(url);
            const data= await res.json();

            const {temp,humidity,pressure}= data.main;
            const{main:weathermode}= data.weather[0];
            const {name} = data;
            const {speed}  = data.wind;
            const {country,sunset} = data.sys;

            const myNewWeatherInfo ={
                temp,
                humidity,
                pressure,
                weathermode,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo);

          } catch(error){
           console.log(error);
          }
    };

    useEffect(()=>{
        getWeatherInfo();
    },[]);

    return ( 
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search" autoFocus id="search" className="searchTerm" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
           <Weathercard  tempInfo={tempInfo}/>
        </>
    );
}

export default Temp;