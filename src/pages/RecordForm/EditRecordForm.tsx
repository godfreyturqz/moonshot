// COMPONENTS
import FormInputGroup from './FormInputGroup'
import Modal from '@/components/Modal/Modal'
// LIBRARIES
import { SubmitHandler, useForm } from 'react-hook-form'
// SERVICES
import { updateOneRecord } from '@/services/record'
// TYPES
import { FormValues, RecordData } from './types'

type EditRecordFormType = {
	recordData: RecordData | undefined
}

const EditRecordForm: React.FC<EditRecordFormType> = ({ recordData }) => {
	const { register, control, reset, handleSubmit, formState } =
		useForm<FormValues>({})
	const onSubmit: SubmitHandler<FormValues> = async (formData) => {
		try {
			const data = await updateOneRecord(recordData?.uid, { ...formData })
			console.log(data)
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
						recordData={recordData}
						register={register}
						control={control}
						formState={formState}
					/>
					<button>save</button>
				</form>
			</div>
		</div>
	)
}

export default EditRecordForm
