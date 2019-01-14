import axios from 'axios'

// 284106329151e9f973e9ac3c6ad06e40
// https://home.openweathermap.org/api_keys
const API_KEY = '284106329151e9f973e9ac3c6ad06e40';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    // return: Promise --> promise로 데이터가 반환? 되어 payload에 붙기 때문에 this.props.xxx 체크를 안해도 되는 것 같음..
    const request = axios.get(url);
    console.log('Request : ', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
};