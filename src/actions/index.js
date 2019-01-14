import axios from 'axios'

// 284106329151e9f973e9ac3c6ad06e40
// https://home.openweathermap.org/api_keys
const API_KEY = '284106329151e9f973e9ac3c6ad06e40';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    // return: Promise
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
};