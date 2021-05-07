import Characteristics from "./Characteristics"

import { WiThermometerExterior } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";

const Data = ({weatherData}) => {
    return (
        <div>
            <h1 style={{fontSize:"30px"}}>
            {weatherData.name}, &nbsp;
            {weatherData.sys.country}<br></br>
            <p id="desc">
                {weatherData.weather[0].description}
            </p>
          </h1>
          <div className="flexbox">
              <Characteristics title ="Feels Like" icon={<WiThermometerExterior fontSize="35px" />} charac = {weatherData.main.feels_like} unit = {<sup>°</sup>} val =" C" />
              <Characteristics title ="Humidity" icon={<WiHumidity fontSize="35px" />} charac = {weatherData.main.humidity} unit=" %" val = "" />
              <Characteristics title ="Sunrise" icon={<WiSunrise fontSize="35px" />} charac = {(new Date(weatherData.sys.sunrise*1000).toLocaleString()).split(' ')[1]} val=" AM" />
              <Characteristics title ="Max Temp" icon={<WiThermometer fontSize="35px" />} charac = {weatherData.main.temp_max} unit = {<sup>°</sup>} val =" C" />
          </div>
          <div className="flexbox">
            <Characteristics title ="Temperature" icon={<WiThermometerExterior fontSize="35px" />} charac = {weatherData.main.temp} unit = {<sup>°</sup>} val =" C" />
            <Characteristics title ="Cloudiness" icon={<WiCloud fontSize="35px" />} charac = {weatherData.clouds.all} val=" %" />
            <Characteristics title ="Sunset" icon={<WiSunset fontSize="35px" />} charac = {(new Date(weatherData.sys.sunset*1000).toLocaleString()).split(' ')[1]} val=" PM" />
            <Characteristics title ="Min Temp" icon={<WiThermometer fontSize="35px" />} charac = {weatherData.main.temp_min} unit = {<sup>°</sup>} val =" C" />             
          </div>
        </div>
    )
}

export default Data
