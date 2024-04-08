import React, { useEffect, useState } from 'react'
import {useDate} from '../Utils/useDate'
import cloud from '../assets/icons/cloud-icon.png'
import rain from '../assets/icons/rain-icon-2.png'
import snow from '../assets/icons/snow-icon.png'
import stormy from '../assets/icons/storm-icon.png'
import sun from '../assets/icons/sun-icon.png'
import fog from '../assets/icons/fog-icon.png'
import wind from '../assets/icons/wind-icon.png'
import iconDef from '../assets/icons/def-icon.png'
import '../index.css'

const WeatherCard = ({
  temperature, windSpeed,humidity,place,heatIndex,iconString,conditions
}) => {

  const [icon,setIcon]=useState(sun)
  const {time}=useDate()

  useEffect(()=>{
    if(iconString){
      if(iconString.toLowerCase().includes('cloud')){
        setIcon(cloud)
      }else if(iconString.toLowerCase().includes('rain')){
        setIcon(rain)
      }else if(iconString.toLowerCase().includes('snow')){
        setIcon(snow)
      }else if(iconString.toLowerCase().includes('clear')){
        setIcon(sun)
      }else if(iconString.toLowerCase().includes('sunny')){
        setIcon(sun)
      }else if(iconString.toLowerCase().includes('storm')||iconString.toLowerCase().includes('thunder')){
        setIcon(stormy)
      }else if(iconString.toLowerCase().includes('fog')){
      setIcon(wind)
    }else if(iconString.toLowerCase().includes('wind')){
      setIcon(fog)
    }else{
      setIcon(iconDef)

    }
    }
    

  },[iconString])
    return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='flex w-full just-center, items-center gap-4 mt-5 mb-4'>
        <img src={icon} alt="weather-icon" className='h-[5rem] w-[5rem]'></img>
        <p className='font-bold text-5xl flex just-center items-center'>
          {temperature} &deg;C
        </p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>
          {new Date().toDateString()}
        </p>
        <p className='flex-1 text-center p-2'>
          {time}
        </p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='fex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>
            Wind Speed <p className='font-normal'>{windSpeed}</p>
        </p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>
        Humidity <p className='font-normal'>{humidity}</p>
        </p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index 
        
        </p>
        <p className='text-lg'>{
          heatIndex?heatIndex:'NA'
        }</p>
      </div>
      <hr className='bg-slate-600'/>
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
    </div>
  )
}

export default WeatherCard
