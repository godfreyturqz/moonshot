import Axios from '@/services/axios'
import { Method } from 'axios'

const apiFunction = async (method: Method, id?: string, payload?: object) => {
	try {
		const { data } = await new Axios(method, id, payload).toRecord()
		return data
	} catch (error) {
		throw error
	}
}

export const createRecord = (payload: { uid: string }) => {
	return apiFunction('POST', '', payload)
}

export const deleteOneRecord = (id: string) => {
	return apiFunction('DELETE', id)
}

export const getOneRecord = (id: string) => {
	return apiFunction('GET', id)
}

export const getRecords = () => {
	return apiFunction('GET')
}

export const updateOneRecord = (id: string | undefined, payload: object) => {
	return apiFunction('PUT', id, payload)
}
