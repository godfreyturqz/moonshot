import { APIService } from '@/services/axios'
import { Method } from 'axios'
import { useAuthContext } from '@/contexts/AuthContextProvider'
import { RecordData, RecordFormValues } from '../types/record.types'

export const useRecordService = () => {
	const { auth } = useAuthContext()

	const fetchFunction = async (
		method: Method,
		id?: string,
		payload?: object
	) => {
		try {
			const { data } = await new APIService(method, id, payload).record(
				auth?.accessToken
			)
			return data
		} catch (error) {
			// use 'throw' to compliment with react-query
			throw error
		}
	}

	const createRecord = (payload: { uid: string }) => {
		return fetchFunction('POST', '', payload)
	}

	const deleteOneRecord = (id: string) => {
		return fetchFunction('DELETE', id)
	}

	const getOneRecord = (id: string) => {
		return fetchFunction('GET', id)
	}

	const getRecords = (payload: { page: number; limit: number }) => {
		console.log('log@useRecordService.ts', payload)
		return fetchFunction('GET', '', payload)
	}

	const updateOneRecord = (id: string, payload: RecordFormValues) => {
		return fetchFunction('PUT', id, payload)
	}

	return {
		createRecord,
		deleteOneRecord,
		getOneRecord,
		getRecords,
		updateOneRecord,
	}
}
