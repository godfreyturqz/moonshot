// COMPONENTS
import Button from '@/components/Inputs/Button'
import FormInputGroup from './FormInputGroup'
// LIBRARIES
import { SubmitHandler, useForm } from 'react-hook-form'
// SERVICES
// import { useRecordService } from '@/services/useRecordService'
// TYPES
import { RecordData, RecordFormValues } from '@/types/record.types'
import { useRecordQuery } from '@/utils/query/useRecordQuery'

type EditRecordFormType = {
	recordData: RecordData
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	page: number
	limit: number
}

const EditRecordForm: React.FC<EditRecordFormType> = ({
	recordData,
	setOpen,
	page,
	limit,
}) => {
	// const { updateOneRecord } = useRecordService()
	const { handleUpdate } = useRecordQuery({ page, limit })
	const { register, control, reset, handleSubmit, formState } =
		useForm<RecordFormValues>({})

	const onSubmit: SubmitHandler<RecordFormValues> = async (formData) => {
		try {
			// const data = await updateOneRecord(recordData?.uid, { ...formData })
			handleUpdate.mutate({ uid: recordData?.uid, payload: formData })
			setOpen(false)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h3 className="text-gray-900">Edit Information</h3>
			<p className="text-sm text-gray-500 mt-2">Click save when done</p>
			<div className="mt-2">
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormInputGroup
						register={register}
						control={control}
						formState={formState}
						recordData={recordData}
					/>
					<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<span className="px-3">
							<Button variant="secondary" onClick={() => setOpen(false)}>
								Cancel
							</Button>
						</span>
						<Button>Save</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditRecordForm
