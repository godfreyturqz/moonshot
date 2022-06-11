import { APIService } from '@/services/axios'
import { Method } from 'axios'
import { useAuthContext } from '@/contexts/AuthContextProvider'
import { RecordData, RecordFormValues } from '../types/record.types'

export const useRecordService = () => {
	const { auth } = useAuthContext()

	const fetchFunction = async (
		method: Method,
		uid?: string,
		payload?: object,
		page?: number,
		limit?: number
	) => {
		try {
			const { data } = await new APIService(method, uid, payload).record(
				auth?.accessToken,
				page,
				limit
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

	const deleteOneRecord = (uid: string) => {
		return fetchFunction('DELETE', uid)
	}

	const getOneRecord = (uid: string) => {
		return fetchFunction('GET', uid)
	}

	const getRecords = (page?: number, limit?: number) => {
		return fetchFunction('GET', '', {}, page, limit)
	}

	const updateOneRecord = (uid: string, payload: RecordFormValues) => {
		return fetchFunction('PUT', uid, payload)
	}

	return {
		createRecord,
		deleteOneRecord,
		getOneRecord,
		getRecords,
		updateOneRecord,
	}
}
