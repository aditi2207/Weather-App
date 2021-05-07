// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useEffect} from "react";
import './App.css';

import {getWeatherData} from "./data/weatherapi";

import Data from "./components/Data";

function App() {

  const [city , setCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)

  const getData = async(city) => {
    try{
      const data = await getWeatherData(city);
      setWeatherData(data)
      console.log(data)
      // let d = (new Date(data.sys.sunrise*1000).toLocaleString()).split(' ')[1];
      // console.log(d);
    }catch(error){
      console.log(error.message);
    }
  }

  const onSubmit = ((e) => {
    e.preventDefault();
    if (city !== "")
      getData(city);
    else
      alert("Enter city")
  })

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="App">
      <form className="search" onSubmit={onSubmit}>
        <input type="text" id="look" placeholder="Search.." onChange={e => setCity(e.target.value)} />
      </form>
      
      {weatherData !== null ? (
        <>
          <Data weatherData = {weatherData}/>
        </>
      ) : null}

    </div>
  );
}

export default App;
