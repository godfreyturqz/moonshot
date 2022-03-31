import Axios from '@/services/axios'
import { Method } from 'axios'

const recordApi = async (method: Method, id?: string, payload?: object) => {
	try {
		const { data } = await new Axios(method, id, payload).toRecord()
		return data
	} catch (error) {
		throw error
	}
}

export const createRecord = (payload: { uid: string }) => {
	return recordApi('POST', '', payload)
}

export const deleteOneRecord = (id: string) => {
	return recordApi('DELETE', id)
}

export const getOneRecord = (id: string) => {
	return recordApi('GET', id)
}

export const getRecords = () => {
	return recordApi('GET')
}

export const updateOneRecord = (id: string, payload: object) => {
	return recordApi('PUT', id, payload)
}
