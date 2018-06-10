
import axios from 'axios'
import { getAccessToken } from './AuthService'

const BASE_URL = 'http://localhost:3000'

function getFoodData() {
    const url = `${BASE_URL}/api/jokes/food`
    return axios.get(url).then(res => res.data)
}



function getCelebrityData() {
    const url = `${BASE_URL}/api/jokes/celebrity`
    return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data)
}

export {getFoodData, getCelebrityData}