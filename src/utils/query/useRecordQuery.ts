// LIBRARIES
import { useMutation, useQuery, useQueryClient } from 'react-query'
// SERVICES
import { useRecordService } from '@/services/useRecordService'
// TYPES
import { RecordData } from '@/types/record.types'

export const useRecordQuery = () => {
	// services
	const { getRecords, deleteOneRecord } = useRecordService()

	// react query
	const QUERY_KEY = 'RECORDS'
	const queryClient = useQueryClient()

	const { data, isLoading } = useQuery(QUERY_KEY, getRecords)

	const handleDelete = useMutation((id: string) => deleteOneRecord(id), {
		onMutate: async (id: string) => {
			await queryClient.cancelQueries(QUERY_KEY)

			const previousState = queryClient.getQueryData<RecordData[]>(QUERY_KEY)

			if (previousState) {
				queryClient.setQueryData<RecordData[]>(
					QUERY_KEY,
					previousState.filter((item) => item.uid !== id)
				)
			}

			return { previousState }
		},
	})

	return {
		data,
		isLoading,
		handleDelete,
	}
}
