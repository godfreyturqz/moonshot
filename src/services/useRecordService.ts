import { APIService } from '@/services/axios'
import { Method } from 'axios'
import { useAuthContext } from '@/contexts/AuthContextProvider'
import { RecordType } from './record.types'

const useRecordService = () => {
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

	const getRecords: () => Promise<RecordType[]> = async () => {
		return fetchFunction('GET')
	}

	const updateOneRecord = (id: string | undefined, payload: object) => {
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

export default useRecordService
