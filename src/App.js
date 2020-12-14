import React,{useEffect,useState} from 'react'
import './App.css';
import{Cards,Chart,CountryPicker} from './components/Index';
import styles from './App.module.css';
import { fetchData } from './api/Index';

function App() {
  const[data,setData]=useState({})

useEffect(() => {
  const fetch=async()=>{
    const data= await fetchData();
    setData(data);

  }

  fetch();
 
}, [])
  return (
    <div className={styles.container}>
     <Cards data={data}/>
     <CountryPicker/>
     <Chart/>
   
    </div>
  );
}

export default App;
