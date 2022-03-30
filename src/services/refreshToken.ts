import axios from 'axios'

export const refresh = async () => {
    try {
        const { data } = await axios.get('http://localhost:5000/api/v1/refresh', {
            withCredentials: true
        })
        return data
        
    } catch (error) {
        console.log(error)
    }
}