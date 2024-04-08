import React, { useState,useEffect } from 'react'
import { useStateContext } from '../Context/index'
import fog from '../assets/icons/fog.jpg'
import cloudy from '../assets/icons/cloudy.jpg'
import rainy from '../assets/icons/rain.jpg'
import snow from '../assets/icons/snow.jpg'
import stormy from '../assets/icons/stormy.jpg'
import sunny from '../assets/icons/sunny.jpg'
import clear from '../assets/icons/clear.jpg'


const BackgroundLayout = () => {
  const {weather}=useStateContext()
  const [image,setImage]=useState(rainy)

  useEffect(()=>{
    if(weather.conditions){
      let imageString=weather.conditions
      if(imageString.toLowerCase().includes('clear')){
        setImage(clear)
      }
      else if(imageString.toLowerCase().includes('cloud')){
        setImage(cloudy)
      }
      else if(imageString.toLowerCase().includes('storm')||imageString.toLowerCase().includes('thunder')){
        setImage(stormy)
      }
      else if(imageString.toLowerCase().includes('rain')|| imageString.toLowerCase().includes('shower')){
        setImage(rainy)
      }
      else if(imageString.toLowerCase().includes('snow')){
        setImage(snow)
      }
      else if(imageString.toLowerCase().includes('fog')){
        setImage(fog)
      }
      else if(imageString.toLowerCase().includes('sunny')){
        setImage(sunny)
      }
    }
  },[weather])
  // console.log(weather);
  return (
    <img src={image} alt="weather-image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout
