import React,{useEffect,useState} from 'react'
import './App.css';
import{Cards,Chart,CountryPicker} from './components/Index';
import styles from './App.module.css';
import { fetchData } from './api/Index';

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
const handleChange=(count)=>{

setCountry(count)
}

  return (
    <div className={styles.container}>
     <Cards data={data}/>
     <CountryPicker handleChange={handleChange}/>
     <Chart/>
   
    </div>
  );
}

export default App;
