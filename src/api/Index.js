import React from 'react';
import axios from 'axios';
const url='https://covid19.mathdro.id/api';



export const fetchData = async() => {
    try{

        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(url);
        return {confirmed,recovered,deaths,lastUpdate}
    }
    catch(error){
        console.log(error)

    }

}
export const fetchDailyData=async()=>{

    try{
        const {data}=await axios.get(`${url}/daily`);
        const modifiedData= data.map((daily)=>({
            confirmed:daily.confirmed.total,
            deaths:daily.deaths.total,
            date:daily.reportDate,
        }))
        
       
      
        return modifiedData
        

    }
    catch(error){
        console.log(error)

    }

}

export const fetchCountries=async()=>{

    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        const CountryData= countries.map((country)=>(country.name ))
        
       
      
         return CountryData;
       
        

    }
    catch(error){
        console.log(error)

    }

}