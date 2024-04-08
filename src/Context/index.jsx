import {useContext, createContext, useState,useEffect} from 'react';
import axios from 'axios';

const StateContext=createContext();

export const StateContextProvider =({children})=>{
    const [weather,setWeather]=useState({});
    const [values,setValues]=useState([])
    const [place,setPlace]=useState('Delhi');
    const [thisLocation,setLocation]=useState('')

    //fetch api
    const fetchWeather=async()=>{
        const options={
            method:'GET',
            url:'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
              aggregateHours: '24',
              location: place,
              contentType: 'json',
              unitGroup: 'metric',
              shortColumnNames: '0'
            },
            headers: {
                'X-RapidAPI-Key': 'f55272b514msh495b377dd3e2f65p181efdjsnbc11b523f267',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
              }
            
        }
        try {
            const response = await axios.request(options);
            console.log(response.data);
            const thisData=Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])

        } catch (error) {
            console.error(error);
            alert('This place does not exist')
        }
    }

        useEffect(()=>{
                fetchWeather()
        },[place])
        

        useEffect(()=>{
            console.log(values)
        },[values])

        return(
            <StateContext.Provider value={{weather,setPlace,values,thisLocation,place}}>
                
                {children}
            </StateContext.Provider>
        )
}

export const useStateContext=()=>useContext(StateContext)
