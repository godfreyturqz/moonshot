import { useEffect } from 'react'
// COMPONENTS
import FormInputGroup from './FormInputGroup'
import Modal from '@/components/Modal'
// LIBRARIES
import { SubmitHandler } from 'react-hook-form'
// SERVICES
import { updateOneRecord } from '@/services/record'
// TYPES
import { FormValues, DataType } from './types'

type EditRecordFormType = {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	recordData: DataType | null | undefined
}

const EditRecordForm: React.FC<EditRecordFormType> = ({
	open,
	setOpen,
	recordData,
}) => {
	const onSubmit: SubmitHandler<FormValues> = async (formData) => {
		try {
			const data = await updateOneRecord(recordData?.uid, { ...formData })
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Modal open={open} setOpen={setOpen}>
			<div>
				<p>{recordData?.uid}</p>
				<FormInputGroup onSubmit={onSubmit} recordData={recordData} />
			</div>
		</Modal>
	)
}

export default EditRecordForm
