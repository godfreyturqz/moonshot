import { FetchAPI } from '@/utils/fetchAPI'
import { Method } from 'axios'

const func = async (method: Method, id?: string, payload?: object) => {
    try {
        const { data } = await new FetchAPI(method, id, payload).toLogin()
        console.log(data)
        return data
        
    } catch (error) {
        throw error
    }
}

export const loginUser = (payload: object) => {
    return func('POST', '', payload)
}
