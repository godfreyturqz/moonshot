// LIBRARIES
import { useMutation, useQuery, useQueryClient } from 'react-query'
// SERVICES
import { useRecordService } from '@/services/useRecordService'
// TYPES
import { RecordData, RecordFormValues } from '@/types/record.types'

type UpdateMutationParamsType = {
	uid: string
	payload: RecordFormValues
}

type UseRecordQueryParamsType = {
	page: number
	limit: number
}

export const useRecordQuery = ({ page, limit }: UseRecordQueryParamsType) => {
	// services
	const { getRecords, deleteOneRecord, updateOneRecord } = useRecordService()

	// react query
	const QUERY_KEY = ['RECORDS', { page, limit }]
	const queryClient = useQueryClient()

	const { data, isLoading } = useQuery(
		QUERY_KEY,
		() => getRecords(page, limit),
		{ keepPreviousData: true }
	)

	const handleDelete = useMutation((uid: string) => deleteOneRecord(uid), {
		onMutate: async (uid: string) => {
			await queryClient.cancelQueries(QUERY_KEY)

			const previousState = queryClient.getQueryData<RecordData[]>(QUERY_KEY)

			if (previousState) {
				queryClient.setQueryData<RecordData[]>(
					QUERY_KEY,
					previousState.filter((item) => item.uid !== uid)
				)
			}

			return { previousState }
		},
		onSuccess: () => {
			queryClient.invalidateQueries(QUERY_KEY)
		},
	})

	const handleUpdate = useMutation(
		({ uid, payload }: UpdateMutationParamsType) =>
			updateOneRecord(uid, payload),
		{
			onMutate: async ({ uid, payload }: UpdateMutationParamsType) => {
				await queryClient.cancelQueries(QUERY_KEY)

				const previousState = queryClient.getQueryData<RecordData[]>(QUERY_KEY)

				if (previousState) {
					queryClient.setQueryData<RecordData[]>(
						QUERY_KEY,
						previousState.map((item) =>
							item.uid === uid ? { ...item, ...payload } : item
						)
					)
				}

				return { previousState }
			},
			onSuccess: () => {
				queryClient.invalidateQueries(QUERY_KEY)
			},
		}
	)

	return {
		data,
		isLoading,
		handleDelete,
		handleUpdate,
	}
}
