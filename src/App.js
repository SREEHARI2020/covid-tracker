import React,{useEffect} from 'react'
import './App.css';
import{Cards,Chart,CountryPicker} from './components/Index';
import styles from './App.module.css';
import { fetchData } from './api/Index';

function App() {

useEffect(() => {
  const fetch=async()=>{
    const data= await fetchData();
    console.log(data)

  }

  fetch();
 
}, [])
  return (
    <div className={styles.container}>
     <Cards/>
     <CountryPicker/>
     <Chart/>
   
    </div>
  );
}

export default App;
