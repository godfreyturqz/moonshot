import { useQuery } from 'react-query'
import { getRecords, getOneRecord } from '@/services/record'


export const useRecordQuery = (id: string) => {
	const QUERY_KEY = 'RECORD'

	//---------
	// QUERIES
	//---------
	const { data, isLoading, isError, error } = useQuery(QUERY_KEY, getRecords)
	const oneRecord = useQuery([QUERY_KEY, id], () => getOneRecord(id))

	return {
		data,
		isLoading,
		isError,
		error,
		oneRecord,
	}
}
