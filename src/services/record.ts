import Axios from '@/services/axios'
import { Method } from 'axios'

interface RecordType {
	uid: string
	firstName: string
	lastName: string
	email: string
	contact: string
	gender: string
	houseNumber: string
	street: string
	barangay: string
	city: string
	province: string
}

const apiFunction = async (method: Method, id?: string, payload?: object) => {
	try {
		const { data } = await new Axios(method, id, payload).toRecord()
		return data
	} catch (error) {
		console.log(error)
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

export const getRecords: () => Promise<RecordType[]> = () => {
	return apiFunction('GET')
}

export const updateOneRecord = (id: string | undefined, payload: object) => {
	return apiFunction('PUT', id, payload)
}
