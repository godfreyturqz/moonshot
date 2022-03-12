import axios, { Method } from 'axios'


export const fetchRecordAPI = async (method: Method, id?: string, payload?: object) => {
    const API_BASE_URL = 'http://localhost:5000/api/v1'

    const config = {
        url: `${API_BASE_URL}/record/${id}`,
        method,
        data: payload
    }

    const response = await axios.request(config)

    return response
}
