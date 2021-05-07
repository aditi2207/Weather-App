import axios from 'axios'

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'c8d9eca8da70e5d428c137a53c076b72';

export const getWeatherData = async(cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}&units=metric`)
        return data
    }catch(error) {
        throw error;
    }
}
