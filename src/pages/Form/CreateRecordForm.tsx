// COMPONENTS
import FormInputGroup from './FormInputGroup'
// LIBRARIES
import { nanoid } from 'nanoid'
import { useForm, SubmitHandler } from 'react-hook-form'
// SERVICES
import { createRecord } from '@/services/record'

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

const CreateRecord = () => {
	const { reset } = useForm<IFormValues>({})

	const onSubmit: SubmitHandler<IFormValues> = async (formData) => {
		try {
			const data = await createRecord({ uid: nanoid(), ...formData })
			;(await data) && reset()
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="container p-5">
			<div className="md:grid md:grid-cols-4 md:gap-6">
				<div className="md:col-span-1">
					<div className="px-4 sm:px-0">
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Personal Information
						</h3>
						<p className="mt-1 text-sm text-gray-600">
							Please fill out the form as completely and accurately as possible.
						</p>
					</div>
				</div>
				<div className="mt-5 md:mt-0 md:col-span-2">
					<FormInputGroup onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	)
}

export default CreateRecord

// TODO
// 1. UIs, install nanoid and react-hook-form, API functions - DONE
// 2. register each Input using react hook form - DONE
// 3. react-hook-form reset -DONE
