import React, { useEffect, useState } from 'react'
import cloud from '../assets/icons/cloud-icon.png'
import rain from '../assets/icons/rain-icon-2.png'
import snow from '../assets/icons/snow-icon.png'
import stormy from '../assets/icons/storm-icon.png'
import sun from '../assets/icons/sun-icon.png'
import fog from '../assets/icons/fog-icon.png'
import wind from '../assets/icons/wind-icon.png'
import iconDef from '../assets/icons/def-icon.png'


const MiniCard = ({time,temp,iconString}) => {
  const [icon,setIcon]=useState()
  useEffect(()=>{
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
  })
  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col '>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en',{weekday:'long'}).split(" ")[0]}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="weather" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp} &deg;C</p>
    </div>
  )
}

export default MiniCard
