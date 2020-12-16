import React,{useEffect,useState} from 'react'
import './App.css';
import{Cards,Chart,CountryPicker} from './components/Index';
import styles from './App.module.css';
import { fetchData } from './api/Index';
import coronaImage from './image.png'

function App() {
  const[data,setData]=useState({})
  const[country,setCountry]=useState('')

useEffect(() => {
  const fetch=async()=>{
    const data= await fetchData();
    setData(data);

  }

  fetch();
 
}, [])
const handleChange=async(count)=>{

setCountry(count)
const data= await fetchData(count);
setData(data);

}

  return (
    <div className={styles.container}>
      <img className={styles.image} height='200px'  src={coronaImage} alt='Covid-19'/>
     <Cards data={data}/>
     <CountryPicker handleChange={handleChange}/>
     <Chart data={data} country={country}/>
   
    </div>
  );
}

export default App;
