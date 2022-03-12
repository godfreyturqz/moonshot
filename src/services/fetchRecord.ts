import { FetchAPI } from '@/utils/fetchAPI'
import { Method } from 'axios'

const fetchRecord = async (method: Method, id?: string, payload?: object) => {
    try {
        const { data } = await new FetchAPI(method, id, payload).toRecord()
        return data
        
    } catch (error) {
        throw error
    }
}

export const createRecordAPI = (payload: object) => {
    return fetchRecord('POST', '', payload)
}

export const deleteOneRecordAPI = (id: string) => {
    return fetchRecord('DELETE', id)
}

export const getOneRecordAPI = (id: string) => {
    return fetchRecord('GET', id)
}

export const getRecordsAPI = () => {
    return fetchRecord('GET')
}

export const updateOneRecordAPI = (id: string, payload: object) => {
    return fetchRecord('PUT', id, payload)
}
