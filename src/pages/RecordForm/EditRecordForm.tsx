// COMPONENTS
import Button from '@/components/Inputs/Button'
import FormInputGroup from './FormInputGroup'
// LIBRARIES
import { SubmitHandler, useForm } from 'react-hook-form'
// SERVICES
import { updateOneRecord } from '@/services/record'
// TYPES
import { FormValues, RecordData } from './types'

type EditRecordFormType = {
	recordData: RecordData | undefined
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EditRecordForm: React.FC<EditRecordFormType> = ({
	recordData,
	setOpen,
}) => {
	const { register, control, reset, handleSubmit, formState } =
		useForm<FormValues>({})

	const onSubmit: SubmitHandler<FormValues> = async (formData) => {
		try {
			const data = await updateOneRecord(recordData?.uid, { ...formData })
			console.log(data)
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
