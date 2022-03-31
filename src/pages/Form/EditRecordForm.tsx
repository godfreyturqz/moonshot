// COMPONENTS
import FormInputGroup from './FormInputGroup'
import Modal from '@/components/Modal'
// LIBRARIES
import { SubmitHandler } from 'react-hook-form'
// SERVICES
import { updateOneRecord } from '@/services/record'

interface IFormValues {
	firstName: string
	lastName: string
	email: string
	contact: string
	gender: string
	houseNumber: string
	street: string
	barangay: string
	city: string
	province: string
}

type EditRecordFormType = {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	id: string
}

const EditForm: React.FC<EditRecordFormType> = ({ open, setOpen, id }) => {
	const onSubmit: SubmitHandler<IFormValues> = async (formData) => {
		try {
			const data = await updateOneRecord(id, { ...formData })
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Modal open={open} setOpen={setOpen}>
			<div>
				<p>{id}</p>
				<FormInputGroup onSubmit={onSubmit} />
			</div>
		</Modal>
	)
}

export default EditForm
