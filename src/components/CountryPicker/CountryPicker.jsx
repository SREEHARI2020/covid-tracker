import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api/Index';
import styles from './CountryPicker.module.css';



 const CountryPicker = ({handleChange}) => {

const [country, setCountry] = useState([])
useEffect(()=>{
const fetchApi=async()=>{
    setCountry(await fetchCountries());

}
fetchApi();


  

},[country])


    return (
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="" onChange={(e)=>handleChange(e.target.value)}>
               <option value="">Global</option>
               {country.map((count,i)=>(<option key={i} value={count}>{count}</option>))}
           </NativeSelect>


       </FormControl>
    )
}

export default CountryPicker