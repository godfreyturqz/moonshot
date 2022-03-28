import Axios from '@/services/axios'
import { Method } from 'axios'

const api = async (method: Method, id?: string, payload?: object) => {
    try {
        const { data } = await new Axios(method, id, payload).toLogin()
        return data
        
    } catch (error) {
        throw error
    }
}

export const loginUser = (payload: object) => {
    return api('POST', '', payload)
}
